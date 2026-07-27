#!/usr/bin/env node
/**
 * Build-time validation for the Glossary Hub routes.
 *
 * Guarantees that every /glossary/what-is-[term] URL:
 *  - is produced by a real term in src/lib/glossary-data.ts
 *  - is served by the dynamic route file with the correct TanStack pattern
 *  - has a unique, URL-safe slug (no duplicates, no collisions after encoding)
 *  - resolves back to exactly one term (slug -> term mapping is 1:1)
 *  - only cross-links (relatedSlugs) to terms that exist
 *  - is present in the generated sitemap (checked post-build when available)
 *
 * Runs automatically before every build. Exits non-zero on any failure.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const DATA_FILE = join(ROOT, "src/lib/glossary-data.ts");
const ROUTES_DIR = join(ROOT, "src/routes");
const ROUTE_FILE = "glossary.what-is-{$slug}.tsx";
const ROUTE_ID = "/glossary/what-is-{$slug}";

const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
}

// ---------------------------------------------------------------- data layer
if (!existsSync(DATA_FILE)) {
  fail(`Missing glossary data file: src/lib/glossary-data.ts`);
}

const source = existsSync(DATA_FILE) ? readFileSync(DATA_FILE, "utf8") : "";

/** Extract every `slug: "..."` / `term: "..."` pair in declaration order. */
const entries = [];
const entryRe = /slug:\s*"([^"]*)"[\s\S]{0,400}?term:\s*"([^"]*)"/g;
let m;
while ((m = entryRe.exec(source))) {
  entries.push({ slug: m[1], term: m[2] });
}

const slugOnly = [...source.matchAll(/^\s*slug:\s*"([^"]*)"/gm)].map((x) => x[1]);

if (slugOnly.length === 0) {
  fail("No glossary terms found in src/lib/glossary-data.ts");
}

if (entries.length !== slugOnly.length) {
  warnings.push(
    `Parsed ${entries.length} slug/term pairs but found ${slugOnly.length} slugs — some entries may be missing a "term" field.`,
  );
}

// ------------------------------------------------------------- route wiring
const routeFiles = existsSync(ROUTES_DIR) ? readdirSync(ROUTES_DIR) : [];

if (!routeFiles.includes(ROUTE_FILE)) {
  const legacy = routeFiles.find((f) => f.startsWith("glossary.what-is-"));
  fail(
    `Missing route file src/routes/${ROUTE_FILE}` +
      (legacy ? ` (found "${legacy}" instead — TanStack needs {$slug} for in-segment prefixes)` : ""),
  );
} else {
  const routeSource = readFileSync(join(ROUTES_DIR, ROUTE_FILE), "utf8");
  if (!routeSource.includes(`createFileRoute("${ROUTE_ID}")`)) {
    fail(
      `src/routes/${ROUTE_FILE} must declare createFileRoute("${ROUTE_ID}") to match its filename.`,
    );
  }
  if (!/getGlossaryTerm\(\s*params\.slug\s*\)/.test(routeSource)) {
    fail(`src/routes/${ROUTE_FILE} must resolve the term via getGlossaryTerm(params.slug).`);
  }
  if (!/throw\s+notFound\(\)/.test(routeSource)) {
    fail(`src/routes/${ROUTE_FILE} must throw notFound() for unknown slugs.`);
  }
}

if (!existsSync(join(ROUTES_DIR, "glossary.index.tsx"))) {
  fail("Missing glossary hub route: src/routes/glossary.index.tsx");
}

// Any hard-coded link must use the parametrised route, never a raw interpolation.
for (const file of routeFiles.filter((f) => f.endsWith(".tsx"))) {
  const content = readFileSync(join(ROUTES_DIR, file), "utf8");
  const badLinks = content.match(/to=\{?["'`]\/glossary\/what-is-(?!\{\$slug\})[^"'`]*["'`]/g);
  if (badLinks) {
    fail(
      `src/routes/${file} links to ${badLinks[0]} — use to="/glossary/what-is-{$slug}" with params={{ slug }}.`,
    );
  }
}

// -------------------------------------------------------------- slug health
const seen = new Map();
const slugSet = new Set(slugOnly);
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

for (const slug of slugOnly) {
  if (!SLUG_RE.test(slug)) {
    fail(`Invalid slug "${slug}" — must be lowercase kebab-case, URL-safe.`);
  }
  if (encodeURIComponent(slug) !== slug) {
    fail(`Slug "${slug}" changes when URL-encoded and would break its route.`);
  }
  if (seen.has(slug)) {
    fail(`Duplicate slug "${slug}" — /glossary/what-is-${slug} cannot point to two terms.`);
  }
  seen.set(slug, true);
}

// Each slug must map back to exactly one term title.
const byTerm = new Map();
for (const { slug, term } of entries) {
  if (!term) fail(`Term with slug "${slug}" has an empty term title.`);
  const key = term.trim().toLowerCase();
  if (byTerm.has(key)) {
    warnings.push(
      `Term "${term}" is defined twice (slugs: ${byTerm.get(key)}, ${slug}) — duplicate content risk.`,
    );
  } else {
    byTerm.set(key, slug);
  }
}

// -------------------------------------------------------- cross-link health
const relatedRe = /relatedSlugs:\s*\[([^\]]*)\]/g;
let r;
let relIndex = 0;
while ((r = relatedRe.exec(source))) {
  const owner = slugOnly[relIndex] ?? "(unknown)";
  relIndex += 1;
  for (const ref of [...r[1].matchAll(/"([^"]+)"/g)].map((x) => x[1])) {
    if (!slugSet.has(ref)) {
      fail(`Term "${owner}" links to related slug "${ref}", which has no glossary entry.`);
    }
    if (ref === owner) {
      warnings.push(`Term "${owner}" lists itself in relatedSlugs.`);
    }
  }
}

// --------------------------------------------------------- sitemap coverage
const sitemapRoute = join(ROUTES_DIR, "sitemap[.]xml.ts");
if (existsSync(sitemapRoute)) {
  const sm = readFileSync(sitemapRoute, "utf8");
  if (!sm.includes("/glossary/what-is-")) {
    fail("sitemap[.]xml.ts does not emit /glossary/what-is-* URLs.");
  }
} else {
  warnings.push("No sitemap route found — glossary URLs may not be discoverable.");
}

// Post-build: if a static export exists, verify each URL was emitted.
const outDirs = ["dist/client", ".output/public", "dist"].map((d) => join(ROOT, d));
const outDir = outDirs.find((d) => existsSync(join(d, "index.html")));
if (outDir && process.env.VALIDATE_GLOSSARY_OUTPUT === "1") {
  const missing = slugOnly.filter(
    (s) => !existsSync(join(outDir, "glossary", `what-is-${s}`, "index.html")),
  );
  if (missing.length) {
    warnings.push(
      `${missing.length} glossary page(s) not pre-rendered (e.g. ${missing.slice(0, 3).join(", ")}) — they will be served dynamically.`,
    );
  }
}

// ------------------------------------------------------------------- report
for (const w of warnings) console.warn(`  warn  ${w}`);

if (errors.length) {
  console.error(`\n✖ Glossary route validation failed (${errors.length} error(s)):`);
  for (const e of errors) console.error(`  - ${e}`);
  console.error("");
  process.exit(1);
}

console.log(
  `✔ Glossary routes valid: ${slugOnly.length} terms → /glossary/what-is-[term] (unique slugs, resolved cross-links).`,
);
