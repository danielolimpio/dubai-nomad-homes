import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { getArticle, getCategory, articles, articlesByCategory, categories } from "@/lib/blog-data";

export const Route = createFileRoute("/$category/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.category, params.slug);
    const cat = getCategory(params.category);
    if (!article || !cat) throw notFound();
    return { article, cat };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article — UnitedDubai Blog" }, { name: "robots", content: "noindex" }] };
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | UnitedDubai Blog` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "keywords", content: article.keyword },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => <div className="p-10 text-center">Article not found.</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center">Error: {error.message}</div>,
});

function ArticlePage() {
  const { article, cat } = Route.useLoaderData();
  const related = articlesByCategory(article.category).filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-8">
        <nav className="text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link> <span className="mx-1">›</span>
          <Link to="/$category" params={{ category: cat.slug }} className="hover:text-primary">{cat.name}</Link> <span className="mx-1">›</span>
          <span className="line-clamp-1 inline">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <article>
            <Link to="/$category" params={{ category: cat.slug }} className="category-badge">{cat.name.toUpperCase()}</Link>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-3 mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b">
              <span>By <strong className="text-foreground">{article.author}</strong></span>
              <span>·</span><span>{article.date}</span>
              <span>·</span><span>{article.readTime}</span>
            </div>
            <img src={article.cover} alt={article.title} className="w-full rounded-md mb-8 aspect-[16/9] object-cover" width={1200} height={675} />
            <p className="text-lg leading-relaxed text-foreground/90 mb-8 font-medium">{article.excerpt}</p>

            {article.content.map((s: { heading: string; body: string[] }, i: number) => (
              <section key={i} className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">{s.heading}</h2>
                {s.body.map((p: string, j: number) => (
                  <p key={j} className="text-base leading-relaxed mb-4 text-foreground/85">{p}</p>
                ))}
              </section>
            ))}

            <div className="mt-10 p-5 bg-secondary rounded-md text-sm text-muted-foreground border-l-4 border-primary">
              <strong className="text-foreground">Editorial note:</strong> This article is published for informational purposes. It reports market data and public regulations and does not constitute financial, legal or tax advice. Consult a licensed professional before making any investment decision.
            </div>

            <section className="mt-12">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2 inline-block">Related in {cat.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(a => <ArticleCard key={a.slug} article={a} variant="small" />)}
              </div>
            </section>
          </article>

          <aside className="space-y-8">
            <div>
              <h3 className="text-lg font-bold border-b-2 border-primary pb-2 inline-block mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(c => (
                  <li key={c.slug}>
                    <Link to="/$category" params={{ category: c.slug }} className="text-sm hover:text-primary flex justify-between">
                      <span>{c.name}</span>
                      <span className="text-muted-foreground">{articlesByCategory(c.slug).length}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold border-b-2 border-primary pb-2 inline-block mb-4">Trending Now</h3>
              <div className="space-y-4">
                {articles.slice(0, 6).map(a => <ArticleCard key={a.slug} article={a} variant="list" />)}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
