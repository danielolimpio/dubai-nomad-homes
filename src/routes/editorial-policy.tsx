import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalHero, Section, Callout, CardGrid, PremiumTable, Highlight, KeyList, Badge } from "@/components/legal/LegalKit";
import { BookOpen, ShieldCheck, Scale, RefreshCw, Bot, Megaphone, AlertTriangle } from "lucide-react";

const toc = [
  { id: "principles", label: "Core principles" },
  { id: "sourcing", label: "Sourcing standards" },
  { id: "factcheck", label: "Fact-checking" },
  { id: "corrections", label: "Corrections policy" },
  { id: "updates", label: "Review & updates" },
  { id: "ai", label: "Use of AI" },
  { id: "advertising", label: "Advertising separation" },
  { id: "conflicts", label: "Conflicts of interest" },
  { id: "advice", label: "No financial advice" },
];

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: "Editorial Policy | UnitedDubai Blog" },
      { name: "description", content: "Our editorial standards: sourcing, fact-checking, corrections, AI usage, disclosure and separation between editorial and commercial content." },
      { property: "og:title", content: "Editorial Policy — UnitedDubai Blog" },
      { property: "og:description", content: "How UnitedDubai Blog researches, fact-checks, corrects and publishes Dubai real-estate content." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dubai-nomad-homes.lovable.app/editorial-policy" },
    ],
    links: [{ rel: "canonical", href: "https://dubai-nomad-homes.lovable.app/editorial-policy" }],
  }),
  component: EditorialPolicyPage,
});

