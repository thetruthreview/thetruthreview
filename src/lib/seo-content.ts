import type { Metadata } from "next";
import type { RankingData } from "@/components/ranking-page";
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
