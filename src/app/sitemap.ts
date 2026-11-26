import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import pageDates from "@/lib/page-dates.json";

/**
 * Every indexable page of the site. When you add a page (including static
 * landing pages in /public such as /breathizen), add it here too — and to the
 * PAGES map in scripts/page-dates.mjs, which is where <lastmod> comes from.
 *
 * lastModified is the date of the last commit that touched the page's source,
 * regenerated on every build. Don't hardcode dates here: a lastmod that never
 * changes stops telling Google anything, and one that changes without the page
 * changing teaches it to ignore the field.
 */
const dates: Record<string, string> = pageDates;

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  ) => {
    const lastModified = dates[path];
    return { url: absoluteUrl(path), priority, changeFrequency, ...(lastModified ? { lastModified } : {}) };
  };

  return [
    page("/", 1, "weekly"),
    page("/reviews", 0.8, "weekly"),
    page("/best-brain-supplement", 0.9, "monthly"),
    // Static landing pages served from /public.
    page("/sugardefender", 0.9, "monthly"),
    page("/dentavive", 0.9, "monthly"),
    page("/gelagen", 0.9, "monthly"),
    page("/slimtide", 0.9, "monthly"),
    page("/memohoney", 0.9, "monthly"),
    page("/vapocept", 0.9, "monthly"),
    page("/sodatide", 0.9, "monthly"),
    page("/sodapeak", 0.9, "monthly"),
    page("/breathizen", 0.9, "monthly"),
    page("/about", 0.4, "yearly"),
    page("/methodology", 0.5, "yearly"),
    page("/contact", 0.4, "yearly"),
    page("/disclaimer", 0.3, "yearly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
  ];
}
