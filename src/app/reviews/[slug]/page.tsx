import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewTemplate } from "@/components/review-template";
import { sampleReview } from "@/lib/sample-review";

export function generateStaticParams() {
  return [{ slug: sampleReview.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== sampleReview.slug) return {};
  return { title: sampleReview.title, description: sampleReview.summary };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== sampleReview.slug) notFound();
  return <ReviewTemplate review={sampleReview} />;
}
