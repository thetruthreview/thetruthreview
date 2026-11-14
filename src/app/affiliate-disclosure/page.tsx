import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "The Truth Review affiliate disclosure and editorial independence policy.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1
        className="text-2xl font-black text-[var(--brand-navy)] mb-6"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Affiliate Disclosure
      </h1>
      <div className="space-y-4 text-sm leading-relaxed text-foreground">
        <p>
          The Truth Review participates in affiliate marketing programs. This means that when
          you click on certain product links and make a purchase, we may earn a commission.
          This comes at no additional cost to you.
        </p>
        <p>
          Affiliate partnerships may include but are not limited to ClickBank, ShareASale,
          Commission Junction, Amazon Associates, and direct manufacturer programs.
        </p>
        <p>
          <strong>Important:</strong> Our editorial decisions — including ratings, verdicts,
          and written conclusions — are never influenced by affiliate relationships. We review
          products based solely on ingredient analysis, available clinical evidence, company
          transparency, and consumer feedback.
        </p>
        <p>
          Products we rate poorly or flag as "Likely Scam" may still carry affiliate links,
          as we believe consumers deserve all relevant information while making informed choices.
        </p>
        <p>
          If you have questions about our affiliate policy or our review process, please
          contact us at <a href="mailto:editorial@thetruthrview.com" className="underline text-[var(--brand-gold)]">editorial@thetruthrview.com</a>.
        </p>
      </div>
    </div>
  );
}
