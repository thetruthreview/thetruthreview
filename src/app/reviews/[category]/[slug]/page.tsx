import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewTemplate } from "@/components/review-template";
import { getReview, reviews } from "@/lib/reviews";
import { getCategory } from "@/lib/categories";

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
  return { title: review.title, description: review.summary };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const review = getReview(category, slug);
  if (!review || !getCategory(category)) notFound();
  return <ReviewTemplate review={review} />;
}
