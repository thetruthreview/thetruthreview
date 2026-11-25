import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewTemplate } from "@/components/review-template";
import { getReview, reviews } from "@/lib/reviews";
import { getCategory } from "@/lib/categories";
import { JsonLd } from "@/components/json-ld";
import { reviewMetadata, reviewSchema } from "@/lib/seo-content";

export function generateStaticParams() {
  return reviews.map((r) => ({ category: r.categorySlug, slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const review = getReview(category, slug);
  if (!review) return {};
  return reviewMetadata(review);
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const review = getReview(category, slug);
  const cat = getCategory(category);
  if (!review || !cat) notFound();
  return (
    <>
      <JsonLd graph={reviewSchema(review, cat.label)} />
      <ReviewTemplate review={review} />
    </>
  );
}
