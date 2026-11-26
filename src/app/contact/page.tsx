import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, organizationSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const DESCRIPTION =
  "How to reach The Truth Review: editorial questions, corrections, product suggestions and business enquiries, plus where to go for help with an order you placed.";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: DESCRIPTION,
  path: "/contact",
});

const CONTACT_EMAIL = "contact@thetruthreview.com";
const EDITORIAL_EMAIL = "editorial@thetruthreview.com";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <JsonLd
        graph={[
          webPageSchema({
            type: "ContactPage",
            path: "/contact",
            name: "Contact The Truth Review",
            description: DESCRIPTION,
          }),
          {
            ...organizationSchema(),
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: CONTACT_EMAIL,
              availableLanguage: "English",
            },
          },
          breadcrumbSchema([["Contact Us", "/contact"]]),
        ]}
      />

      <div className="mb-8">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
          Get in Touch
        </span>
        <h1
          className="text-3xl font-black text-[var(--brand-navy)] mt-1 mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground">
          We read every message. Please use the address that matches your question — it is the
          fastest way to get a useful answer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="border rounded-lg p-5">
          <div className="text-2xl mb-2">✉️</div>
          <h2 className="font-semibold text-[var(--brand-navy)] mb-1">General enquiries</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Questions about the site, partnership and advertising enquiries, or anything that
            does not fit the categories below.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-[var(--brand-gold)] break-all">
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="border rounded-lg p-5">
          <div className="text-2xl mb-2">📝</div>
          <h2 className="font-semibold text-[var(--brand-navy)] mb-1">Editorial &amp; corrections</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Spotted a factual error, an outdated price or a label that has changed? Tell us which
            page and what is wrong, and we will check it against the source.
          </p>
          <a href={`mailto:${EDITORIAL_EMAIL}`} className="underline text-[var(--brand-gold)] break-all">
            {EDITORIAL_EMAIL}
          </a>
        </div>
      </div>

      <div className="prose text-lg leading-relaxed space-y-4 text-foreground">
        <h2 className="text-2xl font-black text-[var(--brand-navy)]">
          If you have already placed an order
        </h2>
        <p>
          <strong>We cannot help with orders, shipping, refunds or cancellations.</strong> The
          Truth Review is an independent publication. We do not manufacture, sell, ship or
          process payment for any of the products we write about, and we have no access to
          customer accounts or order records.
        </p>
        <p>
          Every product reviewed here is sold by the brand through its own checkout, which is
          handled by a third-party retailer such as BuyGoods. Support for an order — including
          the money-back guarantee — goes through the seller, using the contact details on your
          order confirmation email and on the receipt. Those details are also printed on the
          product label and on the brand&apos;s own website.
        </p>
        <p>
          Writing to us instead will only delay you, because we have no way to look up or change
          an order. If you cannot find the seller&apos;s contact details, write to us and we will
          point you to them.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Response times</h2>
        <p>
          We aim to answer within two business days. Corrections are prioritised: if you report
          something that turns out to be wrong on a review page, we fix the page first and reply
          afterwards.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Medical questions</h2>
        <p>
          We are not able to give medical advice, and we will not tell you whether a supplement
          is right for your health situation. That conversation belongs with your doctor or
          pharmacist, who knows your history and your medication. See our{" "}
          <Link href="/disclaimer" className="underline text-[var(--brand-gold)]">
            disclaimer
          </Link>{" "}
          for the full position.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">How we work</h2>
        <p>
          If you want to know how we evaluate a product before writing about it, our{" "}
          <Link href="/methodology" className="underline text-[var(--brand-gold)]">
            methodology
          </Link>{" "}
          sets out the framework, and{" "}
          <Link href="/about" className="underline text-[var(--brand-gold)]">
            about us
          </Link>{" "}
          explains who we are and how the site is funded.
        </p>
      </div>
    </div>
  );
}
