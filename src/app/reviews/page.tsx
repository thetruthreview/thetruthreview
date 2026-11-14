import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { VerdictBadge } from "@/components/verdict-badge";
import { RatingStars } from "@/components/rating-stars";

export const metadata: Metadata = {
  title: "Supplement Reviews",
  description:
    "Independent, science-backed reviews of dietary supplements and nutraceuticals. Ingredient analysis, clinical evidence, and honest verdicts.",
};

// Placeholder — will be replaced by Sanity queries
const reviews: Array<{
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  verdict: "legit" | "scam" | "mixed" | "inconclusive";
  score: number;
  date: string;
  readTime: string;
}> = [];

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Page header */}
      <div className="mb-8 border-b pb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
          Independent Investigations
        </span>
        <h1
          className="text-3xl font-black text-[var(--brand-navy)] mt-1 mb-2"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Supplement Reviews
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Every review follows our 10-section investigative methodology — from ingredient analysis
          to final verdict. No sponsored content. No unverified claims.
        </p>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-lg font-semibold mb-2">First reviews coming soon</h2>
          <p className="text-sm">We&apos;re currently completing our first round of investigations.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Link key={review.slug} href={`/reviews/${review.slug}`} className="group">
              <Card className="h-full hover:border-[var(--brand-gold)]/50 transition-all hover:shadow-md">
                <div className="h-36 bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-navy-mid)] rounded-t-lg" />
                <CardContent className="p-4">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)] mb-1">
                    {review.category}
                  </div>
                  <h3
                    className="font-bold text-[var(--brand-navy)] group-hover:text-[var(--brand-gold)] transition-colors mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {review.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">{review.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <VerdictBadge verdict={review.verdict} />
                    <RatingStars score={review.score} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
