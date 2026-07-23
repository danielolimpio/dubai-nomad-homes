import { Link } from "@tanstack/react-router";
import { articles, categories } from "@/lib/blog-data";

export function SiteFooter() {
  const popular = articles.slice(0, 3);
  return (
    <footer className="bg-footer text-footer-foreground mt-16">
      <div className="mx-auto max-w-[1240px] px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-lg font-bold mb-5">Popular Choice</h4>
          <ul className="space-y-4">
            {popular.map(a => (
              <li key={a.slug} className="flex gap-3">
                <img src={a.cover} alt={a.title} className="h-14 w-14 rounded object-cover flex-shrink-0" loading="lazy" width={56} height={56} />
                <Link to="/$category/$slug" params={{ category: a.category, slug: a.slug }} className="text-sm leading-snug hover:text-primary">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-5">Categories</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {categories.map(c => (
              <li key={c.slug}><Link to="/$category" params={{ category: c.slug }} className="hover:text-primary">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-5">Information</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/glossary" className="hover:text-primary">Glossary</Link></li>
            <li><Link to="/editorial-policy" className="hover:text-primary">Editorial Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Subscribe Now</h4>
          <p className="text-sm opacity-80 mb-4">Get the latest Dubai property intelligence for remote workers and global investors.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="info@example.com" className="flex-1 px-3 py-2 text-sm text-foreground rounded-l" />
            <button className="bg-primary text-primary-foreground px-4 text-sm font-semibold rounded-r">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1240px] px-4 py-5 text-xs text-white/90 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} UnitedDubai Blog. All rights reserved.</span>
          <span>Editorial content. Not financial or legal advice.</span>
        </div>
      </div>
    </footer>
  );
}
