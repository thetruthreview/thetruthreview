import type { Metadata } from "next";

export const SITE_URL = "https://www.thetruthreview.com";
export const SITE_NAME = "The Truth Review";
export const SITE_TAGLINE = "Before You Buy, Know the Truth.";
export const EDITORIAL_TEAM = "The Truth Review Editorial Team";
export const DEFAULT_OG_IMAGE = "/og-default.jpg";

/** Absolute URL for a site path ("/about" -> "https://www.thetruthreview.com/about"). */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

/**
 * Turns the human dates used in the content ("November 2025",
 * "Updated November 2026", "2026-11-24") into ISO dates for schema/OG tags.
 */
export function toIsoDate(text?: string): string | undefined {
  if (!text) return undefined;
  if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0, 10);
  const m = text.toLowerCase().match(/([a-z]+)\s+(\d{4})/);
  if (!m) return undefined;
  const month = MONTHS.indexOf(m[1]);
  if (month < 0) return undefined;
  return `${m[2]}-${String(month + 1).padStart(2, "0")}-01`;
}

interface PageSeo {
  title: string;
  description: string;
  /** Site path, e.g. "/about". Used for the canonical URL and og:url. */
  path: string;
  /** Site path or absolute URL of the share image. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  /** Use the title as-is instead of appending " | The Truth Review". */
  absoluteTitle?: boolean;
  noindex?: boolean;
}

/** Full metadata for a page: title, description, canonical, Open Graph, Twitter and robots. */
export function pageMetadata(seo: PageSeo): Metadata {
  const image = seo.image ?? DEFAULT_OG_IMAGE;
  const images = [{ url: image, alt: seo.imageAlt ?? seo.title }];
  const isArticle = seo.type === "article";

  return {
    title: seo.absoluteTitle ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: { canonical: seo.path },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.path,
      siteName: SITE_NAME,
      locale: "en_US",
      images,
      ...(isArticle
        ? {
            type: "article" as const,
            publishedTime: seo.publishedTime,
            modifiedTime: seo.modifiedTime ?? seo.publishedTime,
            authors: [EDITORIAL_TEAM],
            section: seo.section,
          }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },
    robots: seo.noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

/* ---------- JSON-LD building blocks ---------- */

export const organizationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    slogan: SITE_TAGLINE,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    inLanguage: "en-US",
    publisher: { "@id": organizationId },
  };
}

export function editorialAuthor() {
  return { "@type": "Organization", name: EDITORIAL_TEAM, url: absoluteUrl("/about") };
}

/** BreadcrumbList from [name, path] pairs, starting after Home. */
export function breadcrumbSchema(items: [name: string, path: string][]) {
  const all: [string, string][] = [["Home", "/"], ...items];
  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

/** WebPage node tying a page to the site. */
export function webPageSchema(opts: {
  type?: string;
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: { "@id": websiteId },
    publisher: { "@id": organizationId },
  };
}

/** Removes the markdown-style **bold** markers used in the content. */
export function plainText(text: string): string {
  return text.replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
}
