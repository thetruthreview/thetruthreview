import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getReviewsByCategory, reviews } from "@/lib/reviews";
import { absoluteUrl, toIsoDate } from "@/lib/seo";
import { reviewPath } from "@/lib/seo-content";
import { topHearing } from "@/lib/top-hearing";
import { bestBrain } from "@/lib/best-brain";

/**
 * Every indexable page of the site. When you add a page (including static
 * landing pages in /public such as /breathizen), add it here too.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    lastModified?: string,
  ) => ({ url: absoluteUrl(path), priority, changeFrequency, ...(lastModified ? { lastModified } : {}) });

  return [
    page("/", 1, "weekly"),
    page("/reviews", 0.8, "weekly"),
    // Only categories that already have reviews (empty ones are noindex).
    ...categories
      .filter((c) => getReviewsByCategory(c.slug).length > 0)
      .map((c) => page(`/reviews/${c.slug}`, 0.7, "weekly")),
    ...reviews.map((r) => page(reviewPath(r), 0.9, "monthly", toIsoDate(r.updatedAt ?? r.publishedAt))),
    page("/tophearing", 0.9, "monthly", toIsoDate(topHearing.updated)),
    page("/best-brain-supplement", 0.9, "monthly", toIsoDate(bestBrain.updated)),
    // Static landing pages served from /public.
    page("/breathizen", 0.9, "monthly", "2026-11-25"),
    page("/about", 0.4, "yearly"),
    page("/methodology", 0.5, "yearly"),
  ];
}
