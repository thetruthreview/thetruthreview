import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { VerdictBadge } from "@/components/verdict-badge";
import { RatingStars } from "@/components/rating-stars";
import { categories, getCategory } from "@/lib/categories";
import { getReviewsByCategory } from "@/lib/reviews";

const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return { title: `${cat.label} Reviews`, description: cat.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const list = getReviewsByCategory(category);

  return (
    <Container className="py-10">
      <nav className="text-xs text-muted-foreground mb-4">
        <Link href="/reviews" className="hover:text-[var(--brand-gold)]">Reviews</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--brand-navy)]">{cat.label}</span>
      </nav>

      <h1 className="text-3xl font-black text-[var(--brand-navy)] mb-2" style={serif}>
        {cat.label} Reviews
      </h1>
      <p className="text-muted-foreground max-w-xl mb-8">{cat.description}</p>

      {list.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground border rounded-lg">
          <p className="text-sm">No reviews in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((r) => (
            <Link
              key={r.slug}
              href={`/reviews/${r.categorySlug}/${r.slug}`}
              className="group border rounded-lg p-5 hover:border-[var(--brand-gold)]/60 hover:shadow-md transition-all bg-white"
            >
              <h2 className="font-bold text-[var(--brand-navy)] group-hover:text-[var(--brand-gold)] transition-colors mb-2 leading-snug" style={serif}>
                {r.productName}
              </h2>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{r.summary}</p>
              <div className="flex items-center justify-between">
                <VerdictBadge verdict={r.verdict} />
                <RatingStars score={r.overallScore} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
}
