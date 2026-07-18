import { Link } from "@tanstack/react-router";
import { getCategory, type Article } from "@/lib/blog-data";

type Variant = "featured" | "medium" | "small" | "list" | "square";

export function ArticleCard({ article, variant = "medium" }: { article: Article; variant?: Variant }) {
  const cat = getCategory(article.category);
  const catName = cat?.name.toUpperCase() ?? article.category.toUpperCase();

  if (variant === "featured") {
    return (
      <article className="relative overflow-hidden rounded-md group h-full min-h-[380px]">
        <img src={article.cover} alt={article.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={1024} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Link to="/$category" params={{ category: article.category }} className="category-badge mb-3">{catName}</Link>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
            <Link to="/$category/$slug" params={{ category: article.category, slug: article.slug }} className="hover:text-primary">{article.title}</Link>
          </h2>
          <div className="text-xs opacity-90 flex gap-3">
            <span>{article.author}</span><span>{article.date}</span>
          </div>
        </div>
      </article>
    );
  }
  if (variant === "medium") {
    return (
      <article className="relative overflow-hidden rounded-md group h-full min-h-[180px]">
        <img src={article.cover} alt={article.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={512} height={512} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <span className="category-badge mb-2">{catName}</span>
          <h3 className="text-sm font-bold leading-snug">
            <Link to="/$category/$slug" params={{ category: article.category, slug: article.slug }} className="hover:text-primary line-clamp-2">{article.title}</Link>
          </h3>
        </div>
      </article>
    );
  }
  if (variant === "square") {
    return (
      <article className="bg-secondary rounded-md overflow-hidden group">
        <div className="p-3 pb-2 flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span className="category-badge text-[10px] mb-2">{catName}</span>
            <h3 className="text-xs font-bold leading-snug mt-2 line-clamp-3">
              <Link to="/$category/$slug" params={{ category: article.category, slug: article.slug }} className="article-title-link">{article.title}</Link>
            </h3>
            <div className="text-[10px] text-muted-foreground mt-2">{article.author} · {article.date}</div>
          </div>
          <img src={article.cover} alt={article.title} className="h-20 w-20 rounded object-cover flex-shrink-0" loading="lazy" width={80} height={80} />
        </div>
      </article>
    );
  }
  if (variant === "list") {
    return (
      <article className="flex gap-3 items-start">
        <img src={article.cover} alt={article.title} className="h-14 w-14 rounded object-cover flex-shrink-0" loading="lazy" width={56} height={56} />
        <div className="min-w-0">
          <h4 className="text-sm font-semibold leading-snug line-clamp-2">
            <Link to="/$category/$slug" params={{ category: article.category, slug: article.slug }} className="article-title-link">{article.title}</Link>
          </h4>
          <div className="text-[11px] text-muted-foreground mt-1">{article.author} · {article.date}</div>
        </div>
      </article>
    );
  }
  // small
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-md aspect-[16/10]">
        <img src={article.cover} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={640} height={400} />
        <span className="absolute bottom-2 left-2 category-badge">{catName}</span>
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug">
        <Link to="/$category/$slug" params={{ category: article.category, slug: article.slug }} className="article-title-link">{article.title}</Link>
      </h3>
      <div className="text-xs text-muted-foreground mt-1">{article.author} · {article.date}</div>
    </article>
  );
}
