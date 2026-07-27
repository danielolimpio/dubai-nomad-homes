import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalHero, Section, Callout, CardGrid, PremiumTable, Highlight, KeyList, Badge } from "@/components/legal/LegalKit";
import { FileText, UserCheck, Copyright, Ban, Megaphone, Scale, AlertTriangle, RefreshCw, Gavel, Mail } from "lucide-react";

const toc = [
  { id: "acceptance", label: "Acceptance of terms" },
  { id: "eligibility", label: "Eligibility & accounts" },
  { id: "licence", label: "Licence to use content" },
  { id: "ip", label: "Intellectual property" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "ugc", label: "Reader submissions" },
  { id: "third-party", label: "Third parties & ads" },
  { id: "no-advice", label: "No advice, no warranty" },
  { id: "liability", label: "Liability & indemnity" },
  { id: "termination", label: "Suspension & termination" },
  { id: "changes", label: "Changes to the terms" },
  { id: "law", label: "Governing law" },
  { id: "contact", label: "Contact" },
];

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | UnitedDubai Blog" },
      { name: "description", content: "The terms governing your use of UnitedDubai Blog: permitted use, intellectual property, reader submissions, liability limits and governing law." },
      { property: "og:title", content: "Terms of Use — UnitedDubai Blog" },
      { property: "og:description", content: "Permitted use, copyright, acceptable-use rules, liability limits and governing law for UnitedDubai Blog." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dubai-nomad-homes.lovable.app/terms-of-use" },
    ],
    links: [{ rel: "canonical", href: "https://dubai-nomad-homes.lovable.app/terms-of-use" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage toc={toc}>
      <LegalHero
        eyebrow="Legal"
        title="Terms of Use"
        intro="These terms form a binding agreement between you and UnitedDubai Blog governing your access to this website, its articles, its glossary and its newsletter. Please read them carefully — using the site means you accept them."
        updated="July 2026"
        badges={["Binding agreement", "Applies to all visitors"]}
      />

      <Callout variant="info" title="Plain-English summary">
        <p>
          Read anything you like, quote us with credit and a link, don't scrape or republish the site wholesale, don't misuse the platform, and remember
          that our content is journalism rather than advice. The detailed terms below prevail over this summary.
        </p>
      </Callout>

      <Section id="acceptance" title="1. Acceptance of these terms" icon={<FileText className="h-6 w-6 text-primary" />}>
        <p>
          By accessing, browsing or otherwise using UnitedDubai Blog you confirm that you have read, understood and agree to be bound by these Terms of
          Use, together with our <Highlight>Privacy Policy</Highlight>, <Highlight>Disclaimer</Highlight> and <Highlight>Editorial Policy</Highlight>, which are incorporated by reference. If you do not agree, you must stop using the site.
        </p>
      </Section>

      <Section id="eligibility" title="2. Eligibility, newsletter and accounts" icon={<UserCheck className="h-6 w-6 text-primary" />}>
        <KeyList
          items={[
            "You must be at least 16 years old to subscribe to the newsletter or contact the editorial desk.",
            "You must provide accurate contact details and keep them up to date.",
            "You are responsible for all activity carried out through your email address on this site.",
            "You may unsubscribe at any time using the link in every newsletter; this does not affect these terms while you continue to use the site.",
          ]}
        />
      </Section>

      <Section id="licence" title="3. Licence to use our content" icon={<Copyright className="h-6 w-6 text-primary" />}>
        <p>We grant you a limited, personal, non-exclusive, non-transferable, revocable licence to access and read the site for non-commercial purposes.</p>
        <PremiumTable
          head={["Use case", "Status", "Conditions"]}
          rows={[
            ["Reading, printing or saving articles for personal use", <Badge>Permitted</Badge>, "No conditions"],
            ["Quoting up to 90 words in an article, report or post", <Badge>Permitted</Badge>, "Attribute UnitedDubai Blog and include a live, follow link to the source page"],
            ["Sharing links on social media or in a newsletter", <Badge>Permitted</Badge>, "Link to the original URL"],
            ["Republishing full articles or the glossary", <Badge tone="gold">Written permission</Badge>, "Contact partners@uniteddubai.blog"],
            ["Automated scraping, crawling for datasets or AI training", <Badge tone="outline">Prohibited</Badge>, "Unless separately licensed in writing"],
            ["Framing, mirroring or white-labelling the site", <Badge tone="outline">Prohibited</Badge>, "No exceptions"],
          ]}
          caption="Search-engine crawling in accordance with our robots.txt is expressly permitted."
        />
      </Section>

      <Section id="ip" title="4. Intellectual property" icon={<Copyright className="h-6 w-6 text-primary" />}>
        <p>
          All text, structure, glossary definitions, tables, charts, illustrations, imagery, layout, design system and source code on this site are owned by
          or licensed to UnitedDubai Blog and protected by copyright and related rights. Trademarks, developer names and community names referenced in the
          editorial are the property of their respective owners and are used descriptively for reporting purposes only.
        </p>
        <Callout variant="warning" title="Copyright complaints">
          <p>
            If you believe content on this site infringes your rights, email <Highlight>legal@uniteddubai.blog</Highlight> with the URL, a description of the
            work, your contact details and a statement of good-faith belief. We investigate and act on valid notices promptly.
          </p>
        </Callout>
      </Section>

      <Section id="acceptable-use" title="5. Acceptable use" icon={<Ban className="h-6 w-6 text-primary" />}>
        <p>You agree not to:</p>
        <CardGrid
          items={[
            { icon: <Ban className="h-5 w-5 text-primary" />, title: "Interfere with the service", body: "No denial-of-service attempts, load testing, vulnerability probing or circumvention of rate limits and security controls." },
            { icon: <Ban className="h-5 w-5 text-primary" />, title: "Harvest data", body: "No bulk downloading, scraping, indexing for resale, or extracting the glossary or tables into a competing database." },
            { icon: <Ban className="h-5 w-5 text-primary" />, title: "Misrepresent us", body: "No implying endorsement, partnership or advisory relationship with UnitedDubai Blog that does not exist." },
            { icon: <Ban className="h-5 w-5 text-primary" />, title: "Abuse the contact channels", body: "No spam, malware, unlawful content, harassment or misleading commercial solicitation to our editorial addresses." },
          ]}
        />
      </Section>

      <Section id="ugc" title="6. Reader submissions and feedback" icon={<Megaphone className="h-6 w-6 text-primary" />}>
        <p>
          If you send us a correction, tip, question or other material, you grant UnitedDubai Blog a worldwide, royalty-free, perpetual licence to use,
          reproduce and adapt that material for editorial purposes, including publication in an article or correction note. You confirm that you own the
          material or have the right to share it, and that it is accurate to the best of your knowledge. We may publish your first name and city unless you
          ask us not to; we never publish your email address.
        </p>
      </Section>

      <Section id="third-party" title="7. Third-party content and advertising" icon={<Megaphone className="h-6 w-6 text-primary" />}>
        <p>
          The site contains links to third-party websites and displays programmatic advertising, including Google AdSense. We do not control and are not
          responsible for third-party content, products, services, pricing or privacy practices. Any dealing you have with an advertiser or linked site is
          solely between you and that third party. The appearance of an advertisement is not an endorsement.
        </p>
      </Section>

      <Section id="no-advice" title="8. No advice and no warranty" icon={<AlertTriangle className="h-6 w-6 text-primary" />}>
        <p>
          The site is provided <Highlight>"as is" and "as available"</Highlight>, without warranties of any kind, express or implied, including merchantability,
          fitness for a particular purpose, accuracy or non-infringement. Content is journalism and general information; it is not financial, investment,
          legal, immigration or tax advice, and no advisory or fiduciary relationship is created. See the Disclaimer for the full risk warnings.
        </p>
        <PremiumTable
          head={["We do not warrant", "Practical meaning"]}
          rows={[
            ["Uninterrupted availability", "The site may be unavailable for maintenance, hosting faults or force majeure."],
            ["Continued accuracy of figures", "Prices, fees, yields and visa thresholds change after publication."],
            ["Suitability for your circumstances", "Content is general and not tailored to your finances or residency status."],
            ["Third-party accuracy", "Linked sources and advertisers are outside our editorial control."],
          ]}
        />
      </Section>

      <Section id="liability" title="9. Limitation of liability and indemnity" icon={<Scale className="h-6 w-6 text-primary" />}>
        <p>
          To the maximum extent permitted by law, UnitedDubai Blog, its owners, editors, authors and contributors shall not be liable for any indirect,
          incidental, special, consequential or punitive damages, nor for any loss of profit, revenue, data, opportunity or goodwill, arising from your use
          of or inability to use the site. Where liability cannot be excluded, it is limited to AED 500 or the amount you paid us in the preceding twelve
          months, whichever is greater.
        </p>
        <p>
          You agree to indemnify and hold us harmless against claims, damages and reasonable legal costs arising from your breach of these terms or your
          misuse of the site.
        </p>
      </Section>

      <Section id="termination" title="10. Suspension and termination" icon={<Ban className="h-6 w-6 text-primary" />}>
        <p>
          We may suspend or terminate your access, block an IP address or remove a subscription at any time, without notice, where we reasonably believe
          these terms have been breached. Sections concerning intellectual property, warranties, liability, indemnity and governing law survive termination.
        </p>
      </Section>

      <Section id="changes" title="11. Changes to these terms" icon={<RefreshCw className="h-6 w-6 text-primary" />}>
        <p>
          We may amend these terms to reflect changes in the site, our providers or the law. The revision date at the top of this page always shows the
          current version. Continued use after a change constitutes acceptance. Material changes are announced in the newsletter.
        </p>
      </Section>

      <Section id="law" title="12. Governing law and disputes" icon={<Gavel className="h-6 w-6 text-primary" />}>
        <p>
          These terms are governed by the laws of the Emirate of Dubai and the applicable federal laws of the United Arab Emirates. The courts of Dubai
          shall have exclusive jurisdiction, save that consumers resident elsewhere retain any mandatory rights and forums available under their local law.
          If any provision is held unenforceable, the remaining provisions continue in full effect.
        </p>
      </Section>

      <Section id="contact" title="13. Contact" icon={<Mail className="h-6 w-6 text-primary" />}>
        <PremiumTable
          head={["Purpose", "Contact", "Response time"]}
          rows={[
            ["Legal notices and copyright", <Badge tone="outline">legal@uniteddubai.blog</Badge>, "5 business days"],
            ["Licensing and syndication", <Badge tone="outline">partners@uniteddubai.blog</Badge>, "5 business days"],
            ["Editorial corrections", <Badge tone="outline">editorial@uniteddubai.blog</Badge>, "2 business days"],
          ]}
        />
      </Section>
    </LegalPage>
  );
}
