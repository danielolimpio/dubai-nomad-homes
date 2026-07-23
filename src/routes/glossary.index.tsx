import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";
import {
  glossaryTerms,
  glossaryCategories,
  glossaryLetters,
} from "@/lib/glossary-data";

const URL = "https://dubai-nomad-homes.lovable.app/glossary";

export const Route = createFileRoute("/glossary/")({
  head: () => ({
    meta: [
      { title: "Dubai Real Estate Glossary — A–Z Terms | UnitedDubai" },
      {
        name: "description",
        content:
          "The complete Dubai real estate glossary for remote workers and investors: freehold, Golden Visa, Ejari, RERA, Oqood, ADR, net yield and 40+ more terms defined.",
      },
      { property: "og:title", content: "Dubai Real Estate Glossary — A–Z Terms | UnitedDubai" },
      {
        property: "og:description",
        content:
          "Search 40+ Dubai property terms: visas, rentals, taxes, freehold zones and investment metrics — plain English, expert-reviewed.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Dubai Real Estate Glossary",
          description:
            "A–Z glossary of Dubai real-estate terms for remote workers, digital nomads and foreign investors.",
          url: URL,
          hasPart: glossaryTerms.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.shortAnswer,
            url: `${URL}/what-is-${t.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://dubai-nomad-homes.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Glossary", item: URL },
          ],
        }),
      },
    ],
  }),
  component: GlossaryHub,
});

function GlossaryHub() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [letter, setLetter] = useState<string>("all");

  const filtered = useMemo(() => {
    return glossaryTerms
      .filter((t) => (cat === "all" ? true : t.category === cat))
      .filter((t) => (letter === "all" ? true : t.term.toUpperCase().startsWith(letter)))
      .filter((t) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
          t.term.toLowerCase().includes(q) ||
          t.shortAnswer.toLowerCase().includes(q) ||
          (t.synonyms || []).some((s) => s.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [query, cat, letter]);

  const popular = glossaryTerms.filter((t) =>
    ["golden-visa", "digital-nomad-visa", "freehold-property", "off-plan-property", "net-yield", "holiday-home-permit"].includes(t.slug),
  );

  const recent = [...glossaryTerms].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-[1240px] px-4 py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-1">›</span>
            <span>Glossary</span>
          </nav>
          <span className="category-badge">Knowledge Hub</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            Dubai Real Estate Glossary
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Every term a remote worker, digital nomad or foreign investor needs to
            navigate Dubai property — from Freehold and Oqood to Golden Visa and Net Yield.
          </p>

          {/* Search */}
          <div className="mt-6 max-w-2xl">
            <label htmlFor="glossary-search" className="sr-only">Search glossary terms</label>
            <input
              id="glossary-search"
              type="search"
              placeholder="Search terms, e.g. 'Golden Visa', 'Ejari', 'net yield'…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base shadow-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category filters */}
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              onClick={() => setCat("all")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium border transition ${cat === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"}`}
            >
              All ({glossaryTerms.length})
            </button>
            {glossaryCategories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCat(c.slug)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium border transition ${cat === c.slug ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"}`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1240px] px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-8">
          {/* Alphabet sidebar */}
          <aside className="lg:sticky lg:top-6 self-start">
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
              Jump to letter
            </h2>
            <div className="grid grid-cols-6 lg:grid-cols-4 gap-1.5">
              <button
                onClick={() => setLetter("all")}
                className={`rounded-md px-2 py-2 text-sm font-semibold border transition ${letter === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"}`}
              >
                All
              </button>
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((L) => {
                const has = glossaryLetters.includes(L);
                return (
                  <button
                    key={L}
                    disabled={!has}
                    onClick={() => setLetter(L)}
                    className={`rounded-md px-2 py-2 text-sm font-semibold border transition ${
                      letter === L
                        ? "bg-primary text-primary-foreground border-primary"
                        : has
                          ? "bg-card border-border hover:border-primary"
                          : "bg-muted text-muted-foreground/40 border-transparent cursor-not-allowed"
                    }`}
                  >
                    {L}
                  </button>
                );
              })}
            </div>

            <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
              Categories
            </h2>
            <ul className="space-y-1.5">
              {glossaryCategories.map((c) => (
                <li key={c.slug}>
                  <button
                    onClick={() => setCat(c.slug)}
                    className={`w-full text-left rounded-md px-3 py-2 text-sm transition ${cat === c.slug ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted"}`}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Results */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-xl font-bold">
                {filtered.length} {filtered.length === 1 ? "term" : "terms"}
              </h2>
              {(query || cat !== "all" || letter !== "all") && (
                <button
                  onClick={() => { setQuery(""); setCat("all"); setLetter("all"); }}
                  className="text-sm text-primary hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-lg border border-dashed border-border p-10 text-center text-muted-foreground">
                No terms match your search.
              </div>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((t) => (
                  <li key={t.slug}>
                    <Link
                      to="/glossary/what-is-$slug"
                      params={{ slug: t.slug }}
                      className="block h-full rounded-xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold group-hover:text-primary">
                          {t.term}
                        </h3>
                        <span className="shrink-0 rounded-full bg-primary/10 text-primary text-[11px] font-semibold px-2 py-0.5">
                          {glossaryCategories.find((c) => c.slug === t.category)?.name}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {t.shortAnswer}
                      </p>
                      <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary">
                        Read definition →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Right rail */}
          <aside className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
                🔥 Popular Terms
              </h2>
              <ul className="space-y-2">
                {popular.map((t) => (
                  <li key={t.slug}>
                    <Link
                      to="/glossary/what-is-$slug"
                      params={{ slug: t.slug }}
                      className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                    >
                      {t.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
                ✨ Recently Updated
              </h2>
              <ul className="space-y-2">
                {recent.map((t) => (
                  <li key={t.slug}>
                    <Link
                      to="/glossary/what-is-$slug"
                      params={{ slug: t.slug }}
                      className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                    >
                      {t.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-bold mb-1">New to Dubai property?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Start with the buyer's legal guide for foreigners.
              </p>
              <Link
                to="/$category/$slug"
                params={{ category: "guides", slug: "buy-property-dubai-foreigner-legal-guide-2026" }}
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Open the guide →
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
