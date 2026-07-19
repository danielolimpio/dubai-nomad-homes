import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | UnitedDubai Blog" },
      { name: "description", content: "UnitedDubai Blog publishes informational content only. Nothing on this site constitutes financial, legal or tax advice." },
      { property: "og:title", content: "Disclaimer — UnitedDubai Blog" },
      { property: "og:description", content: "UnitedDubai Blog publishes informational content only. Not financial, legal or tax advice." },
      { property: "og:url", content: "https://dubai-nomad-homes.lovable.app/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "https://dubai-nomad-homes.lovable.app/disclaimer" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-primary pb-3 inline-block">Disclaimer</h1>
        <p>The information published on UnitedDubai Blog is provided for general informational and educational purposes only. It is not intended to constitute, and should not be treated as, financial, investment, legal, tax or professional advice.</p>
        <p>Real-estate markets, tax regimes and immigration regulations change. Data cited on this site reflects the source and time referenced in the article. We make no warranty regarding continued accuracy after publication.</p>
        <p>Before making any real-estate purchase, rental, immigration or financial decision, readers should consult with a licensed professional in the relevant jurisdiction, including but not limited to a RERA-registered broker, a UAE-licensed lawyer, a certified accountant and a licensed immigration consultant.</p>
        <p>UnitedDubai Blog, its editors and its authors accept no liability for any loss or damage arising from reliance on information published on this site.</p>
        <p>External links are provided as a convenience. We do not endorse and are not responsible for the content of third-party websites.</p>
      </main>
      <SiteFooter />
    </div>
  ),
});
