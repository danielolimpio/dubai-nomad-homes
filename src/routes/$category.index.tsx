import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { articlesByCategory, getCategory, categories, articles, type Article } from "@/lib/blog-data";

export const Route = createFileRoute("/$category/")({
  loader: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) throw notFound();
    return { cat, items: articlesByCategory(params.category) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Category — UnitedDubai Blog" }, { name: "robots", content: "noindex" }] };
    const { cat } = loaderData;
    return {
      meta: [
        { title: `${cat.name} — Dubai Real Estate | UnitedDubai Blog` },
        { name: "description", content: cat.description },
        { property: "og:title", content: `${cat.name} — UnitedDubai Blog` },
        { property: "og:description", content: cat.description },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => <div className="p-10 text-center">Category not found.</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center">Error: {error.message}</div>,
});

function CategoryPage() {
  const { cat, items } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-8">
        <nav className="text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link> <span className="mx-1">›</span> <span>{cat.name}</span>
        </nav>
        <h1 className="text-4xl font-bold border-b-2 border-primary pb-3 inline-block mb-2">{cat.name}</h1>
        <p className="text-muted-foreground max-w-2xl mb-8">{cat.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((a: Article) => <ArticleCard key={a.slug} article={a} variant="small" />)}
          </div>
          <aside className="space-y-8">
            <div>
              <h3 className="text-lg font-bold border-b-2 border-primary pb-2 inline-block mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(c => (
                  <li key={c.slug}><Link to="/$category" params={{ category: c.slug }} className="text-sm hover:text-primary flex justify-between"><span>{c.name}</span><span className="text-muted-foreground">{articlesByCategory(c.slug).length}</span></Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold border-b-2 border-primary pb-2 inline-block mb-4">Top Stories</h3>
              <div className="space-y-4">
                {articles.slice(0, 5).map(a => <ArticleCard key={a.slug} article={a} variant="list" />)}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
