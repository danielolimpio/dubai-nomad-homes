import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | UnitedDubai Blog" },
      { name: "description", content: "How UnitedDubai Blog collects and processes personal data, cookies and analytics information." },
      { property: "og:title", content: "Privacy Policy — UnitedDubai Blog" },
      { property: "og:description", content: "How UnitedDubai Blog handles personal data, cookies and analytics." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-primary pb-3 inline-block">Privacy Policy</h1>
        <p>This policy explains what information UnitedDubai Blog collects, how it is used, and the rights available to visitors.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Information we collect</h2>
        <p>Newsletter subscription: email address. Contact form: name and email address, plus the content of the message. Server logs may record IP address, browser type and pages visited.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Cookies and analytics</h2>
        <p>We use privacy-friendly analytics to measure aggregate visitor behavior. Third-party advertising partners, including Google AdSense, may set cookies to serve relevant advertisements. Visitors may opt out via their browser settings or at adssettings.google.com.</p>
        <h2 className="text-2xl font-bold mt-8 mb-3">Your rights</h2>
        <p>You may request access, correction or deletion of personal data by contacting privacy@uniteddubai.blog.</p>
      </main>
      <SiteFooter />
    </div>
  ),
});