function EditorialPolicyPage() {
  return (
    <LegalPage toc={toc}>
      <LegalHero
        eyebrow="Standards"
        title="Editorial Policy"
        intro="This policy describes how UnitedDubai Blog researches, verifies, publishes, corrects and updates every article on this site. It applies to all contributors, all desks and all formats, including the glossary."
        updated="July 2026"
        badges={["Applies to all content", "Publicly enforceable"]}
      />

      <Section id="principles" title="Core principles" icon={<BookOpen className="h-6 w-6 text-primary" />}>
        <CardGrid
          items={[
            { title: "Accuracy over speed", body: "We would rather publish a day late with a verified figure than first with an estimate. Unverified numbers are cut, not hedged." },
            { title: "Transparency of source", body: "Readers should always be able to trace a claim to its origin: the authority, the report, and the date it was retrieved." },
            { title: "Independence", body: "No advertiser, developer or agency has influence over what we cover or how we cover it." },
            { title: "Usefulness", body: "Each article must leave the reader able to take a concrete next step, not merely feel informed." },
          ]}
        />
      </Section>

      <Section id="sourcing" title="Sourcing standards" icon={<Scale className="h-6 w-6 text-primary" />}>
        <p>
          Every quantitative claim must be attributable to a named public data provider or a named research report. We operate a
          <Highlight> three-tier source hierarchy</Highlight> and always prefer the highest tier available.
        </p>
        <PremiumTable
          head={["Tier", "Examples", "Usage rule"]}
          rows={[
            [<Badge tone="gold">Tier 1 — Official</Badge>, "DLD, RERA, DET, ICP, GDRFA, UAE Central Bank, federal decrees", "Always preferred. Sufficient on its own."],
            [<Badge>Tier 2 — Market research</Badge>, "CBRE, JLL, Knight Frank, Property Monitor, Bayut, Property Finder", "Usable when Tier 1 is silent; must be attributed by name and date."],
            [<Badge tone="outline">Tier 3 — Secondary</Badge>, "Press reports, developer statements, brokerage commentary", "Never the sole basis for a factual claim; used only for context or quotes."],
          ]}
          caption="Anonymous forum posts, social media claims and unattributed 'market talk' are not acceptable sources at any tier."
        />
        <KeyList
          items={[
            "Figures are published with the period they describe (e.g. 'Q1 2026 DLD transaction data'), never as timeless facts.",
            "Regulatory statements are checked against the current published text of the applicable law, decree or circular.",
            "Where sources conflict, we present both figures and explain the methodological difference instead of averaging them.",
            "Currency figures are stated in AED first, with USD conversions marked as approximate and dated.",
          ]}
        />
      </Section>

      <Section id="factcheck" title="Fact-checking" icon={<ShieldCheck className="h-6 w-6 text-primary" />}>
        <p>Every article passes a two-pass verification before publication:</p>
        <ol className="space-y-3 list-decimal pl-5 marker:font-bold marker:text-primary">
          <li><strong>Writer pass.</strong> The author records each figure alongside its source URL or document reference and retrieval date in the working brief.</li>
          <li><strong>Editor pass.</strong> A second person independently re-opens each source and confirms the number, the unit, the period and the regulatory wording.</li>
        </ol>
        <Callout variant="info" title="What gets removed at fact-check">
          <p>Rounded figures presented as exact, yields quoted gross without disclosing service charges, superlatives such as "guaranteed returns", and any claim implying a future price outcome.</p>
        </Callout>
      </Section>

      <Section id="corrections" title="Corrections policy" icon={<RefreshCw className="h-6 w-6 text-primary" />}>
        <p>
          We correct promptly and visibly. Corrections are appended to the foot of the affected article with the date and a short description of what
          changed. We do not delete an inaccurate figure without a note.
        </p>
        <PremiumTable
          head={["Severity", "Example", "Action", "Target"]}
          rows={[
            [<Badge>Minor</Badge>, "Typo, broken link, formatting error", "Silent fix", "Same day"],
            [<Badge tone="gold">Material</Badge>, "Incorrect fee, yield or date", "Correction note appended", "48 hours"],
            [<Badge tone="outline">Critical</Badge>, "Incorrect regulatory requirement", "Article unpublished, corrected, republished with notice", "24 hours"],
          ]}
        />
        <p>
          Report an error to <Highlight>editorial@uniteddubai.blog</Highlight> with the article URL and the disputed passage. We acknowledge all corrections requests.
        </p>
      </Section>

      <Section id="updates" title="Review and update cycle" icon={<RefreshCw className="h-6 w-6 text-primary" />}>
        <PremiumTable
          head={["Content type", "Review cadence", "Trigger for immediate revision"]}
          rows={[
            ["Visa and residency guides", "Quarterly", "Any ICP/GDRFA rule or fee change"],
            ["Investment and yield analysis", "Twice yearly", "New DLD quarterly data release"],
            ["Rental and licensing guides", "Quarterly", "RERA index or DET permit rule change"],
            ["Area and community profiles", "Annually", "Major infrastructure or supply announcement"],
            ["Glossary terms", "Continuous", "Any change to the underlying regulation or practice"],
          ]}
        />
      </Section>

      <Section id="ai" title="Use of AI tools" icon={<Bot className="h-6 w-6 text-primary" />}>
        <p>
          We use software tooling for research assistance, structuring and copy-editing. <Highlight>No article is published without human research, human
          verification and human editorial sign-off.</Highlight> AI output is never treated as a source: any figure surfaced by a tool must be independently
          confirmed against a Tier 1 or Tier 2 source before it reaches a draft.
        </p>
      </Section>

      <Section id="advertising" title="Advertising and sponsored content" icon={<Megaphone className="h-6 w-6 text-primary" />}>
        <KeyList
          items={[
            "Display advertising, including Google AdSense, is served programmatically and does not influence editorial selection.",
            "Sponsored or partner content is labelled at the top of the page and excluded from editorial rankings and recommendations.",
            "Advertisers receive no pre-publication review of editorial articles.",
            "We do not publish paid backlinks inside editorial copy, and we do not sell placements in comparison tables.",
          ]}
        />
      </Section>

      <Section id="conflicts" title="Conflicts of interest" icon={<AlertTriangle className="h-6 w-6 text-primary" />}>
        <p>
          Contributors must declare any ownership, employment, brokerage or advisory relationship with a company, development or community they are asked
          to cover. Where a conflict exists, the assignment is reallocated. Where a conflict is unavoidable and the coverage is in the reader's interest,
          it is disclosed in the article.
        </p>
      </Section>

      <Section id="advice" title="No financial, legal or tax advice" icon={<Scale className="h-6 w-6 text-primary" />}>
        <Callout variant="warning" title="Informational content only">
          <p>
            Nothing published on UnitedDubai Blog constitutes financial, investment, legal, immigration or tax advice, nor an offer or solicitation to buy
            or sell property. Readers must obtain independent professional advice in the relevant jurisdiction before acting. Full terms are set out in our Disclaimer.
          </p>
        </Callout>
      </Section>
    </LegalPage>
  );
}
