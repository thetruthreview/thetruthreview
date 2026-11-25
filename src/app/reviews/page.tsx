import type { Metadata } from "next";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { investigations } from "@/lib/investigations";

const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

const REVIEWS_DESCRIPTION =
  "Independent dietary supplement reviews from The Truth Review: ingredients, label, evidence, price and guarantee, analyzed before you buy.";

export const metadata: Metadata = pageMetadata({
  title: "Supplement Reviews",
  description: REVIEWS_DESCRIPTION,
  path: "/reviews",
});

export default function ReviewsIndexPage() {
  return (
    <Container className="py-10">
      <JsonLd
        graph={[
          webPageSchema({ type: "CollectionPage", path: "/reviews", name: "Supplement Reviews", description: REVIEWS_DESCRIPTION }),
          breadcrumbSchema([["Reviews", "/reviews"]]),
          {
            "@type": "ItemList",
            name: "Supplement reviews",
            itemListElement: investigations.map((inv, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: inv.title,
              url: absoluteUrl(inv.href),
            })),
          },
        ]}
      />

      <div className="mb-8 border-b pb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
          Independent Investigations
        </span>
        <h1 className="text-3xl font-black text-[var(--brand-navy)] mt-1 mb-2" style={serif}>
          Supplement Reviews
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Our latest supplement investigations: what is in the formula, what the label says and
          what you should know before you order.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {investigations.map((inv) => (
          // Plain <a>: /breathizen is a static HTML page outside the Next.js router.
          <a
            key={inv.href}
            href={inv.href}
            className="group border rounded-lg overflow-hidden hover:border-[var(--brand-gold)]/60 hover:shadow-md transition-all bg-white flex flex-col"
          >
            <div className="bg-[var(--brand-navy)]/5 flex items-center justify-center p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={inv.image} alt={inv.imageAlt} width={220} height={220} loading="lazy" className="h-44 w-auto object-contain" />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)] mb-1">
                {inv.category}
              </span>
              <h2 className="font-bold text-lg text-[var(--brand-navy)] group-hover:text-[var(--brand-gold)] transition-colors mb-2 leading-snug" style={serif}>
                {inv.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{inv.summary}</p>
              <span className="text-sm font-semibold text-[var(--brand-navy)]">Read the review →</span>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
