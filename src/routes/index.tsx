import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/blog/SiteHeader";
import { SiteFooter } from "@/components/blog/SiteFooter";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { articles, categories, articlesByCategory, trendingArticles } from "@/lib/blog-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UnitedDubai Blog — Dubai Real Estate for Remote Workers & Global Investors" },
      { name: "description", content: "Data-driven Dubai property intelligence: investment guides, rental yields, Golden Visa rules and neighborhood breakdowns for remote workers and international buyers." },
      { property: "og:title", content: "UnitedDubai Blog — Dubai Real Estate for Remote Workers" },
      { property: "og:description", content: "Data-driven Dubai property intelligence for remote workers and international investors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = articles[0];
  const topSmall = [articles[1], articles[2], articles[3]];
  const gridSix = articles.slice(4, 10);
  const trending = trendingArticles();
  const handPicked = articles.slice(0, 3);
  const latest = articles.slice(3, 10);
  const invest = articlesByCategory("invest");
  const rentals = articlesByCategory("rentals");
  const visas = articlesByCategory("visas");
  const areas = articlesByCategory("areas");
  const guides = articlesByCategory("guides");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-6 space-y-10">

        {/* HERO: featured + 3 medium */}
        <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
          <ArticleCard article={featured} variant="featured" />
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <ArticleCard article={topSmall[0]} variant="medium" />
            <ArticleCard article={topSmall[1]} variant="medium" />
            <div className="col-span-2 lg:col-span-1">
              <ArticleCard article={topSmall[2]} variant="medium" />
            </div>
          </div>
        </section>

        {/* SIX-CARD SQUARE GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridSix.map(a => <ArticleCard key={a.slug} article={a} variant="square" />)}
        </section>

        {/* THREE COLUMN: hand-picked | latest | sidebar list */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2 inline-block">Hand-Picked Stories</h2>
            <div className="space-y-4">
              <ArticleCard article={handPicked[0]} variant="small" />
              <ArticleCard article={handPicked[1]} variant="small" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2 inline-block">Editor's Feature</h2>
            <ArticleCard article={handPicked[2]} variant="small" />
            <div className="mt-4 space-y-4">
              <ArticleCard article={latest[0]} variant="list" />
              <ArticleCard article={latest[1]} variant="list" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2 inline-block">Latest News & Stories</h2>
            <div className="space-y-4">
              {latest.slice(2, 8).map(a => <ArticleCard key={a.slug} article={a} variant="list" />)}
            </div>
          </div>
        </section>

        {/* TRENDING STRIP */}
        <section className="bg-trending rounded-md px-6 py-5">
          <div className="flex items-center gap-6 flex-wrap">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Trending Now</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 flex-1">
              {trending.map((a, i) => (
                <div key={a.slug} className="flex gap-2">
                  <span className="text-2xl font-bold text-primary leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-primary uppercase">{categories.find(c => c.slug === a.category)?.name}</span>
                    <h4 className="text-xs font-semibold leading-snug line-clamp-2">
                      <Link to="/$category/$slug" params={{ category: a.category, slug: a.slug }} className="article-title-link">{a.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INVEST SECTION */}
        <SectionRow title="Investment Insights" categorySlug="invest" items={invest} />

        {/* RENTALS SECTION */}
        <SectionRow title="Rental Market" categorySlug="rentals" items={rentals} />

        {/* WIDE FEATURED BANNER */}
        <section className="relative overflow-hidden rounded-md min-h-[280px]">
          <img src={areas[0].cover} alt={areas[0].title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1920} height={600} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
          <div className="relative p-8 md:p-12 max-w-xl text-white">
            <span className="category-badge mb-3">AREAS</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              <Link to="/$category/$slug" params={{ category: areas[0].category, slug: areas[0].slug }} className="hover:text-primary">{areas[0].title}</Link>
            </h2>
            <p className="text-sm opacity-90 mb-4">{areas[0].excerpt}</p>
            <Link to="/$category/$slug" params={{ category: areas[0].category, slug: areas[0].slug }} className="inline-block bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold rounded">See More Info</Link>
          </div>
        </section>

        {/* VISAS SECTION */}
        <SectionRow title="Visas & Residency" categorySlug="visas" items={visas} />

        {/* AREAS SECTION */}
        <SectionRow title="Neighborhood Guides" categorySlug="areas" items={areas} />

        {/* GUIDES SECTION */}
        <SectionRow title="Reference Guides" categorySlug="guides" items={guides} />

        {/* SIX FINAL SQUARE COVERS */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {articles.slice(0, 6).map(a => (
            <Link key={a.slug} to="/$category/$slug" params={{ category: a.category, slug: a.slug }} className="relative aspect-square overflow-hidden rounded-md group">
              <img src={a.cover} alt={a.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={320} height={320} />
              <div className="absolute bottom-0 left-0 p-2">
                <span className="category-badge text-[9px]">{categories.find(c => c.slug === a.category)?.name}</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function SectionRow({ title, categorySlug, items }: { title: string; categorySlug: string; items: typeof articles }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-bold border-b-2 border-primary pb-2 inline-block">{title}</h2>
        <Link to="/$category" params={{ category: categorySlug }} className="text-sm text-primary font-semibold hover:underline">View all →</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map(a => <ArticleCard key={a.slug} article={a} variant="small" />)}
      </div>
    </section>
  );
}
