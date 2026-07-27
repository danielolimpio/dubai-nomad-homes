import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalHero, Section, Callout, CardGrid, PremiumTable, Highlight, KeyList, Badge } from "@/components/legal/LegalKit";
import { Lock, Cookie, Database, Users, Globe2, ShieldCheck, Clock, Mail, Baby } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "collect", label: "Data we collect" },
  { id: "purposes", label: "How we use data" },
  { id: "legal-basis", label: "Legal bases" },
  { id: "cookies", label: "Cookies & analytics" },
  { id: "adsense", label: "Advertising & AdSense" },
  { id: "sharing", label: "Sharing & processors" },
  { id: "transfers", label: "International transfers" },
  { id: "retention", label: "Retention periods" },
  { id: "rights", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes & contact" },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | UnitedDubai Blog" },
      { name: "description", content: "How UnitedDubai Blog collects, uses, shares and retains personal data, including cookies, analytics and Google AdSense advertising." },
      { property: "og:title", content: "Privacy Policy — UnitedDubai Blog" },
      { property: "og:description", content: "Data collection, cookies, analytics, advertising partners, retention periods and your privacy rights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dubai-nomad-homes.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://dubai-nomad-homes.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage toc={toc}>
      <LegalHero
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="This policy explains what personal data UnitedDubai Blog collects when you read the site, subscribe to the newsletter or contact the editorial desk — why we collect it, how long we keep it, who we share it with, and the rights you can exercise at any time."
        updated="July 2026"
        badges={["GDPR-aligned", "CCPA/CPRA-aligned", "Cookie disclosure"]}
      />

      <Section id="overview" title="Overview" icon={<Lock className="h-6 w-6 text-primary" />}>
        <p>
          UnitedDubai Blog is an editorial publication. We do not sell personal data, we do not build advertising profiles ourselves, and we collect the
          minimum data needed to run the site, deliver the newsletter and answer messages.
        </p>
        <CardGrid
          items={[
            { title: "No data sales", body: "We never sell or rent personal data to third parties, and we do not share it for cross-context behavioural advertising on our own behalf." },
            { title: "Minimal collection", body: "Reading the site requires no account. Only newsletter and contact features involve you providing data directly." },
            { title: "Transparent partners", body: "Every third party that can receive data through this site is named in the processors table below." },
            { title: "Rights honoured globally", body: "We extend GDPR-style access, correction and deletion rights to all readers regardless of location." },
          ]}
        />
      </Section>

      <Section id="collect" title="Data we collect" icon={<Database className="h-6 w-6 text-primary" />}>
        <PremiumTable
          head={["Category", "Examples", "Source", "Required?"]}
          rows={[
            ["Newsletter data", "Email address, subscription date, confirmation status", "You", <Badge>Required to subscribe</Badge>],
            ["Contact data", "Name, email address, message content", "You", <Badge>Required to reply</Badge>],
            ["Technical data", "IP address, user agent, referrer, timestamps", "Automatic (server logs)", <Badge tone="outline">Automatic</Badge>],
            ["Usage data", "Pages viewed, session duration, aggregated device type", "Analytics", <Badge tone="outline">Optional</Badge>],
            ["Advertising data", "Cookie/device identifiers used by ad partners", "Ad partners", <Badge tone="outline">Consent-based</Badge>],
          ]}
          caption="We do not collect financial account details, passport data, government IDs or property ownership records."
        />
      </Section>

      <Section id="purposes" title="How we use your data" icon={<ShieldCheck className="h-6 w-6 text-primary" />}>
        <KeyList
          items={[
            "Delivering the newsletter you subscribed to, and processing unsubscribe requests.",
            "Responding to editorial, correction, press and privacy enquiries.",
            "Measuring aggregate readership so we can decide which topics to cover next.",
            "Maintaining site security, detecting abuse and diagnosing technical faults.",
            "Serving advertising that funds free access to the content, where permitted by your consent choices.",
            "Complying with legal obligations and responding to lawful requests.",
          ]}
        />
        <Callout variant="info" title="What we never do">
          <p>We do not use your email address to build advertising audiences, we do not enrich it with third-party data, and we do not pass it to developers, brokers or agencies.</p>
        </Callout>
      </Section>

      <Section id="legal-basis" title="Legal bases for processing" icon={<ShieldCheck className="h-6 w-6 text-primary" />}>
        <PremiumTable
          head={["Processing", "Legal basis (GDPR Art. 6)"]}
          rows={[
            ["Newsletter delivery", "Consent — Art. 6(1)(a)"],
            ["Non-essential cookies and advertising", "Consent — Art. 6(1)(a)"],
            ["Replying to your enquiry", "Legitimate interests / pre-contractual steps — Art. 6(1)(b)/(f)"],
            ["Security logging and fraud prevention", "Legitimate interests — Art. 6(1)(f)"],
            ["Statutory record keeping", "Legal obligation — Art. 6(1)(c)"],
          ]}
        />
      </Section>

      <Section id="cookies" title="Cookies and analytics" icon={<Cookie className="h-6 w-6 text-primary" />}>
        <p>
          Cookies are small files stored by your browser. We group them into four categories and only set the non-essential ones where you have consented
          (and, in the EEA/UK, only after you accept them in the consent banner).
        </p>
        <PremiumTable
          head={["Type", "Purpose", "Typical lifetime", "Consent"]}
          rows={[
            ["Strictly necessary", "Page delivery, security, load balancing, consent state", "Session – 12 months", <Badge tone="outline">Not required</Badge>],
            ["Preferences", "Remembering language and display choices", "Up to 12 months", <Badge>Optional</Badge>],
            ["Analytics", "Aggregate page views and traffic sources", "Up to 14 months", <Badge>Optional</Badge>],
            ["Advertising", "Ad selection, frequency capping, measurement", "Up to 24 months", <Badge>Optional</Badge>],
          ]}
          caption="You can clear or block cookies at any time in your browser settings; strictly necessary cookies cannot be disabled without breaking the site."
        />
      </Section>

      <Section id="adsense" title="Advertising and Google AdSense" icon={<Globe2 className="h-6 w-6 text-primary" />}>
        <p>
          This site is funded by display advertising. Third-party vendors, <Highlight>including Google</Highlight>, use cookies to serve ads based on prior
          visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to
          this site and/or other sites on the internet.
        </p>
        <KeyList
          items={[
            "You may opt out of personalised advertising by visiting Google Ads Settings (adssettings.google.com).",
            "You may opt out of third-party vendor cookies at www.aboutads.info/choices or youronlinechoices.eu.",
            "Where required, we operate an IAB TCF-compatible consent banner and pass your choices to ad partners.",
            "Non-personalised ads are served where consent for personalisation is withheld.",
          ]}
        />
      </Section>

      <Section id="sharing" title="Sharing and processors" icon={<Users className="h-6 w-6 text-primary" />}>
        <PremiumTable
          head={["Recipient", "Role", "Data received"]}
          rows={[
            ["Hosting / CDN provider", "Processor", "IP address, request logs"],
            ["Email delivery provider", "Processor", "Email address, delivery events"],
            ["Privacy-friendly analytics", "Processor", "Aggregated page and session events"],
            ["Google AdSense", <Badge tone="gold">Independent controller</Badge>, "Cookie/device identifiers, ad interactions"],
            ["Professional advisers / authorities", "As required", "Only where legally compelled"],
          ]}
          caption="We do not share newsletter or contact data with advertisers, developers, brokers or agencies under any circumstances."
        />
      </Section>

      <Section id="transfers" title="International transfers" icon={<Globe2 className="h-6 w-6 text-primary" />}>
        <p>
          Our providers may process data outside your country, including in the United States and the European Union. Where personal data is transferred
          out of the EEA or the UK, transfers rely on adequacy decisions or Standard Contractual Clauses with supplementary safeguards.
        </p>
      </Section>

      <Section id="retention" title="Retention periods" icon={<Clock className="h-6 w-6 text-primary" />}>
        <PremiumTable
          head={["Data", "Retention", "Then"]}
          rows={[
            ["Newsletter subscription", "Until you unsubscribe", "Deleted within 30 days; suppression hash kept to honour opt-out"],
            ["Contact messages", "24 months from last reply", "Deleted"],
            ["Server security logs", "90 days", "Deleted or irreversibly anonymised"],
            ["Analytics events", "Up to 14 months", "Aggregated and de-identified"],
            ["Privacy request records", "As required by law", "Deleted"],
          ]}
        />
      </Section>

      <Section id="rights" title="Your rights" icon={<ShieldCheck className="h-6 w-6 text-primary" />}>
        <CardGrid
          items={[
            { title: "Access", body: "Request a copy of the personal data we hold about you and the purposes for which it is processed." },
            { title: "Rectification", body: "Ask us to correct inaccurate or incomplete personal data without undue delay." },
            { title: "Erasure", body: "Request deletion of your data where there is no overriding legal ground for us to keep it." },
            { title: "Restriction & objection", body: "Object to processing based on legitimate interests, including profiling for advertising." },
            { title: "Portability", body: "Receive the data you provided in a structured, commonly used, machine-readable format." },
            { title: "Withdraw consent", body: "Withdraw consent at any time; this does not affect processing carried out before withdrawal." },
          ]}
        />
        <Callout variant="success" title="How to exercise a right">
          <p>
            Email <Highlight>privacy@uniteddubai.blog</Highlight> from the address concerned, stating the right you wish to exercise. We respond within
            30 days. You also have the right to lodge a complaint with your local supervisory authority.
          </p>
        </Callout>
      </Section>

      <Section id="security" title="Security" icon={<Lock className="h-6 w-6 text-primary" />}>
        <KeyList
          items={[
            "All traffic is served over HTTPS with modern TLS.",
            "Access to subscriber and contact data is restricted to editorial staff who need it.",
            "We minimise storage: data that is no longer needed is deleted on the schedule above.",
            "No system is perfectly secure; we cannot guarantee absolute security of data transmitted over the internet.",
          ]}
        />
      </Section>

      <Section id="children" title="Children" icon={<Baby className="h-6 w-6 text-primary" />}>
        <p>
          This site is intended for adults evaluating property and residency decisions. We do not knowingly collect personal data from anyone under 16. If
          you believe a child has provided data, contact us and we will delete it.
        </p>
      </Section>

      <Section id="changes" title="Changes to this policy and contact" icon={<Mail className="h-6 w-6 text-primary" />}>
        <p>
          We update this policy when our processing, providers or legal obligations change. The revision date is shown at the top of the page; material
          changes are announced in the newsletter.
        </p>
        <PremiumTable
          head={["Purpose", "Contact"]}
          rows={[
            ["Privacy and data-subject requests", <Badge tone="outline">privacy@uniteddubai.blog</Badge>],
            ["General editorial enquiries", <Badge tone="outline">editorial@uniteddubai.blog</Badge>],
          ]}
        />
      </Section>
    </LegalPage>
  );
}
