import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { VerdictBadge } from "@/components/verdict-badge";
import { RatingStars } from "@/components/rating-stars";

// Placeholder featured reviews — will be replaced by Sanity data
const featuredReviews = [
  {
    slug: "reviews/sample-product",
    category: "Cognitive Support",
    title: "BrainBoost Pro Review",
    subtitle: "Does This Nootropic Actually Work? We Investigated the Evidence.",
    verdict: "mixed" as const,
    score: 5.8,
    date: "November 2025",
    readTime: "12 min read",
    tags: ["Nootropic", "Cognitive"],
  },
  {
    slug: "scam-or-legit/sugar-defender-review",
    category: "Blood Sugar",
    title: "Sugar Defender — Scam or Legit?",
    subtitle: "We analyzed every ingredient claim against published clinical evidence.",
    verdict: "mixed" as const,
    score: 5.2,
    date: "November 2025",
    readTime: "15 min read",
    tags: ["Blood Sugar", "Glucose"],
  },
  {
    slug: "reviews/vision-supplement",
    category: "Eye Health",
    title: "VisionShield 20/20 Review",
    subtitle: "An honest look at the ingredients, dosages, and company claims.",
    verdict: "legit" as const,
    score: 7.1,
    date: "November 2025",
    readTime: "10 min read",
    tags: ["Vision", "Eye Health"],
  },
];

const categories = [
  { label: "Cognitive Support", href: "/reviews?cat=cognitive", icon: "🧠" },
  { label: "Weight Management", href: "/reviews?cat=weight", icon: "⚖️" },
  { label: "Cardiovascular", href: "/reviews?cat=cardiovascular", icon: "❤️" },
  { label: "Blood Sugar", href: "/reviews?cat=blood-sugar", icon: "🩸" },
  { label: "Eye Health", href: "/reviews?cat=eye-health", icon: "👁️" },
  { label: "Joint & Mobility", href: "/reviews?cat=joint", icon: "🦴" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--brand-gold)] mb-4 border border-[var(--brand-gold)]/40 px-3 py-1 rounded-sm">
            Independent Consumer Investigations
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Before You Buy,{" "}
            <span className="text-[var(--brand-gold)]">Know the Truth.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            We investigate dietary supplements so you don&apos;t have to. Every review
            follows a strict scientific methodology — ingredients, dosages, clinical
            evidence, and commercial claims, all scrutinized.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/reviews"
              className="bg-[var(--brand-gold)] text-[var(--brand-navy)] font-bold px-6 py-3 rounded hover:bg-[var(--brand-gold-light)] transition-colors text-sm tracking-wide uppercase"
            >
              Browse All Reviews
            </Link>
            <Link
              href="/scam-or-legit"
              className="border border-white/30 text-white px-6 py-3 rounded hover:bg-white/10 transition-colors text-sm tracking-wide uppercase"
            >
              Scam or Legit?
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[var(--brand-navy-mid)] text-white/60 py-3 px-4 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs tracking-wide">
          <span>📋 <strong className="text-white">50+</strong> Reviews Published</span>
          <span>🔬 <strong className="text-white">200+</strong> Ingredients Investigated</span>
          <span>📚 <strong className="text-white">Science-Backed</strong> Methodology</span>
          <span>🚫 <strong className="text-white">Zero</strong> Undisclosed Sponsorships</span>
        </div>
      </div>

      {/* Featured Reviews */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="text-2xl font-bold text-[var(--brand-navy)]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Latest Investigations
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Recently published independent product analyses
            </p>
          </div>
          <Link
            href="/reviews"
            className="text-sm text-[var(--brand-gold)] hover:underline font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((review) => (
            <Link key={review.slug} href={`/${review.slug}`} className="group">
              <Card className="h-full border hover:border-[var(--brand-gold)]/50 transition-all hover:shadow-md">
                {/* Category image placeholder */}
                <div className="h-40 bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-navy-mid)] rounded-t-lg flex items-center justify-center">
                  <span className="text-4xl opacity-30">🔍</span>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
                      {review.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">· {review.readTime}</span>
                  </div>
                  <h3
                    className="font-bold text-[var(--brand-navy)] group-hover:text-[var(--brand-gold)] transition-colors mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {review.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {review.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <VerdictBadge verdict={review.verdict} />
                    <RatingStars score={review.score} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[var(--brand-navy)] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-xl font-bold text-white text-center mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex flex-col items-center gap-2 bg-white/5 hover:bg-[var(--brand-gold)]/20 border border-white/10 hover:border-[var(--brand-gold)]/40 rounded-lg p-4 transition-all text-white/80 hover:text-white"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-medium text-center leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology teaser */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--brand-gold)] mb-3">
          Our Standard
        </span>
        <h2
          className="text-2xl font-bold text-[var(--brand-navy)] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          We Don&apos;t Cite Ingredient Studies as Product Proof
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
          Our reviews always distinguish between evidence for an isolated ingredient,
          evidence for the specific dosage used, and clinical evidence for the
          commercial product itself. When no sufficient evidence exists, we say so clearly.
        </p>
        <Link
          href="/methodology"
          className="inline-block border border-[var(--brand-navy)] text-[var(--brand-navy)] px-5 py-2.5 rounded text-sm font-semibold hover:bg-[var(--brand-navy)] hover:text-white transition-colors"
        >
          Read Our Full Methodology
        </Link>
      </section>
    </>
  );
}
