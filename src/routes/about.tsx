import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | UnitedDubai Blog" },
      { name: "description", content: "Independent editorial coverage of Dubai real estate for remote workers and international investors, backed by DLD and RERA data." },
      { property: "og:title", content: "About UnitedDubai Blog" },
      { property: "og:description", content: "Independent editorial coverage of Dubai real estate for remote workers and international investors." },
      { property: "og:url", content: "https://dubai-nomad-homes.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://dubai-nomad-homes.lovable.app/about" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-primary pb-3 inline-block">About Us</h1>
        <p>UnitedDubai Blog is an independent editorial publication dedicated to Dubai's real-estate market, with a specific focus on remote workers, digital nomads and international investors evaluating the emirate as a base or as an asset location.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Our editorial focus</h2>
        <p>We report on market data, regulations and community-level dynamics. Our recurring topics include the Dubai Golden Visa, the UAE Virtual Working Programme, freehold ownership rules, short-term rental licensing, off-plan versus ready market comparisons, and neighborhood-level yield analysis.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Our sources</h2>
        <p>We ground our reporting in publicly available data from the Dubai Land Department (DLD), the Real Estate Regulatory Agency (RERA), the Department of Economy and Tourism (DET), the Federal Authority for Identity and Citizenship (ICP), and market research from Bayut, Property Finder, Property Monitor, CBRE and JLL.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Who we are</h2>
        <p>Our editorial team consists of writers with backgrounds in international real estate, financial journalism and cross-border relocation. All articles are reviewed against our Editorial Policy before publication.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Contact</h2>
        <p>Editorial and press inquiries: editorial@uniteddubai.blog</p>
      </main>
      <SiteFooter />
    </div>
  ),
});
