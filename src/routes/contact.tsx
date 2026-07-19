import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | UnitedDubai Blog" },
      { name: "description", content: "Reach the UnitedDubai Blog editorial team for tips, corrections, partnerships or press inquiries." },
      { property: "og:title", content: "Contact — UnitedDubai Blog" },
      { property: "og:description", content: "Contact our editorial team for tips, corrections, partnerships or press inquiries." },
      { property: "og:url", content: "https://dubai-nomad-homes.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://dubai-nomad-homes.lovable.app/contact" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-primary pb-3 inline-block">Contact</h1>
        <p className="text-muted-foreground mb-8">Send tips, corrections, or partnership inquiries. We reply within two business days.</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full border border-input px-4 py-3 rounded" placeholder="Your name" />
          <input type="email" className="w-full border border-input px-4 py-3 rounded" placeholder="Your email" />
          <textarea rows={6} className="w-full border border-input px-4 py-3 rounded" placeholder="Message" />
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold">Send Message</button>
        </form>
        <div className="mt-10 text-sm text-muted-foreground space-y-1">
          <div><strong className="text-foreground">Editorial:</strong> editorial@uniteddubai.blog</div>
          <div><strong className="text-foreground">Privacy:</strong> privacy@uniteddubai.blog</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
});
