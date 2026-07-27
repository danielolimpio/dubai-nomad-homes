import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalHero, Section, Callout, CardGrid, PremiumTable, Highlight, KeyList, Badge } from "@/components/legal/LegalKit";
import { Building2, Users, BarChart3, ShieldCheck, Globe2, Mail } from "lucide-react";

const toc = [
  { id: "mission", label: "Our mission" },
  { id: "focus", label: "Editorial focus" },
  { id: "audience", label: "Who we serve" },
  { id: "sources", label: "Data & sources" },
  { id: "process", label: "How we work" },
  { id: "team", label: "The team" },
  { id: "independence", label: "Independence" },
  { id: "contact", label: "Contact" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | UnitedDubai Blog" },
      { name: "description", content: "Independent editorial coverage of Dubai real estate for remote workers and international investors, backed by DLD and RERA data." },
      { property: "og:title", content: "About UnitedDubai Blog" },
      { property: "og:description", content: "Independent editorial coverage of Dubai real estate for remote workers and international investors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dubai-nomad-homes.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://dubai-nomad-homes.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <LegalPage toc={toc}>
      <LegalHero
        eyebrow="About"
        title="Independent intelligence on Dubai real estate for people who work from anywhere"
        intro="UnitedDubai Blog is an editorially independent publication covering Dubai's property market through one specific lens: the remote worker, the digital nomad and the international investor who wants a base — or an asset — in the emirate."
        updated="July 2026"
        badges={["Editorially independent", "Data-led", "100% English"]}
      />

      <Section id="mission" title="Our mission" icon={<Globe2 className="h-6 w-6 text-primary" />}>
        <p>
          Dubai publishes an unusual amount of open property data — transaction registers, rental index values, licensing rules — yet most of it
          reaches international readers as marketing. Our mission is to translate that public record into <Highlight>plain-English, source-cited analysis</Highlight> that a
          reader in São Paulo, Lisbon or Toronto can act on without a broker sitting across the table.
        </p>
        <p>
          We do not sell property, we do not broker deals, and we do not accept commission on transactions. Our only product is the reporting itself.
        </p>
        <CardGrid
          items={[
            { icon: <BarChart3 className="h-5 w-5 text-primary" />, title: "Numbers before narrative", body: "Every yield, price-per-square-foot or service-charge figure is tied to a named, dated public source rather than a sales brochure." },
            { icon: <ShieldCheck className="h-5 w-5 text-primary" />, title: "Regulation-first reporting", body: "We track DLD, RERA, DET and ICP rule changes and rewrite affected articles rather than leaving stale guidance online." },
            { icon: <Users className="h-5 w-5 text-primary" />, title: "Written for non-residents", body: "We assume the reader has never signed an Ejari, opened a UAE bank account or paid a 4% transfer fee before." },
            { icon: <Building2 className="h-5 w-5 text-primary" />, title: "Community-level detail", body: "Analysis is broken down by community — Marina, JVC, Downtown, Dubai Hills — because Dubai averages hide everything that matters." },
          ]}
        />
      </Section>

      <Section id="focus" title="Editorial focus" icon={<Building2 className="h-6 w-6 text-primary" />}>
        <p>Our coverage is organised into five permanent desks, each mapped to a category on this site:</p>
        <PremiumTable
          head={["Desk", "What it covers", "Typical reader question"]}
          rows={[
            ["Invest", "Yields, off-plan vs ready, payment plans, exit liquidity, service charges", "Where does my capital actually earn in 2026?"]  ,
            ["Rentals", "Long-let, monthly, holiday-home licensing, Ejari, rent index caps", "Should I rent first or buy immediately?"],
            ["Visas", "Golden Visa, Virtual Working Programme, investor residency, dependants", "Which residency route fits a remote salary?"],
            ["Areas", "Community-by-community pricing, amenities, connectivity, tenant profile", "Which neighbourhood matches my budget and lifestyle?"],
            ["Guides", "Process walkthroughs: transfer, mortgage, NOC, escrow, handover", "What are the exact steps and costs, in order?"],
          ]}
          caption="Every article is filed to exactly one desk and cross-linked to the relevant glossary terms."
        />
      </Section>

      <Section id="audience" title="Who we serve" icon={<Users className="h-6 w-6 text-primary" />}>
        <KeyList
          items={[
            "Remote employees and freelancers evaluating Dubai as a tax-efficient, well-connected base with a one-year renewable virtual work permit.",
            "First-time international buyers who need to understand freehold zones, title deeds, Oqood registration and the real all-in cost of a purchase.",
            "Buy-to-let investors comparing gross yield against service charges, void periods, DEWA setup and property-management fees.",
            "Relocating families weighing schooling, commute times and community amenities alongside price per square foot.",
            "Advisors and journalists who need a clean, cited English-language reference on UAE property regulation.",
          ]}
        />
      </Section>

      <Section id="sources" title="Data and sources" icon={<BarChart3 className="h-6 w-6 text-primary" />}>
        <p>
          We ground reporting in publicly available primary data first, and commercial market research second. Where the two disagree, we say so in the article.
        </p>
        <PremiumTable
          head={["Source", "Type", "Used for"]}
          rows={[
            ["Dubai Land Department (DLD)", <Badge tone="outline">Primary</Badge>, "Transaction volumes, transfer fees, title registration, freehold zoning"],
            ["RERA", <Badge tone="outline">Primary</Badge>, "Rental index, escrow rules, broker licensing, service-charge approvals"],
            ["Dept. of Economy & Tourism (DET)", <Badge tone="outline">Primary</Badge>, "Holiday-home permits and short-term rental compliance"],
            ["ICP / GDRFA", <Badge tone="outline">Primary</Badge>, "Golden Visa, investor visa and remote-work permit requirements"],
            ["Bayut, Property Finder, Property Monitor", <Badge>Market</Badge>, "Asking prices, rental listings, community-level indices"],
            ["CBRE, JLL, Knight Frank", <Badge>Market</Badge>, "Macro forecasts, supply pipeline, prime-segment commentary"],
          ]}
          caption="Figures are always dated in-line. A number without a date and a source does not get published."
        />
      </Section>

      <Section id="process" title="How an article is produced" icon={<ShieldCheck className="h-6 w-6 text-primary" />}>
        <ol className="space-y-3 list-decimal pl-5 marker:font-bold marker:text-primary">
          <li><strong>Brief.</strong> A reader question or a regulatory change opens a brief with a defined scope and target sources.</li>
          <li><strong>Research.</strong> The writer pulls primary data first, then market data, recording each figure with its retrieval date.</li>
          <li><strong>Draft.</strong> Copy is written in plain English, with jargon linked to the glossary rather than explained inline twice.</li>
          <li><strong>Fact-check.</strong> A second editor re-verifies every number and every regulatory statement against the cited source.</li>
          <li><strong>Compliance read.</strong> The piece is checked against our Editorial Policy and Disclaimer for advice-like language.</li>
          <li><strong>Publish and review.</strong> Articles touching regulation enter a review cycle and are updated when rules change.</li>
        </ol>
        <Callout variant="success" title="Correction commitment">
          <p>If we get something wrong, we correct it and note the correction at the foot of the article with the date. We do not silently edit figures.</p>
        </Callout>
      </Section>

      <Section id="team" title="The team" icon={<Users className="h-6 w-6 text-primary" />}>
        <p>
          Our editorial team combines backgrounds in international real estate, financial journalism and cross-border relocation advisory. Contributors
          who hold a commercial interest in any company mentioned are not assigned to cover it.
        </p>
        <CardGrid
          items={[
            { title: "Editorial Desk", body: "Commissions, edits and fact-checks all market and regulatory coverage published on UnitedDubai Blog." },
            { title: "Data Desk", body: "Maintains our internal series of community-level price, yield and service-charge figures used across articles." },
            { title: "Glossary Desk", body: "Owns the 147-term Dubai real-estate glossary and keeps definitions aligned with current UAE regulation." },
            { title: "Standards", body: "Reviews every piece against the Editorial Policy, Disclaimer and advertising-separation rules before publication." },
          ]}
        />
      </Section>

      <Section id="independence" title="Editorial independence" icon={<ShieldCheck className="h-6 w-6 text-primary" />}>
        <p>
          Advertising and editorial are structurally separated. Advertisers cannot commission, review or veto coverage, and no developer, brokerage or
          agency receives advance sight of an article. Any sponsored placement is <Highlight>clearly labelled as such</Highlight> and is never presented as editorial analysis.
        </p>
        <Callout variant="warning" title="Not financial, legal or tax advice">
          <p>
            Everything we publish is journalism, not advice. Consult a RERA-registered broker, a UAE-licensed lawyer and a qualified tax adviser in your
            own jurisdiction before committing capital. See our Disclaimer for the full terms.
          </p>
        </Callout>
      </Section>

      <Section id="contact" title="Contact" icon={<Mail className="h-6 w-6 text-primary" />}>
        <PremiumTable
          head={["Purpose", "Address", "Response time"]}
          rows={[
            ["Editorial, corrections, tips", "editorial@uniteddubai.blog", "2 business days"],
            ["Privacy and data requests", "privacy@uniteddubai.blog", "30 days (statutory)"],
            ["Advertising and partnerships", "partners@uniteddubai.blog", "5 business days"],
          ]}
        />
      </Section>
    </LegalPage>
  );
}
