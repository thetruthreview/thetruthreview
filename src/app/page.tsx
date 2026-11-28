import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { investigations } from "@/lib/investigations";
import { absoluteUrl, organizationSchema, pageMetadata, webPageSchema, websiteSchema } from "@/lib/seo";

const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

const pillars = [
  { title: "Ingredient analysis", text: "Every ingredient checked for purpose, dosage and evidence quality." },
  { title: "Scientific evidence", text: "Human studies only. Ingredient evidence is never passed off as product proof." },
  { title: "Honest verdict", text: "A clear conclusion, including when the evidence simply isn't there." },
];

const HOME_TITLE = "The Truth Review: Independent Supplement Reviews & Investigations";
const HOME_DESCRIPTION =
  "Independent dietary supplement reviews: we check every ingredient, dosage and clinical study behind the sales page, so you know the truth before you buy.";

export const metadata: Metadata = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

/** The newest reviews, shown as cards. The rest are reachable by concern below. */
const latest = investigations.slice(0, 6);

/**
 * Every review grouped by the concern that brings people here, biggest group
 * first. Built from the data so a new page appears without touching this file.
 */
const byConcern = Object.values(
  investigations.reduce<Record<string, { category: string; items: typeof investigations }>>((acc, inv) => {
    acc[inv.category] ??= { category: inv.category, items: [] };
    acc[inv.category].items.push(inv);
    return acc;
  }, {}),
).sort((a, b) => b.items.length - a.items.length || a.category.localeCompare(b.category));

/**
 * Card and list labels use the product, not the headline.
 * "BreathiZen Review: Ingredients, Price & Where to Buy" -> "BreathiZen"
 * "Prevagen Review (2026): Is It Worth the Hype…"        -> "Prevagen"
 */
const productName = (title: string) => title.split(/ Review\b/)[0];

export default function HomePage() {
  return (
    <>
      <JsonLd
        graph={[
          websiteSchema(),
          organizationSchema(),
          webPageSchema({ path: "/", name: HOME_TITLE, description: HOME_DESCRIPTION }),
          {
            "@type": "ItemList",
            name: "Latest supplement investigations",
            itemListElement: latest.map((inv, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: inv.title,
              url: absoluteUrl(inv.href),
            })),
          },
        ]}
      />

      <section className="bg-[var(--brand-navy)] text-white pb-28 pt-16 px-4">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-gold)]">
            Independent Supplement Investigations
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mt-3 mb-4" style={serif}>
            Before You Buy,{" "}
            <span className="text-[var(--brand-gold)]">Know the Truth.</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
            We investigate dietary supplements so you don&apos;t have to: ingredients, dosages,
            clinical evidence and the claims behind the sales page.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="/reviews"
              className="inline-block bg-[var(--brand-gold)] text-[var(--brand-navy)] px-6 py-3 rounded font-bold hover:brightness-110 transition"
            >
              Browse all {investigations.length} reviews
            </a>
            <a
              href="#concerns"
              className="inline-block border border-white/40 text-white px-6 py-3 rounded font-semibold hover:bg-white/10 transition"
            >
              Find one for my concern
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-lg shadow-lg border-t-4 border-[var(--brand-gold)] p-6 text-center">
              <h2 className="text-lg font-bold text-[var(--brand-navy)] mb-2" style={serif}>{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pt-14 pb-4">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6 border-b pb-4">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
              Fresh off the label
            </span>
            <h2 className="text-2xl font-bold text-[var(--brand-navy)] mt-1" style={serif}>
              Latest Investigations
            </h2>
          </div>
          <a href="/reviews" className="text-sm font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-gold)] transition-colors">
            See all reviews →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((inv) => (
            // Plain <a>: landing pages like /breathizen are static HTML outside the Next.js router.
            <a
              key={inv.href}
              href={inv.href}
              className="group border rounded-lg overflow-hidden hover:border-[var(--brand-gold)]/60 hover:shadow-md transition-all bg-white flex flex-col"
            >
              <div className="bg-[var(--brand-navy)]/5 flex items-center justify-center p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={inv.image} alt={inv.imageAlt} width={220} height={220} loading="lazy" className="h-36 w-auto object-contain" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)] mb-1">
                  {inv.category}
                </span>
                <h3 className="font-bold text-[var(--brand-navy)] group-hover:text-[var(--brand-gold)] transition-colors mb-3 leading-snug" style={serif}>
                  {productName(inv.title)}
                </h3>
                <span className="text-sm font-semibold text-[var(--brand-navy)] mt-auto">Read the review →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="concerns" className="bg-[var(--brand-navy)]/[0.03] border-y mt-14">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
              Start with the problem
            </span>
            <h2 className="text-2xl font-bold text-[var(--brand-navy)] mt-1 mb-2" style={serif}>
              Browse by Health Concern
            </h2>
            <p className="text-muted-foreground">
              Most people arrive with a complaint rather than a product name. Pick the one that
              sounds like you and read what is actually on the label.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {byConcern.map((group) => (
              <div key={group.category} className="bg-white border rounded-lg p-5">
                <h3 className="font-bold text-[var(--brand-navy)] mb-3 text-sm uppercase tracking-wide">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((inv) => (
                    <li key={inv.href}>
                      <a
                        href={inv.href}
                        className="text-[var(--brand-navy)] hover:text-[var(--brand-gold)] transition-colors text-[15px]"
                      >
                        {productName(inv.title)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
              How we work
            </span>
            <h2 className="text-2xl font-bold text-[var(--brand-navy)] mt-1 mb-3" style={serif}>
              We Read the Label, Not the Sales Page
            </h2>
            <p className="text-muted-foreground mb-4">
              Every review here starts with a photograph of the Supplement Facts panel. We write the
              ingredients from what is printed on the bottle, take the prices from the checkout the
              order link actually reaches, and quote the guarantee in the brand&apos;s own terms.
            </p>
            <p className="text-muted-foreground mb-5">
              When we cite research, it is about an individual ingredient and it says so. An
              ingredient study is never presented as proof of what a finished product will do for
              you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/methodology" className="text-sm font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-gold)] transition-colors">
                Our methodology →
              </a>
              <a href="/about" className="text-sm font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-gold)] transition-colors">
                Who we are →
              </a>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              ["The label, photographed", "The Supplement Facts panel appears on every review, so you can read it yourself."],
              ["Prices from the checkout", "Taken from the page the order link reaches, not from the headline on the sales page."],
              ["Plain-language safety notes", "Caffeine, allergens, and when a conversation with your doctor comes first."],
              ["A clear editorial score", "Ingredients, safety, value and label transparency, each scored and shown."],
            ].map(([title, text]) => (
              <li key={title} className="flex gap-3">
                <span aria-hidden="true" className="text-[var(--brand-gold)] font-black mt-0.5">✓</span>
                <div>
                  <strong className="text-[var(--brand-navy)] block text-[15px]">{title}</strong>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--brand-navy)] text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-3" style={serif}>
            {investigations.length} supplements, read label by label
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Ingredients, prices, bonuses and guarantees — checked against the bottle and the
            official checkout before you spend a penny.
          </p>
          <a
            href="/reviews"
            className="inline-block bg-[var(--brand-gold)] text-[var(--brand-navy)] px-6 py-3 rounded font-bold hover:brightness-110 transition"
          >
            Browse all reviews
          </a>
        </div>
      </section>
    </>
  );
}
