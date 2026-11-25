import type { Metadata } from "next";
import type { RankingData } from "@/components/ranking-page";
import type { Review } from "@/lib/reviews";
import {
  absoluteUrl,
  breadcrumbSchema,
  DEFAULT_OG_IMAGE,
  editorialAuthor,
  organizationId,
  pageMetadata,
  plainText,
  toIsoDate,
  webPageSchema,
  websiteId,
} from "@/lib/seo";

/* ---------- Ranking / comparison pages ---------- */

function rankingImage(data: RankingData) {
  return data.products.find((p) => p.winner && p.image)?.image ?? DEFAULT_OG_IMAGE;
}

export function rankingMetadata(data: RankingData, path: string): Metadata {
  const date = toIsoDate(data.updated);
  return pageMetadata({
    title: data.title,
    description: data.metaDescription ?? plainText(data.subtitle),
    path,
    image: rankingImage(data),
    type: "article",
    publishedTime: date,
    modifiedTime: date,
    section: "Supplement Rankings",
    absoluteTitle: true,
  });
}

export function rankingSchema(data: RankingData, path: string) {
  const url = absoluteUrl(path);
  const date = toIsoDate(data.updated);
  return [
    webPageSchema({ path, name: data.title, description: plainText(data.subtitle) }),
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: data.title,
      description: plainText(data.subtitle),
      image: absoluteUrl(rankingImage(data)),
      datePublished: date,
      dateModified: date,
      inLanguage: "en-US",
      author: editorialAuthor(),
      publisher: { "@id": organizationId },
      isPartOf: { "@id": websiteId },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      about: { "@id": `${url}#ranking` },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#ranking`,
      name: data.tableTitle,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: data.products.length,
      itemListElement: data.products.map((p) => ({
        "@type": "ListItem",
        position: p.rank,
        name: p.name,
        ...(p.image ? { image: absoluteUrl(p.image) } : {}),
      })),
    },
    breadcrumbSchema([[data.title, path]]),
  ];
}

/* ---------- Individual product reviews ---------- */

export function reviewPath(r: Review) {
  return `/reviews/${r.categorySlug}/${r.slug}`;
}

export function reviewMetadata(r: Review): Metadata {
  return pageMetadata({
    title: r.title,
    description: r.metaDescription ?? plainText(r.summary),
    path: reviewPath(r),
    image: r.productImage,
    imageAlt: `${r.productName} bottle`,
    type: "article",
    publishedTime: toIsoDate(r.publishedAt),
    modifiedTime: toIsoDate(r.updatedAt ?? r.publishedAt),
    section: r.category,
    absoluteTitle: true,
  });
}

export function reviewSchema(r: Review, categoryLabel: string) {
  const path = reviewPath(r);
  const url = absoluteUrl(path);
  const published = toIsoDate(r.publishedAt);
  const modified = toIsoDate(r.updatedAt ?? r.publishedAt);
  const image = r.productImage ? absoluteUrl(r.productImage) : absoluteUrl(DEFAULT_OG_IMAGE);
  return [
    webPageSchema({ path, name: r.title, description: plainText(r.summary) }),
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: r.title,
      description: plainText(r.summary),
      image,
      datePublished: published,
      dateModified: modified,
      inLanguage: "en-US",
      articleSection: r.category,
      author: editorialAuthor(),
      publisher: { "@id": organizationId },
      isPartOf: { "@id": websiteId },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      about: { "@id": `${url}#product` },
    },
    {
      "@type": "Product",
      "@id": `${url}#product`,
      name: r.productName,
      image,
      category: r.category,
      description: plainText(r.verdictHeadline ?? r.summary),
      review: {
        "@type": "Review",
        "@id": `${url}#review`,
        name: r.title,
        reviewBody: plainText(r.summary),
        datePublished: published,
        author: editorialAuthor(),
        publisher: { "@id": organizationId },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.overallScore,
          bestRating: 10,
          worstRating: 0,
        },
      },
    },
    breadcrumbSchema([
      ["Reviews", "/reviews"],
      [categoryLabel, `/reviews/${r.categorySlug}`],
      [r.productName, path],
    ]),
  ];
}
