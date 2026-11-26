import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, organizationSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const DESCRIPTION =
  "Medical, FDA and affiliate disclosure for The Truth Review: we are not doctors, we do not sell these products, and we earn a commission on some of the links we publish.";

const UPDATED = "November 25, 2026";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer & Affiliate Disclosure",
  description: DESCRIPTION,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <JsonLd
        graph={[
          webPageSchema({
            path: "/disclaimer",
            name: "Disclaimer & Affiliate Disclosure",
            description: DESCRIPTION,
          }),
          organizationSchema(),
          breadcrumbSchema([["Disclaimer", "/disclaimer"]]),
        ]}
      />

      <div className="mb-8">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
          Legal
        </span>
        <h1
          className="text-3xl font-black text-[var(--brand-navy)] mt-1 mb-2"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Disclaimer &amp; Affiliate Disclosure
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {UPDATED}</p>
      </div>

      <div className="border-l-4 border-[var(--brand-gold)] bg-muted/40 rounded-r-lg p-5 mb-8">
        <p className="text-base leading-relaxed m-0">
          <strong>In short:</strong> we are a publication, not a clinic and not a shop. Nothing
          here is medical advice, and we earn a commission when you buy through some of our
          links — at no extra cost to you.
        </p>
      </div>

      <div className="prose text-lg leading-relaxed space-y-4 text-foreground">
        <h2 className="text-2xl font-black text-[var(--brand-navy)]">FDA statement</h2>
        <p>
          The statements on this website have not been evaluated by the Food and Drug
          Administration. The products discussed are dietary supplements and are{" "}
          <strong>not intended to diagnose, treat, cure or prevent any disease.</strong>
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Not medical advice</h2>
        <p>
          The Truth Review publishes general information and editorial opinion. We are not your
          doctor, we do not know your medical history, and nothing here is a diagnosis, a
          prescription or a treatment plan.
        </p>
        <p>
          Talk to a qualified healthcare professional before starting any supplement, especially
          if you take prescription medication, are pregnant or nursing, are under 18, are
          scheduled for surgery, or have a known medical condition. Never ignore or delay
          professional medical advice because of something you read here. If you think you are
          having a medical emergency, call your doctor or 911.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Affiliate disclosure</h2>
        <p>
          This disclosure is made in line with the Federal Trade Commission&apos;s Guides
          Concerning the Use of Endorsements and Testimonials in Advertising (16 CFR Part 255).
        </p>
        <p>
          <strong>We are paid a commission on some of the links on this site.</strong> When you
          click a product link and buy, the seller pays us a share of the sale. The price you pay
          is exactly the same as it would be if you went to the seller directly — the commission
          comes out of the seller&apos;s margin, not your pocket.
        </p>
        <p>
          Pages carrying those links are marked as advertising, and the links themselves are
          tagged as sponsored. We are an independent affiliate: we are not owned by, employed by
          or speaking for any manufacturer whose products we cover.
        </p>
        <p>
          A commercial relationship is a real conflict of interest, and pretending otherwise
          would be worse than disclosing it. Our rule is that the commission does not decide the
          conclusion. Read our{" "}
          <Link href="/methodology" className="underline text-[var(--brand-gold)]">
            methodology
          </Link>{" "}
          and judge for yourself whether we keep to it.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">We do not sell these products</h2>
        <p>
          We do not manufacture, stock, sell or ship anything. Purchases are made on the
          seller&apos;s own website, through its own checkout and retailer, under its own terms.
          Orders, shipping, refunds and money-back guarantees are handled entirely by the seller
          — see our{" "}
          <Link href="/contact" className="underline text-[var(--brand-gold)]">
            contact page
          </Link>{" "}
          for where to go.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Results vary</h2>
        <p>
          Supplements are not drugs, and they do not work the same way in every body. Any
          outcome described on this site is an individual experience, not a typical result and
          not a promise of what you will get. Where we cite research, the studies examine
          individual ingredients, usually at specific doses and in specific populations — they
          are background on the ingredient, not evidence of what a finished product will do for
          you.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Prices and formulas change</h2>
        <p>
          Prices, package options, bonuses, guarantee terms and even ingredient labels change
          without notice. We check them against the manufacturer&apos;s official page when we
          publish and when we update, but the seller&apos;s page is always the authority. Check
          it before you buy, and read the label on the bottle before you take anything.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Corrections</h2>
        <p>
          If something here is wrong, we want to know. Write to{" "}
          <a href="mailto:editorial@thetruthreview.com" className="underline text-[var(--brand-gold)]">
            editorial@thetruthreview.com
          </a>{" "}
          with the page and the problem, and we will check it against the source and correct it.
        </p>
      </div>
    </div>
  );
}
