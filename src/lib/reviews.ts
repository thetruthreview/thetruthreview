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
      companyClaimsBody:
        "Nerve Alive is marketed as a daily supplement for nerve health, nutritional balance, and overall well-being. It's built around a handful of ingredients, each chosen to play a different role in supporting the nervous system.\n\n" +
        "Instead of selling it as a straight pain reliever, the makers lean on a mix of nutrients, botanical extracts, and the convenience of a single daily capsule. Here's a closer look at what it claims to do.\n\n" +
        "### 1. A multi-ingredient formula for nerve health\n\n" +
        "The headline selling point is the formula itself — several ingredients working together:\n\n" +
        "* **Magnesium:** front and center on the label (“With Magnesium”), included for healthy nerve signaling and muscle relaxation.\n" +
        "* **Prickly pear extract:** the formula's source of alpha-lipoic acid, a well-known nerve nutrient.\n" +
        "* **Vitamin B12 (methylcobalamin):** the active form of B12, tied to normal nerve function and myelin health.\n" +
        "* **Passionflower (Passiflora incarnata):** added for relaxation and better sleep.\n" +
        "* **Corydalis extract:** a botanical tied to the product's pain-and-nerve angle (and marketed, somewhat loosely, alongside capsaicin).\n" +
        "* **Marshmallow root:** a soothing plant extract included for general nervous-system support.\n\n" +
        "Together, these are pitched as a complementary blend that covers several angles of nerve and wellness support at once.\n\n" +
        "### 2. Nerve function and everyday comfort\n\n" +
        "Most of the messaging centers on nerve health and day-to-day comfort — supporting normal nerve function for people dealing with tingling, numbness, and burning sensations, and keeping nerve signals firing the way they should.\n\n" +
        "Worth keeping in mind: this is how the product is positioned, not proof that it can reverse neuropathy, repair damaged nerves, or erase nerve pain.\n\n" +
        "### 3. Sleep, relaxation, and well-being\n\n" +
        "Nerve pain and bad sleep go hand in hand, so the formula also targets rest. The passionflower is there to help you wind down, and the overall pitch includes better energy, mood, and comfort during the day.\n\n" +
        "These are wellness claims — reasonable on paper, but not outcomes proven in a clinical trial of the finished product.\n\n" +
        "### 4. Daily convenience and buyer perks\n\n" +
        "It's a simple routine: two capsules a night, with a time-release coating meant to protect the ingredients and release them gradually.\n\n" +
        "On the buying side, there are multi-bottle discounts, free digital guides, and a money-back guarantee — all of which are worth confirming against the current terms on the official page before you order.\n\n" +
        "### The bottom line on these claims\n\n" +
        "Put simply, Nerve Alive is positioned as a multi-ingredient supplement — botanicals plus B12 — aimed at nerve health, relaxation, and everyday well-being.\n\n" +
        "That tells you what to expect from the pitch. What it doesn't tell you is whether the formula actually delivers. Ingredients that look good on their own don't automatically prove the finished product improves nerve function or relieves neuropathy.\n\n" +
        "That's exactly what the next sections dig into — the ingredients and the real evidence behind them — to see which claims hold up and which need a closer look.",
      factOrFiction: [
        {
          claim: "The formula is built on real nerve-health ingredients",
          verdict: "true",
          explanation:
            "True. Magnesium, alpha-lipoic acid and vitamin B12 (methylcobalamin) are among the most researched nutrients for nerve and muscle comfort, and all three are in here. This isn't a formula padded with filler — the core ingredients earn their spot.",
        },
        {
          claim: "It supports nerve function and eases tingling, numbness and burning",
          verdict: "partially-true",
          explanation:
            "Reasonable, with a caveat. Those ingredients have solid research for nerve-symptom relief on their own, so the effect is plausible for a lot of people. What's missing is a trial on the finished Nerve Alive blend — so the support is credible, just not proven for this exact product.",
        },
        {
          claim: "It helps you sleep better, with more energy and a steadier mood",
          verdict: "partially-true",
          explanation:
            "The sleep angle is the most believable part — passionflower has real evidence for winding down and sleeping better, which matters when nerve discomfort keeps you up at night. The broader energy and mood claims are softer, more of a knock-on benefit than a guarantee.",
        },
        {
          claim: "It reverses neuropathy and repairs damaged nerves in a few weeks",
          verdict: "false",
          explanation:
            "This is where the marketing overreaches. No supplement — Nerve Alive included — has been shown to reverse neuropathy or regrow nerves, and there are no trials on the product proving it. Treat it as daily nerve support, not a cure, and keep any prescribed treatment going.",
        },
        {
          claim: "The money-back guarantee makes it risk-free to try",
          verdict: "partially-true",
          explanation:
            "There is a money-back guarantee, which genuinely lowers the risk of trying it. Just confirm the current window and terms on the official checkout page before you buy — the guarantee length quoted in the marketing doesn't always match what's listed at purchase.",
        },
      ],
      ingredients: [
        {
          name: "Magnesium",
          dosage: "Not disclosed on label",
          purpose: "Supports healthy nerve signaling and muscle function",
          evidence:
            "Featured right on the label (“With Magnesium”), and a smart inclusion. Magnesium is essential for normal nerve transmission and muscle relaxation, and low levels are linked to cramps, restlessness and poor sleep. A well-established, evidence-backed nutrient for nerve and muscle comfort.",
          rating: "strong",
        },
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
