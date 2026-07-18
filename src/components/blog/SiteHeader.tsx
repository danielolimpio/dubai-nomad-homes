import { Link } from "@tanstack/react-router";
import { Search, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { categories } from "@/lib/blog-data";

export function SiteHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
  return (
    <header className="w-full">
      <div className="topbar-strip">
        <div className="mx-auto max-w-[1240px] flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <span>{today}</span>
            <span className="hidden md:inline opacity-80">|</span>
            <Link to="/about" className="hidden md:inline hover:underline">About Us</Link>
            <span className="hidden md:inline opacity-80">|</span>
            <Link to="/contact" className="hidden md:inline hover:underline">Contact Us</Link>
          </div>
          <div className="flex items-center gap-3">
            <Facebook className="h-3.5 w-3.5" />
            <Twitter className="h-3.5 w-3.5" />
            <Linkedin className="h-3.5 w-3.5" />
            <Youtube className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
      <div className="border-b border-border bg-header text-header-foreground">
        <div className="mx-auto max-w-[1240px] flex items-center gap-8 px-4 py-4">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-primary">United</span>Dubai<span className="text-primary">.</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-primary">Home</Link>
            {categories.map(c => (
              <Link key={c.slug} to="/$category" params={{ category: c.slug }} activeProps={{ className: "text-primary" }} className="hover:text-primary">
                {c.name}
              </Link>
            ))}
            <Link to="/about" activeProps={{ className: "text-primary" }} className="hover:text-primary">About</Link>
          </nav>
          <div className="ml-auto flex items-center gap-4 text-sm">
            <div className="hidden md:flex items-center gap-2 border-l border-border pl-4 text-muted-foreground">
              <Search className="h-4 w-4" />
              <span>Search Keywords...</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
