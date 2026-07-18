import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: "Editorial Policy | UnitedDubai Blog" },
      { name: "description", content: "Our editorial standards: sourcing, fact-checking, corrections, disclosure and separation between editorial and commercial content." },
      { property: "og:title", content: "Editorial Policy — UnitedDubai Blog" },
      { property: "og:description", content: "How UnitedDubai Blog researches, fact-checks and publishes content." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-primary pb-3 inline-block">Editorial Policy</h1>
        <h2 className="text-2xl font-bold mt-8 mb-3">Sourcing</h2>
        <p>All quantitative claims must be sourced to a public data provider or a named research report. Our default sources include the Dubai Land Department, RERA, DET, ICP, Bayut, Property Finder, Property Monitor, CBRE and JLL.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Fact-checking</h2>
        <p>Every article is reviewed for factual accuracy before publication. Numeric figures are cross-checked against the referenced source, and regulatory statements are verified against the current published version of the applicable law or decree.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Corrections</h2>
        <p>If we publish inaccurate information, we correct it promptly and note the correction at the bottom of the article. Send corrections to editorial@uniteddubai.blog.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Editorial independence</h2>
        <p>Editorial content is separated from advertising. Sponsored content, if any, is labelled clearly. Our editorial coverage of a developer, agency or product is not conditioned on any commercial relationship.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">No financial advice</h2>
        <p>Our content is informational and does not constitute financial, legal or tax advice. Readers should consult qualified professionals before making investment decisions. See our Disclaimer for full terms.</p>
      </main>
      <SiteFooter />
    </div>
  ),
});
