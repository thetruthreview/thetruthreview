import type { MetadataRoute } from "next";
import { absoluteUrl, toIsoDate } from "@/lib/seo";
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
    page("/best-brain-supplement", 0.9, "monthly", toIsoDate(bestBrain.updated)),
    // Static landing pages served from /public.
    page("/dentavive", 0.9, "monthly", "2026-11-26"),
    page("/gelagen", 0.9, "monthly", "2026-11-26"),
    page("/slimtide", 0.9, "monthly", "2026-11-26"),
    page("/memohoney", 0.9, "monthly", "2026-11-26"),
    page("/vapocept", 0.9, "monthly", "2026-11-25"),
    page("/sodatide", 0.9, "monthly", "2026-11-25"),
    page("/sodapeak", 0.9, "monthly", "2026-11-25"),
    page("/breathizen", 0.9, "monthly", "2026-11-25"),
    page("/about", 0.4, "yearly"),
    page("/methodology", 0.5, "yearly"),
    page("/contact", 0.4, "yearly"),
    page("/disclaimer", 0.3, "yearly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
  ];
}
