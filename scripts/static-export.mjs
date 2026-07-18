import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const clientDir = resolve("dist/client");

const categoryPaths = ["/invest", "/rentals", "/visas", "/areas", "/guides"];

const articlePaths = [
  "/invest/dubai-property-investment-remote-workers-guide-2026",
  "/invest/off-plan-vs-ready-property-dubai-roi-2026",
  "/invest/best-dubai-areas-digital-nomad-investment-2026",
  "/rentals/dubai-airbnb-investment-roi-data-2026",
  "/rentals/monthly-vs-yearly-rentals-dubai-remote-workers",
  "/rentals/furnished-apartments-dubai-digital-nomads-2026",
  "/visas/dubai-golden-visa-property-requirements-2026",
  "/visas/dubai-digital-nomad-visa-property-application-2026",
  "/visas/dubai-property-investor-visa-minimum-investment-2026",
  "/areas/dubai-marina-vs-downtown-remote-workers-2026",
  "/areas/jvc-dubai-property-investment-guide-2026",
  "/areas/dubai-hills-estate-neighborhood-guide-2026",
  "/guides/buy-property-dubai-foreigner-legal-guide-2026",
  "/guides/dubai-property-taxes-fees-2026",
  "/guides/brazilian-investor-dubai-real-estate-guide",
];

const pagePaths = [
  "/",
  "/about",
  "/editorial-policy",
  "/disclaimer",
  "/privacy",
  "/contact",
  ...categoryPaths,
  ...articlePaths,
];

const sitemapPaths = [
  ...pagePaths,
];

const serverEntry = await import(pathToFileURL(resolve("dist/server/index.mjs")).href);
const server = serverEntry.default ?? serverEntry;

if (typeof server.fetch !== "function") {
  throw new Error("Static export failed: dist/server/index.mjs does not export a fetch handler.");
}

await Promise.all(pagePaths.map(exportHtmlPage));
await writeTextFile("sitemap.xml", buildSitemap());
await writeTextFile(".htaccess", buildHtaccess());

console.log(`Static export completed: ${pagePaths.length} HTML pages + sitemap.xml in dist/client`);

async function exportHtmlPage(path) {
  const response = await server.fetch(new Request(`http://localhost${path}`), {}, createExecutionContext());
  const body = await response.text();

  if (!response.ok) {
    throw new Error(`Static export failed for ${path}: ${response.status} ${response.statusText}\n${body.slice(0, 500)}`);
  }

  if (!response.headers.get("content-type")?.includes("text/html")) {
    throw new Error(`Static export failed for ${path}: expected HTML response.`);
  }

  const outputFile = path === "/" ? "index.html" : join(path.slice(1), "index.html");
  await writeTextFile(outputFile, body);
}

async function writeTextFile(relativePath, contents) {
  const filePath = join(clientDir, relativePath);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, contents, "utf8");
}

function buildSitemap() {
  const urls = sitemapPaths
    .map((path) => {
      const priority = path === "/" ? "1.0" : articlePaths.includes(path) ? "0.8" : "0.7";
      return [
        "  <url>",
        `    <loc>https://unitedubai.blog${path}</loc>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function buildHtaccess() {
  return [
    "Options -MultiViews",
    "DirectoryIndex index.html",
    "ErrorDocument 404 /index.html",
    "",
  ].join("\n");
}

function createExecutionContext() {
  return {
    waitUntil() {},
    passThroughOnException() {},
    props: {},
  };
}