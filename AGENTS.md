<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## SEO rules (mandatory for every page)

The goal is organic Google traffic, so **every page must ship with complete SEO**. Site domain: `https://www.thetruthreview.com` (constant `SITE_URL` in `src/lib/seo.ts`).

**Next.js pages (`src/app/**/page.tsx`)**
- Build metadata with `pageMetadata()` from `src/lib/seo.ts` (or `rankingMetadata()` from `src/lib/seo-content.ts` for ranking pages). This sets title, description, canonical, Open Graph, Twitter card and robots. Never export a bare `{ title, description }`.
- Render structured data with `<JsonLd graph={[...]} />` (`src/components/json-ld.tsx`): at least a `WebPage` (or the right subtype) and a `BreadcrumbList`; rankings add `Article` + `ItemList`.
- New product pages also go in `src/lib/investigations.ts` (listed on /reviews; the first one is the home page "Latest Investigation").
- Add the page to `src/app/sitemap.ts`.
- Pages with no real content get `noindex: true` and stay out of the sitemap.

**Static HTML landing pages (`public/<slug>/index.html`, routed in `next.config.ts`)**
- Fill everything in the HTML itself: `<title>`, meta description, robots, canonical (`https://www.thetruthreview.com/<slug>`), Open Graph (incl. 1200×630 `og:image`), Twitter tags, article dates/author, and a JSON-LD `@graph` with WebSite, Organization, Article, Product, BreadcrumbList and FAQPage when there is a FAQ.
- No placeholders left (`SEU-DOMINIO`, `{{...}}`); asset paths are absolute (`/<slug>/images/...`).
- Add the page to `src/app/sitemap.ts`.

**Content accuracy:** prices, packages, bonuses and guarantee terms on landing pages must match the product's official site exactly; never list a package that does not exist there.

## Content rules

- **FAQs:** questions follow a logical order (what it is → ingredients → how to use → how long → safety/side effects → interactions → legitimacy → price → subscription → where to buy → guarantee). No two questions may cover the same topic, and answers must not repeat each other's information. Keep the visible FAQ and the FAQPage JSON-LD identical.
- **Pros & Cons on landing pages:** any cons on a product landing page (e.g. /breathizen) must be mild and non-damaging, e.g. "Only sold on the official website", "Best results with consistent daily use". Never use cons that undermine the product.
