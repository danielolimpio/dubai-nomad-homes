// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const categoryPaths = ["/invest", "/rentals", "/visas", "/areas", "/guides"];

const articlePaths = [
  "/invest/dubai-property-investment-remote-workers-guide-2026",
  "/invest/off-plan-vs-ready-property-dubai-roi-2026",
  "/invest/best-dubai-areas-digital-nomad-investment-2026",
  "/rentals/dubai-airbnb-investment-roi-data-2026",
  "/rentals/monthly-vs-yearly-rentals-dubai-remote-workers",
  "/rentals/furnished-apartments-dubai-digital-nomads-2026",
  "/visas/dubai-golden-visa-property-requirements-2026",
  "/visas/dubai-digital-nomad-visa-property-application-2026",
  "/visas/dubai-property-investor-visa-minimum-investment-2026",
  "/areas/dubai-marina-vs-downtown-remote-workers-2026",
  "/areas/jvc-dubai-property-investment-guide-2026",
  "/areas/dubai-hills-estate-neighborhood-guide-2026",
  "/guides/buy-property-dubai-foreigner-legal-guide-2026",
  "/guides/dubai-property-taxes-fees-2026",
  "/guides/brazilian-investor-dubai-real-estate-guide",
];

const staticPagePaths = [
  "/",
  "/about",
  "/editorial-policy",
  "/disclaimer",
  "/privacy",
  "/contact",
  ...categoryPaths,
  ...articlePaths,
];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
      crawlLinks: true,
    },
    pages: staticPagePaths.map((path) => ({ path })),
    sitemap: {
      enabled: true,
      host: "https://unitedubai.blog",
    },
  },
});
