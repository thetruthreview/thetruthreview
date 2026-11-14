import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { categories } from "@/lib/categories";
import { getReviewsByCategory } from "@/lib/reviews";

const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

export const metadata: Metadata = {
  title: "Supplement Reviews",
  description:
    "Independent, science-backed reviews of dietary supplements, organized by health category.",
};

export default function ReviewsIndexPage() {
  return (
    <Container className="py-10">
      <div className="mb-8 border-b pb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
          Independent Investigations
        </span>
        <h1 className="text-3xl font-black text-[var(--brand-navy)] mt-1 mb-2" style={serif}>
          Supplement Reviews
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Browse our investigations by health category. Each review follows the same
          10-section methodology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => {
          const count = getReviewsByCategory(cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/reviews/${cat.slug}`}
              className="group border rounded-lg p-5 hover:border-[var(--brand-gold)]/60 hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold text-[var(--brand-navy)] group-hover:text-[var(--brand-gold)] transition-colors" style={serif}>
                  {cat.label}
                </h2>
                <span className="text-xs text-muted-foreground">{count}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
