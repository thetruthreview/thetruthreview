import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, organizationSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const DESCRIPTION =
  "The terms that govern your use of The Truth Review: what the site is, what it is not, our affiliate relationships, and the limits of our liability.";

const UPDATED = "November 25, 2026";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: DESCRIPTION,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <JsonLd
        graph={[
          webPageSchema({
            path: "/terms",
            name: "Terms of Use",
            description: DESCRIPTION,
          }),
          organizationSchema(),
          breadcrumbSchema([["Terms of Use", "/terms"]]),
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
          Terms of Use
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {UPDATED}</p>
      </div>

      <div className="prose text-lg leading-relaxed space-y-4 text-foreground">
        <p>
          These terms govern your use of thetruthreview.com. By using the site you accept them.
          If you do not accept them, please do not use the site.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">1. What this site is</h2>
        <p>
          The Truth Review is an independent consumer publication that writes about dietary
          supplements. Everything here is general information and editorial opinion. It is not
          medical advice, not a diagnosis and not a substitute for talking to a qualified
          healthcare professional. See our{" "}
          <Link href="/disclaimer" className="underline text-[var(--brand-gold)]">
            disclaimer
          </Link>{" "}
          for the full statement.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">2. We do not sell anything</h2>
        <p>
          We do not manufacture, distribute, sell or ship any product described on this site, and
          we are not the agent of any brand. Every purchase is a contract between you and the
          seller, on the seller&apos;s own terms. Orders, payment, delivery, refunds and the
          money-back guarantee are the seller&apos;s responsibility, not ours.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">3. Affiliate relationships</h2>
        <p>
          We earn commissions from some of the links on this site. If you buy through one of
          them, we may be paid by the seller at no additional cost to you. This is disclosed on
          the pages where it applies, and it does not change the price you pay. Our{" "}
          <Link href="/disclaimer" className="underline text-[var(--brand-gold)]">
            disclaimer
          </Link>{" "}
          explains the arrangement in full.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">4. Accuracy</h2>
        <p>
          We take care to describe products accurately, using the manufacturer&apos;s own label
          and official sales page as the source. Even so, formulas, labels, prices, packages and
          guarantee terms change without notice, and a page may be out of date by the time you
          read it. <strong>Always check the current details on the seller&apos;s page before you
          buy</strong>, and read the product label before you use anything. If you find an error
          here, tell us at{" "}
          <Link href="/contact" className="underline text-[var(--brand-gold)]">
            our contact page
          </Link>{" "}
          and we will correct it.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">5. Links to other sites</h2>
        <p>
          This site links to websites we do not control. We are not responsible for their
          content, their products or their privacy practices, and a link is not an endorsement of
          everything on the other side of it.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">6. Our content</h2>
        <p>
          The text, layout and original graphics on this site belong to The Truth Review. You may
          read, print and share pages for your own personal use, and you may quote us with
          attribution and a link. You may not republish our content in bulk, or present it as
          your own, without written permission. Product names, logos, labels and packaging shots
          belong to their respective owners and are used to identify the products discussed.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">7. No warranty</h2>
        <p>
          The site is provided &quot;as is&quot; and &quot;as available&quot;. We do not warrant
          that it will be uninterrupted, error-free, or that the information on it is complete or
          current.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, The Truth Review is not liable for any indirect
          or consequential loss arising from your use of this site, from reliance on anything
          published here, or from any product you buy from a third party after reading about it
          here. Nothing in these terms limits liability that cannot be limited by law.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">9. Changes</h2>
        <p>
          We may update these terms. The version published on this page is the one in force, and
          the date at the top shows when it last changed.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">10. Governing law</h2>
        <p>
          These terms are governed by the laws of the United States and of the state in which The
          Truth Review operates, without regard to conflict-of-law rules.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">11. Contact</h2>
        <p>
          Questions about these terms go to{" "}
          <a href="mailto:contact@thetruthreview.com" className="underline text-[var(--brand-gold)]">
            contact@thetruthreview.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
