import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";
import { CheckCircle2, AlertTriangle, Info, ShieldCheck, ListOrdered } from "lucide-react";

export type TocItem = { id: string; label: string };

export function LegalHero({
  eyebrow,
  title,
  intro,
  updated,
  badges = [],
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  badges?: string[];
}) {
  return (
    <header className="relative overflow-hidden rounded-lg border bg-secondary/60 p-7 md:p-10 mb-10">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" aria-hidden="true" />
      <span className="category-badge">{eyebrow.toUpperCase()}</span>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4 mb-4">{title}</h1>
      <p className="text-base md:text-lg text-foreground/85 max-w-3xl leading-relaxed">{intro}</p>
      <div className="flex flex-wrap items-center gap-2 mt-6">
        <Badge tone="gold">Last updated: {updated}</Badge>
        {badges.map((b) => (
          <Badge key={b}>{b}</Badge>
        ))}
      </div>
    </header>
  );
}

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "gold" | "outline" }) {
  const tones: Record<string, string> = {
    default: "bg-primary text-primary-foreground",
    gold: "bg-accent text-accent-foreground",
    outline: "border border-primary/40 text-primary bg-primary/5",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Section({ id, title, icon, children }: { id: string; title: string; icon?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 mb-12">
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-5 border-l-4 border-primary pl-3">
        {icon}
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: "info" | "success" | "warning";
  title: string;
  children: ReactNode;
}) {
  const map = {
    info: { icon: <Info className="h-5 w-5 text-primary" />, cls: "border-primary/40 bg-primary/5" },
    success: { icon: <CheckCircle2 className="h-5 w-5 text-primary" />, cls: "border-primary/40 bg-secondary" },
    warning: { icon: <AlertTriangle className="h-5 w-5 text-accent-foreground" />, cls: "border-accent/60 bg-accent/10" },
  } as const;
  const v = map[variant];
  return (
    <div className={`rounded-md border-l-4 p-5 my-6 ${v.cls}`}>
      <p className="flex items-center gap-2 font-bold mb-2 text-foreground">
        {v.icon}
        {title}
      </p>
      <div className="text-sm leading-relaxed text-foreground/85 space-y-2">{children}</div>
    </div>
  );
}

export function CardGrid({ items }: { items: { icon?: ReactNode; title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {items.map((it) => (
        <div key={it.title} className="rounded-md border bg-card p-5 hover:border-primary/60 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            {it.icon ?? <ShieldCheck className="h-5 w-5 text-primary" />}
            <h3 className="font-bold text-base">{it.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-foreground/80">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

export function PremiumTable({ head, rows, caption }: { head: string[]; rows: ReactNode[][]; caption?: string }) {
  return (
    <figure className="my-7 overflow-x-auto rounded-md border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-footer text-footer-foreground">
            {head.map((h) => (
              <th key={h} className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3 align-top border-t text-foreground/85">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <figcaption className="px-4 py-2 text-xs text-muted-foreground bg-secondary/40 border-t">{caption}</figcaption>}
    </figure>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <mark className="bg-accent/25 text-foreground px-1 rounded-sm font-medium">{children}</mark>;
}

export function KeyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 my-5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed">
          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-foreground/85">{i}</span>
        </li>
      ))}
    </ul>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -65% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join("|")]);
  return active;
}

export function TocSidebar({ toc }: { toc: TocItem[] }) {
  const active = useActiveSection(toc.map((t) => t.id));
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-6 space-y-6">
        <nav className="rounded-md border bg-card p-5" aria-label="Page contents">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-4 border-b-2 border-primary pb-2">
            <ListOrdered className="h-4 w-4 text-primary" /> On this page
          </p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t, i) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className={`flex gap-2 rounded px-2 py-1.5 transition-colors ${
                    active === t.id ? "bg-primary/10 text-primary font-semibold" : "text-foreground/75 hover:text-primary"
                  }`}
                >
                  <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span>{t.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="rounded-md border bg-secondary p-5">
          <p className="font-bold mb-2">Need clarification?</p>
          <p className="text-sm text-foreground/80 mb-3">Our editorial desk answers policy and data questions within two business days.</p>
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold">
            Contact the desk
          </Link>
        </div>
      </div>
    </aside>
  );
}

export function LegalPage({ toc, children }: { toc?: TocItem[]; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-10">
        <nav className="text-xs text-muted-foreground mb-5">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span>Information</span>
        </nav>
        {toc ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            <div className="min-w-0">{children}</div>
            <TocSidebar toc={toc} />
          </div>
        ) : (
          <div className="max-w-4xl">{children}</div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
