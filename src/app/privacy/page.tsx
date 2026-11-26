import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, organizationSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const DESCRIPTION =
  "How The Truth Review handles your data: what we collect, the cookies and tracking we use, who we share data with, and the rights you have over your information.";

const UPDATED = "November 25, 2026";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: DESCRIPTION,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <JsonLd
        graph={[
          webPageSchema({
            path: "/privacy",
            name: "Privacy Policy",
            description: DESCRIPTION,
          }),
          organizationSchema(),
          breadcrumbSchema([["Privacy Policy", "/privacy"]]),
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
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {UPDATED}</p>
      </div>

      <div className="prose text-lg leading-relaxed space-y-4 text-foreground">
        <p>
          This policy explains what The Truth Review (&quot;we&quot;, &quot;us&quot;) collects
          when you visit thetruthreview.com, why we collect it, and what you can do about it. It
          applies to this website only, not to the websites of the brands we review.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">What we collect</h2>
        <p>
          <strong>We do not ask you to create an account</strong>, and this site has no login, no
          newsletter sign-up and no contact form. We therefore do not hold a database of names,
          addresses or payment details.
        </p>
        <p>What is collected happens automatically as you browse:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Server and usage data.</strong> Our hosting provider records standard web log
            information — IP address, browser and device type, the pages you request, the time of
            the request and the referring page.
          </li>
          <li>
            <strong>Click and conversion tracking.</strong> We use RootTracking to understand which
            pages lead to a click on an advertiser&apos;s link. It records the click and attributes
            it to this site.
          </li>
          <li>
            <strong>Advertising data.</strong> When you reach this site from an advertisement,
            the advertising platform — for example Google Ads — may set cookies or identifiers to
            measure the performance of that ad.
          </li>
          <li>
            <strong>Affiliate attribution.</strong> When you follow a link to an advertiser, that
            advertiser and its retailer set a cookie so any purchase is credited to us.
          </li>
        </ul>
        <p>
          If you email us, we keep your message and address for as long as we need to answer you
          and to maintain a record of corrections.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Why we collect it</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To keep the site running, secure and fast.</li>
          <li>To understand which reviews people read and which are useful.</li>
          <li>To measure advertising and to be credited for purchases we refer.</li>
          <li>To answer the messages you send us.</li>
        </ul>
        <p>
          <strong>We do not sell your personal information</strong>, and we do not share it with
          anyone except the service providers described below.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Who else is involved</h2>
        <p>
          Some data necessarily passes through companies that operate parts of this site or
          measure advertising. Each has its own privacy policy:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Vercel</strong> — hosting and delivery of the website.
          </li>
          <li>
            <strong>RootTracking</strong> — click and conversion attribution.
          </li>
          <li>
            <strong>Google</strong> — advertising and measurement, where we run ads.
          </li>
          <li>
            <strong>Advertisers and their retailers</strong> (for example BuyGoods) — attribution
            of referred purchases.
          </li>
          <li>
            <strong>Google Fonts</strong> — the typefaces used on our landing pages are requested
            from Google&apos;s servers, which means your IP address reaches them.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">
          Leaving this site
        </h2>
        <p>
          When you click a product link you leave The Truth Review and arrive at a website we do
          not control. Anything you enter there — your name, address or payment details — goes to
          that company, under its own privacy policy, and never passes through us. We never see
          or store payment information.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Cookies and how to refuse them</h2>
        <p>
          You can block or delete cookies in your browser settings, and you can use your
          browser&apos;s &quot;do not track&quot; or private browsing modes. Blocking cookies does
          not stop you reading anything on this site; it may stop a purchase being credited to us,
          which costs us a commission but costs you nothing.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Your rights</h2>
        <p>
          Depending on where you live, you may have the right to ask what personal information we
          hold about you, to have it corrected or deleted, and to object to certain uses. If you
          are in California, that includes the rights given by the CCPA/CPRA — including the right
          to know, to delete and to opt out of &quot;sale&quot; or &quot;sharing&quot; of personal
          information. We do not sell or share personal information as those terms are defined.
          If you are in the European Economic Area or the United Kingdom, it includes the rights
          given by the GDPR.
        </p>
        <p>
          To exercise any of these, write to{" "}
          <a href="mailto:contact@thetruthreview.com" className="underline text-[var(--brand-gold)]">
            contact@thetruthreview.com
          </a>
          . We may need to ask you for information to confirm who you are before we act.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Children</h2>
        <p>
          This site is intended for adults. We do not knowingly collect information from anyone
          under 18. If you believe a child has sent us personal information, write to us and we
          will delete it.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Changes</h2>
        <p>
          If we change how we handle data, we will update this page and the date at the top. The
          version published here is the one in force.
        </p>

        <h2 className="text-2xl font-black text-[var(--brand-navy)]">Contact</h2>
        <p>
          Questions about this policy go to{" "}
          <a href="mailto:contact@thetruthreview.com" className="underline text-[var(--brand-gold)]">
            contact@thetruthreview.com
          </a>
          , or see the{" "}
          <Link href="/contact" className="underline text-[var(--brand-gold)]">
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
