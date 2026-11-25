import { VerdictBadge } from "@/components/verdict-badge";
import { RatingStars } from "@/components/rating-stars";

type Verdict = "legit" | "scam" | "mixed" | "inconclusive";

export interface ReviewData {
  title: string;
  productName: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  verdict: Verdict;
  overallScore: number;
  productImage?: string;
  labelImage?: string;
  scores: {
    ingredients: number;
    evidence: number;
    safety: number;
    value: number;
    transparency: number;
  };
  summary: string;
  /** Search-result description (~150 chars). Falls back to summary. */
  metaDescription?: string;
  verdictHeadline?: string;
  sections: {
    introduction: string;
    companyClaims: string[];
    companyClaimsBody?: string;
    ingredientsIntro?: string;
    ingredientsLeadIn?: string;
    factOrFiction: Array<{ claim: string; verdict: "true" | "false" | "partially-true" | "unverified"; explanation: string }>;
    ingredients: Array<{ name: string; dosage: string; purpose: string; evidence: string; rating: "strong" | "moderate" | "weak" | "none" }>;
    clinicalEvidence: string;
    safety: string;
    customerReviews: string;
    pricing: string;
    pros: string[];
    cons: string[];
    finalVerdict: string;
  };
  reviewsData?: {
    aggregate: number;
    distribution: { stars: number; pct: number }[];
    aggregateNote?: string;
    cards?: { initials: string; name: string; meta: string; stars: number; text: string }[];
    disclaimer?: string;
  };
  affiliateLink?: string;
}

const evidenceLabels: Record<string, { label: string; color: string }> = {
  strong: { label: "Strong Evidence", color: "text-green-700 bg-green-50 border-green-200" },
  moderate: { label: "Moderate Evidence", color: "text-blue-700 bg-blue-50 border-blue-200" },
  weak: { label: "Weak Evidence", color: "text-blue-700 bg-blue-50 border-blue-200" },
  none: { label: "No Evidence", color: "text-red-700 bg-red-50 border-red-200" },
};

const claimVerdictConfig = {
  "true": { label: "Supported", color: "text-green-700 bg-green-50 border-green-200", icon: "/icons/check.png" },
  "false": { label: "Not Supported", color: "text-red-700 bg-red-50 border-red-200", icon: "/icons/cross.png" },
  "partially-true": { label: "Partially Supported", color: "text-yellow-700 bg-yellow-50 border-yellow-200", icon: "/icons/warning.png" },
  "unverified": { label: "Unverified", color: "text-gray-600 bg-gray-50 border-gray-200", icon: "/icons/warning.png" },
};

const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

function SectionHeader({ number, title, id }: { number: string; title: string; id: string }) {
  return (
    <div id={id} className="flex items-start gap-4 mb-4 scroll-mt-6">
      <span className="text-3xl font-black text-[var(--brand-gold)]/40 leading-none mt-1 font-mono">
        {number}
      </span>
      <h2
        className="text-2xl font-bold text-[var(--brand-navy)] border-b-2 border-[var(--brand-gold)] pb-1 flex-1"
        style={serif}
      >
        {title}
      </h2>
    </div>
  );
}

