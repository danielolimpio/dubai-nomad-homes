import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalHero, Section, Callout, CardGrid, PremiumTable, Highlight, KeyList, Badge } from "@/components/legal/LegalKit";
import { AlertTriangle, Scale, TrendingDown, Globe2, LinkIcon, ShieldCheck, Building2 } from "lucide-react";

const toc = [
  { id: "scope", label: "Scope of this disclaimer" },
  { id: "no-advice", label: "No professional advice" },
  { id: "accuracy", label: "Accuracy & timeliness" },
  { id: "market", label: "Market risk warning" },
  { id: "regulatory", label: "Regulatory & visa changes" },
  { id: "tax", label: "Tax and residency" },
  { id: "third-party", label: "Third-party links" },
  { id: "liability", label: "Limitation of liability" },
  { id: "contact", label: "Questions" },
];

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | UnitedDubai Blog" },
      { name: "description", content: "UnitedDubai Blog publishes informational content only. Nothing on this site constitutes financial, legal, immigration or tax advice." },
      { property: "og:title", content: "Disclaimer — UnitedDubai Blog" },
      { property: "og:description", content: "Informational content only. Not financial, legal or tax advice. Read the full terms and risk warnings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dubai-nomad-homes.lovable.app/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "https://dubai-nomad-homes.lovable.app/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalPage toc={toc}>
      <LegalHero
        eyebrow="Legal"
        title="Disclaimer"
        intro="UnitedDubai Blog publishes journalism about the Dubai property market. It does not provide advice, does not sell property and does not act as a broker. This page sets out exactly what our content is — and what it is not."
        updated="July 2026"
        badges={["Informational only", "No advisory relationship"]}
      />

      <Callout variant="warning" title="Read this first">
        <p>
          Property investment carries risk, including the risk of losing part or all of the capital invested. Nothing on this website should be relied on
          as the basis for a purchase, sale, rental, relocation or immigration decision without independent professional advice.
        </p>
      </Callout>

      <Section id="scope" title="Scope of this disclaimer" icon={<Scale className="h-6 w-6 text-primary" />}>
        <p>
          This disclaimer applies to all content published on this website and any associated channels: articles, category pages, the glossary,
          newsletters, tables, charts, calculators and reader responses. By using the site you accept the terms below and those in our Terms of Use.
        </p>
      </Section>

      <Section id="no-advice" title="No professional advice" icon={<ShieldCheck className="h-6 w-6 text-primary" />}>
        <p>
          Our content is general information published for an international readership. It does not take into account your financial position, objectives,
          residency status or risk tolerance, and therefore <Highlight>cannot be suitable advice for your circumstances</Highlight>.
        </p>
        <PremiumTable
          head={["Decision", "What we provide", "Who you should consult"]}
          rows={[
            ["Buying or selling property", "Market data and process explanations", "RERA-registered broker and UAE-licensed conveyancer"],
            ["Mortgage or financing", "Rate context and eligibility overviews", "UAE-licensed mortgage adviser or bank"],
            ["Golden Visa / remote work permit", "Published requirement summaries", "Licensed immigration consultant or GDRFA-approved typing centre"],
            ["Tax exposure in your home country", "General non-resident context", "Qualified tax adviser in your jurisdiction"],
            ["Contract terms and disputes", "Terminology and standard-practice notes", "UAE-licensed lawyer"],
          ]}
          caption="No content on this site creates a client, advisory, agency or fiduciary relationship."
        />
      </Section>

      <Section id="accuracy" title="Accuracy and timeliness" icon={<AlertTriangle className="h-6 w-6 text-primary" />}>
        <KeyList
          items={[
            "Data reflects the source and the period referenced in the article at the time of publication.",
            "Prices, yields, service charges, fees and index values change continuously; historical figures are not indicative of current values.",
            "We make no warranty, express or implied, as to continued accuracy, completeness or fitness for a particular purpose after publication.",
            "Where an article has been updated, the revision date is shown; earlier figures may remain accurate only for their stated period.",
          ]}
        />
      </Section>

      <Section id="market" title="Market risk warning" icon={<TrendingDown className="h-6 w-6 text-primary" />}>
        <CardGrid
          items={[
            { title: "Capital risk", body: "Property values can fall as well as rise. Dubai has experienced multi-year drawdowns as well as rapid growth cycles." },
            { title: "Liquidity risk", body: "Real estate is illiquid. Exiting a position can take months, and forced sales typically transact below asking." },
            { title: "Income risk", body: "Rental income is not guaranteed. Void periods, tenant default, service-charge increases and management fees all reduce net yield." },
            { title: "Development risk", body: "Off-plan projects can be delayed, redesigned or cancelled, even where escrow protections apply." },
            { title: "Currency risk", body: "The AED is pegged to the USD; buyers earning in other currencies carry exchange exposure on both purchase and income." },
            { title: "Concentration risk", body: "A single unit in a single community is an undiversified position, however strong the headline yield appears." },
          ]}
        />
        <p>
          Past performance, historical appreciation and advertised or projected yields are <Highlight>not reliable indicators of future results</Highlight>.
        </p>
      </Section>

      <Section id="regulatory" title="Regulatory, licensing and visa changes" icon={<Building2 className="h-6 w-6 text-primary" />}>
        <p>
          UAE property, tenancy, holiday-home licensing and immigration rules are amended regularly, sometimes with immediate effect and without a
          transition period. Eligibility thresholds, fees and documentary requirements described on this site may have changed since publication. Always
          verify current requirements directly with the Dubai Land Department, RERA, DET, the ICP or GDRFA before acting.
        </p>
      </Section>

      <Section id="tax" title="Tax and residency" icon={<Globe2 className="h-6 w-6 text-primary" />}>
        <p>
          References to the UAE's tax environment describe the UAE only. Your worldwide tax position depends on your citizenship, tax residency, days
          present, double-taxation treaties and controlled-foreign-company or remittance rules in your home country. Obtaining a UAE residence visa does
          not automatically end tax residency elsewhere.
        </p>
        <Callout variant="info" title="Common misconception">
          <p>"Zero income tax in the UAE" is a statement about UAE law. It says nothing about whether your home jurisdiction will tax the same income.</p>
        </Callout>
      </Section>

      <Section id="third-party" title="Third-party links and advertising" icon={<LinkIcon className="h-6 w-6 text-primary" />}>
        <p>
          External links are provided for convenience. We do not control, endorse or accept responsibility for third-party websites, their content, their
          data practices or any transaction you enter into with them. Advertisements, including those served by Google AdSense, are selected
          programmatically and do not constitute a recommendation.
        </p>
      </Section>

      <Section id="liability" title="Limitation of liability" icon={<Scale className="h-6 w-6 text-primary" />}>
        <p>
          To the maximum extent permitted by applicable law, UnitedDubai Blog, its editors, authors and contributors accept no liability for any direct,
          indirect, incidental, consequential or financial loss arising from use of, or reliance on, information published on this site — including loss of
          profit, loss of opportunity, or costs incurred in a property or immigration transaction.
        </p>
      </Section>

      <Section id="contact" title="Questions about this disclaimer" icon={<ShieldCheck className="h-6 w-6 text-primary" />}>
        <PremiumTable
          head={["Topic", "Contact"]}
          rows={[
            ["Factual corrections", <Badge tone="outline">editorial@uniteddubai.blog</Badge>],
            ["Legal notices", <Badge tone="outline">legal@uniteddubai.blog</Badge>],
          ]}
        />
      </Section>
    </LegalPage>
  );
}
