import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";
import {
  getGlossaryTerm,
  getRelatedTerms,
  glossaryCategories,
  glossaryTerms,
} from "@/lib/glossary-data";
import { articles } from "@/lib/blog-data";

const BASE = "https://dubai-nomad-homes.lovable.app";

export const Route = createFileRoute("/glossary/what-is-$slug")({
  loader: ({ params }) => {
    const term = getGlossaryTerm(params.slug);
    if (!term) throw notFound();
    return { term };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Term not found — UnitedDubai Glossary" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { term } = loaderData;
    const url = `${BASE}/glossary/what-is-${params.slug}`;
    const title = `What is ${term.term}? Definition & Meaning | UnitedDubai Glossary`;
    const description = term.shortAnswer.slice(0, 158);

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: `What is ${term.term}? | UnitedDubai` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `What is ${term.term}?` },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: term.term,
            description: term.shortAnswer,
            url,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "Dubai Real Estate Glossary",
              url: `${BASE}/glossary`,
            },
            ...(term.synonyms && term.synonyms.length ? { alternateName: term.synonyms } : {}),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: term.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
              { "@type": "ListItem", position: 2, name: "Glossary", item: `${BASE}/glossary` },
              { "@type": "ListItem", position: 3, name: term.term, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `What is ${term.term}?`,
            description: term.shortAnswer,
            author: { "@type": "Organization", name: "UnitedDubai Editorial" },
            publisher: {
              "@type": "Organization",
              name: "UnitedDubai Blog",
              logo: { "@type": "ImageObject", url: `${BASE}/favicon.ico` },
            },
            dateModified: term.updated,
            datePublished: term.updated,
            mainEntityOfPage: url,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".glossary-short-answer", ".glossary-h2"],
            },
          }),
        },
      ],
    };
  },
  component: TermPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Term not found</h1>
        <p className="mt-2 text-muted-foreground">This glossary entry doesn't exist yet.</p>
        <Link to="/glossary" className="mt-6 inline-block text-primary font-semibold hover:underline">
          ← Back to glossary
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function TermPage() {
  const { term } = Route.useLoaderData();
  const related = getRelatedTerms(term);
  const catName = glossaryCategories.find((c) => c.slug === term.category)?.name;
  const relatedArticles =
    term.relatedArticleSlugs
      ?.map((r) => articles.find((a) => a.category === r.category && a.slug === r.slug))
      .filter(Boolean) || [];

  // Sibling terms in same category for "Continue Learning"
  const siblings = glossaryTerms
    .filter((t) => t.category === term.category && t.slug !== term.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-[1200px] px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-1">›</span>
          <Link to="/glossary" className="hover:text-primary">Glossary</Link>
          <span className="mx-1">›</span>
          <span className="text-foreground">{term.term}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          <article>
            <header className="mb-8 pb-6 border-b border-border">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="category-badge">{catName}</span>
                <span className="text-xs text-muted-foreground">
                  Updated {new Date(term.updated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span className="text-xs text-muted-foreground">· {term.readingMinutes} min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{term.term}</h1>
              {term.synonyms && term.synonyms.length > 0 && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Also known as: <span className="italic">{term.synonyms.join(", ")}</span>
                </p>
              )}
            </header>

            {/* Quick answer for AI Overviews / Featured Snippets */}
            <section aria-labelledby="quick-answer" className="mb-10">
              <h2 id="quick-answer" className="glossary-h2 text-2xl font-bold mb-3">
                What is {term.term}?
              </h2>
              <div className="glossary-short-answer rounded-xl border-l-4 border-primary bg-primary/5 p-5 text-lg leading-relaxed">
                {term.shortAnswer}
              </div>
            </section>

            {/* Definition */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-3">Definition</h2>
              <p className="text-base leading-relaxed text-foreground/90">{term.definition}</p>
            </section>

            {/* Key Facts */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Key Facts</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {term.keyFacts.map((f, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="shrink-0 grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How It Works */}
            {term.howItWorks && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <ol className="space-y-3 list-decimal list-inside marker:text-primary marker:font-bold">
                  {term.howItWorks.map((s, i) => (
                    <li key={i} className="text-base leading-relaxed pl-2">{s}</li>
                  ))}
                </ol>
              </section>
            )}

            {/* Practical Example */}
            {term.practicalExample && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-3">Practical Example</h2>
                <div className="rounded-xl bg-muted/50 border border-border p-5">
                  <p className="text-base leading-relaxed">{term.practicalExample}</p>
                </div>
              </section>
            )}

            {/* Why It Matters */}
            {term.whyItMatters && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-3">Why It Matters</h2>
                <p className="text-base leading-relaxed text-foreground/90">{term.whyItMatters}</p>
              </section>
            )}

            {/* Advantages / Disadvantages */}
            {(term.advantages || term.disadvantages) && (
              <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {term.advantages && (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                    <h3 className="text-lg font-bold mb-3 text-emerald-700">✓ Advantages</h3>
                    <ul className="space-y-2">
                      {term.advantages.map((a, i) => (
                        <li key={i} className="text-sm leading-relaxed flex gap-2">
                          <span className="text-emerald-600">•</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {term.disadvantages && (
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
                    <h3 className="text-lg font-bold mb-3 text-amber-700">⚠ Disadvantages</h3>
                    <ul className="space-y-2">
                      {term.disadvantages.map((a, i) => (
                        <li key={i} className="text-sm leading-relaxed flex gap-2">
                          <span className="text-amber-600">•</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* Common Mistakes */}
            {term.commonMistakes && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Common Mistakes</h2>
                <ul className="space-y-2">
                  {term.commonMistakes.map((m, i) => (
                    <li key={i} className="flex gap-3 text-base leading-relaxed">
                      <span className="text-primary font-bold">✗</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQs */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {term.faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-border bg-card p-5 open:border-primary/50 open:shadow-sm"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                      <h3 className="text-base md:text-lg font-semibold">{f.q}</h3>
                      <span className="shrink-0 text-primary text-xl group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Guides */}
            {relatedArticles.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">📚 Deep Dive — Related Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedArticles.map((a) => (
                    <Link
                      key={a!.slug}
                      to="/$category/$slug"
                      params={{ category: a!.category, slug: a!.slug }}
                      className="group rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition"
                    >
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img src={a!.cover} alt={a!.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="p-4">
                        <span className="category-badge">{a!.category}</span>
                        <h3 className="mt-2 font-bold leading-snug group-hover:text-primary">{a!.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* References */}
            <section className="mb-6 rounded-xl border border-border bg-muted/30 p-5">
              <h2 className="text-lg font-bold mb-2">References & Further Reading</h2>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Dubai Land Department (DLD) — official transaction & title records.</li>
                <li>Real Estate Regulatory Agency (RERA) — Ejari, Mollak & rental index.</li>
                <li>Department of Economy and Tourism (DET) — Holiday Home permits.</li>
                <li>Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) — visa rules.</li>
              </ul>
              <p className="mt-3 text-xs text-muted-foreground italic">
                This entry is editorial and informational. It does not constitute legal, financial or tax advice.
              </p>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related Terms */}
            {related.length > 0 && (
              <div className="rounded-xl border border-border p-5">
                <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
                  Related Terms
                </h2>
                <ul className="space-y-1.5">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/glossary/what-is-$slug"
                        params={{ slug: r.slug }}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-muted hover:text-primary transition"
                      >
                        → {r.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Continue Learning */}
            {siblings.length > 0 && (
              <div className="rounded-xl border border-border p-5">
                <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
                  Continue Learning — {catName}
                </h2>
                <ul className="space-y-1.5">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/glossary/what-is-$slug"
                        params={{ slug: s.slug }}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-muted transition"
                      >
                        {s.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-bold mb-1">Browse the full glossary</h3>
              <p className="text-sm text-muted-foreground mb-3">
                40+ Dubai real-estate terms, A to Z.
              </p>
              <Link to="/glossary" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                ← All terms
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