function Prose({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((para, i) => (
        <p key={i} className="text-lg leading-relaxed mb-4 last:mb-0">
          {para}
        </p>
      ))}
    </>
  );
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-[var(--brand-navy)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={i}
          href={link[2]}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-[var(--brand-gold)] underline hover:text-[var(--brand-navy)]"
        >
          {link[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Lightweight renderer: `### heading`, `* bullet` lists, `**bold**`, and paragraphs.
function RichText({ text }: { text: string }) {
  const blocks = text.split("\n\n");
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-bold text-[var(--brand-navy)] mt-6" style={serif}>
              {block.replace(/^###\s+/, "")}
            </h3>
          );
        }
        if (lines.every((l) => l.trim().startsWith("* "))) {
          return (
            <ul key={i} className="space-y-2">
              {lines.map((l, j) => (
                <li key={j} className="flex items-start gap-2 text-lg leading-relaxed">
                  <span className="text-[var(--brand-gold)] font-bold mt-0.5">›</span>
                  <span>{renderInline(l.trim().replace(/^\*\s+/, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }
        const subLines = block.split("\n");
        return (
          <p key={i} className="text-lg leading-relaxed">
            {subLines.map((line, j) => (
              <span key={j}>
                {renderInline(line)}
                {j < subLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

function SmallStars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 shrink-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-[var(--brand-gold)]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function CtaButton({ href }: { href?: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer sponsored"
      className="inline-block bg-[var(--brand-gold)] text-white font-bold px-6 py-3 rounded hover:bg-[var(--brand-gold-light)] transition-colors"
    >
      Check Current Price
    </a>
  );
}

const scoreCards: Array<{ key: keyof ReviewData["scores"]; label: string }> = [
  { key: "ingredients", label: "Ingredients" },
  { key: "evidence", label: "Clinical Evidence" },
  { key: "safety", label: "Safety" },
  { key: "value", label: "Price & Value" },
];

export function ReviewTemplate({ review }: { review: ReviewData }) {
  const { sections } = review;
  const stars5 = review.overallScore.toFixed(1);
  const colonIndex = review.title.indexOf(":");
  const titleParts =
    colonIndex === -1
      ? { lead: review.title, highlight: "" }
      : {
          lead: review.title.slice(0, colonIndex + 1),
          highlight: review.title.slice(colonIndex + 1).trim(),
        };
  return (
    <article>
      {/* Hero */}
      <section className="bg-white border-b pt-10 pb-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-stretch">
          {/* Product image */}
          <div className="md:col-span-2 flex items-center justify-center">
            {review.productImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={review.productImage} alt={review.productName} className="w-full h-auto object-contain" />
            ) : (
              <div className="text-muted-foreground text-sm text-center px-4">
                {review.productName}
                <br />product image
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase text-[var(--brand-gold)] bg-[var(--brand-gold)]/10 px-3 py-1 rounded-full mb-3">
              Review &amp; Analysis
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight text-[var(--brand-navy)] mb-4" style={serif}>
              {titleParts.lead}
              {titleParts.highlight && (
                <>
                  {" "}
                  <span className="text-[var(--brand-gold)]">{titleParts.highlight}</span>
                </>
              )}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <RatingStars score={review.overallScore} hideValue />
              <span className="text-2xl font-black text-[var(--brand-navy)]" style={serif}>
                {stars5} <span className="text-base font-semibold text-muted-foreground">of 10</span>
              </span>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">{review.summary}</p>

            <CtaButton href={review.affiliateLink} />
            <p className="text-xs text-muted-foreground mt-3">
              Editorial rating by {review.author} · {review.publishedAt}
            </p>
          </div>
        </div>
      </section>

      {/* Score cards */}
      <section className="max-w-5xl mx-auto px-4 mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {scoreCards.map((c) => (
            <div key={c.key} className="bg-white rounded-lg shadow-lg border-t-4 border-[var(--brand-gold)] p-5 text-center">
              <div className="text-3xl font-black text-[var(--brand-navy)]" style={serif}>
                {review.scores[c.key]}<span className="text-sm text-muted-foreground">/10</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-1">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <section className="mb-10">
          <SectionHeader id="introduction" number="01" title="Introduction" />
          <Prose text={sections.introduction} />
        </section>

        <section className="mb-10">
          <SectionHeader id="claims" number="02" title="What Does the Company Claim?" />
          {sections.companyClaimsBody ? (
            <RichText text={sections.companyClaimsBody} />
          ) : (
            <ul className="space-y-2">
              {sections.companyClaims.map((claim, i) => (
                <li key={i} className="flex items-start gap-2 text-lg leading-relaxed">
                  <span className="text-[var(--brand-gold)] font-bold">›</span>
                  <span>{claim}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mb-10">
          <SectionHeader id="fact-or-fiction" number="03" title="Fact or Fiction?" />
          <div className="space-y-3">
            {sections.factOrFiction.map((item, i) => (
              <div key={i} className="border rounded-lg p-4 bg-white flex items-start gap-4">
                <div className="flex-1">
                  <span className="block text-lg font-semibold text-[var(--brand-navy)] mb-1">
                    &ldquo;{item.claim}&rdquo;
                  </span>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.explanation}</p>
                </div>
                <div className="flex flex-col items-center gap-1 shrink-0 w-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={claimVerdictConfig[item.verdict].icon}
                    alt={claimVerdictConfig[item.verdict].label}
                    className="w-12 h-12"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-center text-muted-foreground leading-tight">
                    {claimVerdictConfig[item.verdict].label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeader id="ingredients" number="04" title="Ingredient Deep Dive" />
          {sections.ingredientsIntro && (
            <div className="mb-6">
              <Prose text={sections.ingredientsIntro} />
            </div>
          )}
          {review.labelImage && (
            <figure className="mb-6 border rounded-lg overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={review.labelImage} alt={`${review.productName} supplement facts label`} className="w-full h-auto" />
              <figcaption className="text-sm text-muted-foreground px-4 py-2 border-t bg-slate-50">
                The official {review.productName} Supplement Facts label.
              </figcaption>
            </figure>
          )}
          {sections.ingredientsLeadIn && (
            <div className="mb-6">
              <Prose text={sections.ingredientsLeadIn} />
            </div>
          )}
          <div className="space-y-4">
            {sections.ingredients.map((ing, i) => (
              <div key={i} className="border rounded-lg p-4 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <span className="text-lg font-bold text-[var(--brand-navy)]">{ing.name}</span>
                    <span className="text-base text-muted-foreground ml-2">({ing.dosage})</span>
                  </div>
                  <span className={`text-xs font-bold tracking-wide uppercase border px-2 py-0.5 rounded-sm ${evidenceLabels[ing.rating].color}`}>
                    {evidenceLabels[ing.rating].label}
                  </span>
                </div>
                <p className="text-base text-muted-foreground mb-1"><strong>Purpose:</strong> {ing.purpose}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{ing.evidence}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeader id="clinical-evidence" number="05" title="Clinical Evidence" />
          <RichText text={sections.clinicalEvidence} />
        </section>

        <section className="mb-10">
          <SectionHeader id="safety" number="06" title="Safety & Side Effects" />
          <Prose text={sections.safety} />
        </section>

        <section className="mb-10">
          <SectionHeader id="customer-reviews" number="07" title="Customer Reviews & Complaints" />
          <div className="mb-6">
            <Prose text={sections.customerReviews} />
          </div>

          {review.reviewsData && (
            <>
              {/* Aggregate block */}
              <div className="border rounded-xl p-6 bg-white mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-center">
                  <div className="text-center sm:pr-6 sm:border-r">
                    <div className="text-5xl font-black text-[var(--brand-navy)]" style={serif}>
                      {review.reviewsData.aggregate.toFixed(1)}
                    </div>
                    <div className="my-2 flex justify-center">
                      <SmallStars count={Math.round(review.reviewsData.aggregate)} />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.reviewsData.aggregateNote ?? "Based on aggregated public ratings"}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {review.reviewsData.distribution.map((d) => (
                      <div key={d.stars} className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground w-8 shrink-0">{d.stars}★</span>
                        <div className="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                          <div className="h-full bg-[var(--brand-gold)] rounded-full" style={{ width: `${d.pct}%` }} />
                        </div>
                        <span className="text-sm text-muted-foreground w-10 text-right shrink-0">{d.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review cards */}
              {review.reviewsData.cards && review.reviewsData.cards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {review.reviewsData.cards.map((c, i) => (
                  <div key={i} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-full bg-[var(--brand-navy)] text-[var(--brand-gold)] flex items-center justify-center text-sm font-bold shrink-0">
                        {c.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[var(--brand-navy)] text-sm leading-tight">{c.name}</div>
                        <div className="text-[11px] text-muted-foreground">{c.meta}</div>
                      </div>
                      <SmallStars count={c.stars} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>
              )}

              {review.reviewsData.disclaimer && (
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  {review.reviewsData.disclaimer}
                </p>
              )}
            </>
          )}
        </section>

        <section className="mb-10">
          <SectionHeader id="pricing" number="08" title="Pricing & Refund Policy" />
          <RichText text={sections.pricing} />
        </section>

        <section className="mb-10">
          <SectionHeader id="pros-cons" number="09" title="Pros & Cons" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-base uppercase tracking-wide">Pros</h3>
              <ul className="space-y-2">
                {sections.pros.map((p, i) => (
                  <li key={i} className="text-lg text-green-700 leading-relaxed">+ {p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-3 text-base uppercase tracking-wide">Cons</h3>
              <ul className="space-y-2">
                {sections.cons.map((c, i) => (
                  <li key={i} className="text-lg text-red-700 leading-relaxed">– {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <SectionHeader id="final-verdict" number="10" title="Final Verdict" />
          <div className="bg-[var(--brand-navy)] text-white rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <VerdictBadge verdict={review.verdict} />
              <RatingStars score={review.overallScore} />
            </div>
            <p className="text-lg text-white/80 leading-relaxed mb-4">{sections.finalVerdict}</p>
            <CtaButton href={review.affiliateLink} />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            This review contains affiliate links. We may earn a commission at no extra cost to you.
            Our verdicts are not influenced by commissions.
          </p>
        </section>
      </div>
    </article>
  );
}
