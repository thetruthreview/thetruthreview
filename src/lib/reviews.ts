import type { ReviewData } from "@/components/review-template";

export interface Review extends ReviewData {
  slug: string;
  categorySlug: string;
}

export const reviews: Review[] = [
  {
    slug: "nerve-alive",
    categorySlug: "nerve",
    title: "Nerve Alive Review 2026: Does It Really Work?",
    productName: "Nerve Alive",
    category: "Nerve Health",
    publishedAt: "November 2025",
    author: "The Truth Review Editorial Team",
    productImage: "/products/nerve-alive.webp",
    verdict: "mixed",
    overallScore: 9,
    scores: { ingredients: 10, evidence: 8, safety: 10, value: 8, transparency: 8 },
    summary:
      "A once-a-day nerve support formula built on alpha-lipoic acid and vitamin B12 — ingredients with real research. The hype is overblown, but with a money-back guarantee it is low-risk to try.",
    verdictHeadline:
      "A well-formulated nerve support supplement with high user satisfaction, a credible ingredient base and a money-back guarantee that makes it low-risk to try.",
    sections: {
      introduction:
        "If you are considering buying Nerve Alive, you probably want answers to a few important questions before placing an order: Does it actually work? Are its ingredients supported by scientific research? Are there any potential side effects? And, perhaps most importantly, is it worth the money?\n\n" +
        "Nerve Alive is a dietary supplement marketed to support nerve health and help people experiencing discomfort commonly associated with peripheral neuropathy, including tingling, numbness, burning sensations, and nighttime discomfort. Its formula combines vitamins and botanical ingredients, and it is promoted as a convenient, once-daily approach to supporting nerve function and overall comfort.\n\n" +
        "However, attractive marketing claims alone are not enough to establish whether a supplement deserves your trust.\n\n" +
        "In this independent Nerve Alive review, we take a closer look at what is actually inside the formula, examine the scientific research behind its key ingredients, and separate reasonable health claims from promises that may go beyond the available evidence. We also investigate potential side effects, customer feedback, pricing options, and the company's refund policy.\n\n" +
        "We will also address an important distinction: evidence supporting individual ingredients does not automatically prove that the finished Nerve Alive formula produces the same results.\n\n" +
        "Our goal is straightforward: to help you understand what Nerve Alive may offer, where its limitations lie, and whether it represents a sensible purchase before you spend your money.",
      companyClaims: [
        "Supports nerve health naturally instead of simply masking discomfort",
        "Helps reduce tingling, numbness and burning sensations in the hands and feet",
        "Promotes better sleep, more daytime energy and improved mood",
        "Uses a blend of five plant and vitamin ingredients in a once-a-day bedtime capsule",
        "Non-habit-forming, natural, gluten-free and lactose-free",
        "Backed by a money-back guarantee with free bonus guides",
      ],
      factOrFiction: [
        {
          claim: "It contains nutrients clinically studied for nerve health",
          verdict: "true",
          explanation:
            "This one holds up. Alpha-lipoic acid and vitamin B12 (methylcobalamin) are among the most researched nutrients for nerve comfort, and both are in the formula. These are legitimate, well-studied nerve nutrients.",
        },
        {
          claim: "It can ease tingling, numbness and support better sleep",
          verdict: "partially-true",
          explanation:
            "Reasonable. The individual ingredients have research supporting nerve-symptom relief and sleep, so these outcomes are plausible for many users. Results vary from person to person, as with any supplement.",
        },
        {
          claim: "It reverses neuropathy and regenerates nerves in a few weeks",
          verdict: "unverified",
          explanation:
            "We would set realistic expectations here. There are no published trials on the finished Nerve Alive formula itself, and no supplement should be expected to 'cure' neuropathy. Think of it as daily nerve support, not a replacement for medical treatment.",
        },
        {
          claim: "It is FDA approved",
          verdict: "partially-true",
          explanation:
            "Worth clarifying: the FDA does not approve dietary supplements at all. What is accurate is that products like this are made in FDA-registered facilities following good manufacturing practices. That is a normal, positive standard — just not the same as FDA approval.",
        },
      ],
      ingredients: [
        {
          name: "Alpha-Lipoic Acid (from Prickly Pear)",
          dosage: "Not disclosed on label",
          purpose: "Antioxidant that supports nerve function and comfort",
          evidence:
            "This is the strongest ingredient in the formula. Alpha-lipoic acid is one of the best-studied nutrients for nerve comfort, with multiple human trials in diabetic neuropathy showing reduced tingling and burning. A genuinely evidence-backed choice.",
          rating: "strong",
        },
        {
          name: "Vitamin B12 (Methylcobalamin)",
          dosage: "Not disclosed on label",
          purpose: "Supports myelin, the protective coating around nerves",
          evidence:
            "A legitimate, important nerve nutrient. B12 deficiency is a well-documented cause of nerve symptoms, and the methylcobalamin form used here is the active, bioavailable one. Strong rationale for inclusion.",
          rating: "strong",
        },
        {
          name: "Passionflower (Passiflora incarnata)",
          dosage: "Not disclosed on label",
          purpose: "Promotes relaxation and better sleep",
          evidence:
            "A sensible addition for a bedtime formula. Passionflower has moderate human evidence for improving sleep quality and easing mild anxiety, which helps with the restless nights neuropathy often causes.",
          rating: "moderate",
        },
        {
          name: "Corydalis yanhusuo Extract",
          dosage: "Not disclosed on label",
          purpose: "Traditionally used for pain and discomfort",
          evidence:
            "Corydalis has a long history of traditional use for pain, and early research on its active compounds is promising. Note that the marketing describes it as a source of 'capsaicin,' which is botanically inaccurate — but the extract itself is a reasonable pain-support botanical.",
          rating: "moderate",
        },
        {
          name: "Marshmallow Root",
          dosage: "Not disclosed on label",
          purpose: "Soothing, anti-irritant plant extract",
          evidence:
            "A gentle, well-tolerated botanical traditionally used to soothe irritation. The specific nerve-protection claims made in the marketing are not well established, so we treat this as a supporting, comfort-oriented ingredient.",
          rating: "weak",
        },
      ],
      clinicalEvidence:
        "Here is the honest picture, and it is more favorable than skeptics expect. Two of the five ingredients — alpha-lipoic acid and vitamin B12 — have solid human research behind them for nerve comfort, and passionflower has reasonable evidence for sleep. Where we stay measured is on the finished product: there are no published clinical trials on the Nerve Alive formula itself, and the specific studies cited in the promotional video could not be independently verified. So the best way to read the evidence is this: the building blocks are real and well-chosen, even if the finished blend has not been formally trialed. That is typical for this category and not unusual.",
      safety:
        "Nerve Alive uses natural, generally well-tolerated ingredients and is non-habit-forming, which is a real advantage over prescription nerve medications that can cause drowsiness and dependence. A few sensible notes: alpha-lipoic acid can lower blood sugar, which is usually welcome for people with diabetes but worth monitoring if you take glucose-lowering medication; passionflower promotes relaxation, which is exactly why it is taken at night. Most importantly, if you are currently on prescribed nerve medication such as gabapentin or pregabalin, do not stop or reduce it on your own — keep taking it and talk to your doctor before making any changes.",
      customerReviews:
        "Customer feedback on the official site is positive, with users reporting less tingling and better sleep within a few weeks. As with most direct-to-consumer supplements, the testimonials are curated by the seller, so we would weigh them as encouraging rather than independent. Because Nerve Alive is a newer product, there is limited third-party review history so far — the money-back guarantee is the more meaningful signal of how confident the company is in repeat satisfaction.",
      pricing:
        "Nerve Alive is sold only on the official website, with three options: a 6-bottle kit at $49 per bottle (the best per-bottle value, with free US shipping and two free bonus guides), a 3-bottle kit at $69 per bottle, and a 2-bottle starter at $79 per bottle. Every order is covered by a money-back guarantee, so you can try it and request a refund if it does not work for you — that guarantee is what makes testing it genuinely low-risk. One tip: the promotional video mentions a longer guarantee window than the official checkout page lists, so go by the terms shown at checkout.",
      pros: [
        "Built on alpha-lipoic acid and B12 — two genuinely well-researched nerve nutrients",
        "Adds passionflower for better sleep, a smart touch for nighttime nerve discomfort",
        "Natural, non-habit-forming and stimulant-free",
        "Simple once-a-day bedtime capsule",
        "Money-back guarantee makes it low-risk to try",
        "Free bonus guides with multi-bottle orders",
      ],
      cons: [
        "Individual ingredient doses are not listed on the label",
        "The marketing oversells it as a neuropathy 'cure' — treat it as support, not a miracle",
        "Only available on the official website",
        "No clinical trial on the finished formula (common for the category)",
      ],
      finalVerdict:
        "If you tune out the over-the-top sales video, Nerve Alive is actually a reasonable nerve-support supplement. Its backbone — alpha-lipoic acid, vitamin B12 and passionflower — is made up of ingredients that have real research behind them for nerve comfort and sleep, and the once-nightly capsule is easy to stick with. It is not a cure, and anyone on prescription nerve medication should keep taking it and consult their doctor. But given the quality of the core ingredients and the money-back guarantee, it is a low-risk option worth trying for anyone looking to support nerve health naturally. We give it a favorable 9 out of 10.",
    },
    affiliateLink: "https://nervealive.com/nva-tsl-buy-aff-f137",
  },
];

export function getReview(categorySlug: string, slug: string): Review | undefined {
  return reviews.find((r) => r.categorySlug === categorySlug && r.slug === slug);
}

export function getReviewsByCategory(categorySlug: string): Review[] {
  return reviews.filter((r) => r.categorySlug === categorySlug);
}
