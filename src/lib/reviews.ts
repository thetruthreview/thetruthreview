import type { ReviewData } from "@/components/review-template";

export interface Review extends ReviewData {
  slug: string;
  categorySlug: string;
}

export const reviews: Review[] = [
  {
    slug: "sample-product",
    categorySlug: "vision",
    title: "Sample Product Review: Does It Actually Work?",
    productName: "Sample Product",
    category: "Vision & Eye Health",
    publishedAt: "Sample date",
    author: "The Truth Review Editorial Team",
    verdict: "mixed",
    overallScore: 5.8,
    scores: { ingredients: 5, evidence: 4, safety: 7, value: 6, transparency: 6 },
    summary:
      "Placeholder text. This page demonstrates the review layout with fictional data. The real summary of the verdict goes here, in two or three sentences.",
    sections: {
      introduction: "Placeholder introduction. Sample content for layout purposes only.",
      companyClaims: ["Sample claim one", "Sample claim two", "Sample claim three"],
      factOrFiction: [
        { claim: "Sample claim one", verdict: "partially-true", explanation: "Placeholder explanation of how the claim compares with available evidence." },
        { claim: "Sample claim two", verdict: "unverified", explanation: "Placeholder explanation. No sufficient evidence found." },
      ],
      ingredients: [
        { name: "Sample ingredient", dosage: "500 mg", purpose: "Sample purpose", evidence: "Placeholder. Evidence for the ingredient, the dose, the combination and the product are kept separate.", rating: "moderate" },
      ],
      clinicalEvidence: "Placeholder clinical evidence section.",
      safety: "Placeholder safety and side effects section.",
      customerReviews: "Placeholder customer reviews and complaints section.",
      pricing: "Placeholder pricing and refund policy section.",
      pros: ["Sample pro one", "Sample pro two"],
      cons: ["Sample con one", "Sample con two"],
      finalVerdict: "Placeholder final verdict. The editorial conclusion goes here.",
    },
    affiliateLink: "#",
  },
];

export function getReview(categorySlug: string, slug: string): Review | undefined {
  return reviews.find((r) => r.categorySlug === categorySlug && r.slug === slug);
}

export function getReviewsByCategory(categorySlug: string): Review[] {
  return reviews.filter((r) => r.categorySlug === categorySlug);
}
