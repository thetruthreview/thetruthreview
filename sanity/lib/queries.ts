import { sanityClient } from "./client";
import { groq } from "next-sanity";

const reviewFields = groq`
  _id,
  title,
  "slug": slug.current,
  productName,
  category,
  author,
  publishedAt,
  updatedAt,
  verdict,
  overallScore,
  scores,
  summary,
  "mainImage": mainImage.asset->url,
  affiliateLink,
  ctaLabel
`;

export async function getAllReviews() {
  return sanityClient.fetch(
    groq`*[_type == "review"] | order(publishedAt desc) { ${reviewFields} }`
  );
}

export async function getReviewBySlug(slug: string) {
  return sanityClient.fetch(
    groq`*[_type == "review" && slug.current == $slug][0] {
      ${reviewFields},
      introduction,
      companyClaims,
      factOrFiction,
      ingredients,
      clinicalEvidence,
      safety,
      customerReviews,
      pricing,
      pros,
      cons,
      finalVerdict,
      seoDescription
    }`,
    { slug }
  );
}

export async function getReviewsByCategory(category: string) {
  return sanityClient.fetch(
    groq`*[_type == "review" && category == $category] | order(publishedAt desc) { ${reviewFields} }`,
    { category }
  );
}
