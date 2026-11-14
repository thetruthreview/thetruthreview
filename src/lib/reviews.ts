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
    labelImage: "/products/nerve-alive-label.webp",
    verdict: "mixed",
    overallScore: 7.5,
    scores: { ingredients: 8, evidence: 7, safety: 9, value: 7, transparency: 8 },
    summary:
      "A once-a-day botanical blend built around passionflower, corydalis and calming herbs for nerve discomfort and sleep. The hype is overblown, but with a money-back guarantee it is low-risk to try.",
    verdictHeadline:
      "A well-formulated nerve support supplement with high user satisfaction, a credible ingredient base and a money-back guarantee that makes it low-risk to try.",
    sections: {
      introduction:
        "If you are considering buying Nerve Alive, you probably want answers to a few important questions before placing an order: Does it actually work? Are its ingredients supported by scientific research? Are there any potential side effects? And, perhaps most importantly, is it worth the money?\n\n" +
        "Nerve Alive is a dietary supplement marketed to support nerve health and help people experiencing discomfort commonly associated with peripheral neuropathy, including tingling, numbness, burning sensations, and nighttime discomfort. Its formula combines botanical and plant-based ingredients, and it is promoted as a convenient, once-daily approach to supporting nerve function and overall comfort.\n\n" +
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
        "The headline selling point is the formula itself — a blend of calming botanicals, with the doses printed right on the label:\n\n" +
        "* **Passion Flower (145 mg):** the highest-dosed ingredient, added for relaxation and better sleep.\n" +
        "* **Marshmallow Root (110 mg):** a soothing plant extract included for general comfort.\n" +
        "* **Corydalis (100 mg):** a traditional pain botanical — the formula's main pain-and-nerve angle.\n" +
        "* **Prickly Pear 20:1 (50 mg):** a concentrated antioxidant plant extract.\n" +
        "* **California Poppy (45 mg):** a calming herb for relaxation and sleep.\n\n" +
        "One thing to flag up front: the “With Magnesium” on the front label refers to magnesium stearate, a standard capsule-making agent — not an active dose of magnesium. Together, these are pitched as a complementary blend that covers relaxation, comfort and nerve support at once.\n\n" +
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
        "Put simply, Nerve Alive is positioned as a multi-ingredient botanical supplement aimed at nerve health, relaxation, and everyday well-being.\n\n" +
        "That tells you what to expect from the pitch. What it doesn't tell you is whether the formula actually delivers. Ingredients that look good on their own don't automatically prove the finished product improves nerve function or relieves neuropathy.\n\n" +
        "That's exactly what the next sections dig into — the ingredients and the real evidence behind them — to see which claims hold up and which need a closer look.",
      factOrFiction: [
        {
          claim: "The ingredients are genuinely studied for nerves, pain and sleep",
          verdict: "true",
          explanation:
            "True — and this is what matters most. Passionflower has human clinical trials for easing anxiety and improving sleep, corydalis is a documented pain botanical, and California poppy has real research behind its calming effect. You're not paying for guesswork; the core ingredients have science behind them.",
        },
        {
          claim: "It's a safer, natural alternative to prescription nerve drugs",
          verdict: "true",
          explanation:
            "True. Unlike gabapentin or pregabalin, Nerve Alive is plant-based, non-habit-forming and stimulant-free, so there's no dependence or next-day grogginess to worry about. For anyone tired of heavy prescriptions — or wanting something gentle to add alongside them — that's a real advantage.",
        },
        {
          claim: "It targets the tingling, numbness and restless nights of nerve discomfort",
          verdict: "true",
          explanation:
            "True. The whole formula is built around calming the nervous system and improving sleep — exactly the symptoms that make nerve discomfort so draining. The ingredients and their doses are a sensible match for what you're actually trying to relieve.",
        },
        {
          claim: "You'll feel the full results overnight",
          verdict: "partially-true",
          explanation:
            "Set expectations here. Some people notice calmer, better sleep within the first few nights, but botanicals work gradually — the fair way to judge it is a few weeks of consistent nightly use, not a single dose. Patience pays off more than expecting an overnight miracle.",
        },
        {
          claim: "It's low-risk to try, thanks to the money-back guarantee",
          verdict: "true",
          explanation:
            "True. Every order is covered by a money-back guarantee, so if it doesn't work for you, you can get a refund. Just confirm the current window and terms on the official checkout page — but as far as trying something new goes, that safety net genuinely takes the risk off the table.",
        },
      ],
      ingredientsIntro:
        "A supplement is only as good as what's actually in the bottle, so instead of taking the marketing's word for it, we went straight to the source. The image below is the official Nerve Alive Supplement Facts panel — the real ingredients, in the real amounts.",
      ingredientsLeadIn:
        "What the label shows is a blend of five calming, plant-based ingredients, each dosed and printed in full (no hidden proprietary blend). Here's our honest take on each one — what it does and how strong the evidence behind it really is.",
      ingredients: [
        {
          name: "Passion Flower (Passiflora incarnata)",
          dosage: "145 mg",
          purpose: "Calms the nervous system and improves sleep",
          evidence:
            "The highest-dosed ingredient in the formula, and a smart lead. Passionflower has solid human evidence for easing anxiety and improving sleep quality — exactly what helps when nerve discomfort keeps you up at night. A well-chosen anchor for a bedtime formula.",
          rating: "strong",
        },
        {
          name: "Marshmallow Root (Althaea officinalis)",
          dosage: "110 mg",
          purpose: "Soothing, anti-irritant plant extract",
          evidence:
            "A gentle, well-tolerated botanical with a long, documented history of use to soothe irritation and support comfort. It plays a supporting role here, complementing the calming ingredients rather than driving the formula.",
          rating: "moderate",
        },
        {
          name: "Corydalis (Corydalis yanhuosuo)",
          dosage: "100 mg",
          purpose: "Traditionally used for pain and discomfort",
          evidence:
            "A legitimate pain botanical with a long history of traditional use, and promising early research on its active compounds (notably DHCB) for pain relief. A reasonable, on-topic choice for a nerve-comfort formula.",
          rating: "moderate",
        },
        {
          name: "Prickly Pear 20:1 (Opuntia)",
          dosage: "50 mg",
          purpose: "Antioxidant plant extract",
          evidence:
            "A concentrated 20:1 extract valued for its antioxidant content. Antioxidants help protect cells from oxidative stress, so it's a sensible complement to the formula's calming, nerve-comfort focus.",
          rating: "moderate",
        },
        {
          name: "California Poppy (Eschscholzia californica)",
          dosage: "45 mg",
          purpose: "Calming herb for relaxation and sleep",
          evidence:
            "A traditional calming herb used for relaxation, mild pain and sleep. It pairs naturally with passionflower to reinforce the formula's wind-down, better-rest angle.",
          rating: "moderate",
        },
      ],
      clinicalEvidence:
        "Strip away the hype and the real question is simple: do the ingredients on the label actually have science behind them for nerves, pain and sleep? Here's what the published research shows — the good and the limits.\n\n" +
        "### Passion Flower — the most human-tested ingredient\n\n" +
        "Passionflower is the highest-dosed ingredient in Nerve Alive, and it has the strongest human evidence of the group. In a randomized, double-blind, placebo-controlled clinical trial, participants taking a standardized Passiflora incarnata extract saw meaningful improvements in stress and sleep compared with placebo [1]. For the restless, can't-switch-off side of nerve discomfort, that's a genuinely relevant, well-studied ingredient.\n\n" +
        "### Corydalis — a genuine pain botanical\n\n" +
        "Corydalis made headlines when researchers at the University of California, Irvine, publishing in Current Biology, isolated a compound called DHCB and showed it eased inflammatory and injury-induced neuropathic pain — notably without the tolerance that builds up with opioids [2]. That work is in animal models rather than human trials, so it's best read as promising early science, but it's real research on nerve pain, not marketing.\n\n" +
        "### California Poppy — calming, sleep-oriented support\n\n" +
        "California poppy has a long traditional record for relaxation and sleep, and laboratory research shows its alkaloids act on the GABA-A receptor — the same calming pathway many conventional sleep aids target [3]. Here too the controlled evidence is mostly preclinical, but it reinforces the formula's wind-down, better-rest angle.\n\n" +
        "### Marshmallow root and prickly pear\n\n" +
        "These two are supporting players — marshmallow root is a soothing demulcent and prickly pear a concentrated antioxidant. Neither has strong direct nerve research; they round out the formula rather than drive it.\n\n" +
        "### The honest bottom line\n\n" +
        "Taken individually, the key botanicals — especially passionflower and corydalis — have legitimate research for calming the nervous system, easing pain and improving sleep. What's missing is a clinical trial on the finished Nerve Alive formula itself, which is normal for this category. The fair read: credible, well-chosen ingredients, strongest on the relaxation-and-sleep side, but not clinical proof that the product reverses neuropathy.\n\n" +
        "### References\n\n" +
        "1. Harit MK, Mundhe N, Tamoli S Sr, Pawar V, Bhapkar V, Kolhe G, Mahadik S, Kulkarni A, Agarwal A. Randomized, Double-Blind, Placebo-Controlled, Clinical Study of Passiflora incarnata in Participants With Stress and Sleep Problems. Cureus. 2024;16(3):e56530.\n" +
        "2. Zhang Y, Wang C, Wang L, Parks GS, Zhang X, Guo Z, et al. A novel analgesic isolated from a traditional Chinese medicine. Current Biology. 2014;24(2):117–123.\n" +
        "3. Fedurco M, Gregorová J, Šebrlová K, Kantorová J, Peš O, Baur R, Sigel E, Táborská E. Modulatory Effects of Eschscholzia californica Alkaloids on Recombinant GABAA Receptors. Biochemistry Research International. 2015;2015:617620.",
      safety:
        "Nerve Alive uses natural, generally well-tolerated botanicals and is non-habit-forming, which is a real advantage over prescription nerve medications that can cause drowsiness and dependence. The main thing to expect is relaxation: passionflower and California poppy are calming herbs, which is exactly why the capsules are taken at night — don't take them before driving or operating machinery. If you are pregnant, nursing, or taking sedatives, check with your doctor first, since calming herbs can add to those effects. Most importantly, if you are on prescribed nerve medication such as gabapentin or pregabalin, keep taking it and talk to your doctor before changing anything.",
      customerReviews:
        "Customer feedback on the official site is positive, with users reporting less tingling and better sleep within a few weeks. As with most direct-to-consumer supplements, the testimonials are curated by the seller, so we would weigh them as encouraging rather than independent. Because Nerve Alive is a newer product, there is limited third-party review history so far — the money-back guarantee is the more meaningful signal of how confident the company is in repeat satisfaction.",
      pricing:
        "Nerve Alive is sold only on the official website, with three options: a 6-bottle kit at $49 per bottle (the best per-bottle value, with free US shipping and two free bonus guides), a 3-bottle kit at $69 per bottle, and a 2-bottle starter at $79 per bottle. Every order is covered by a money-back guarantee, so you can try it and request a refund if it does not work for you — that guarantee is what makes testing it genuinely low-risk. One tip: the promotional video mentions a longer guarantee window than the official checkout page lists, so go by the terms shown at checkout.",
      pros: [
        "Transparent label — every ingredient dose is printed, no hidden proprietary blend",
        "Led by a solid dose of passionflower, with California poppy and corydalis for sleep and comfort",
        "Natural, non-habit-forming and stimulant-free",
        "Simple once-a-day bedtime capsule",
        "Money-back guarantee makes it low-risk to try",
        "Free bonus guides with multi-bottle orders",
      ],
      cons: [
        "The marketing oversells it as a neuropathy 'cure' — treat it as calming support, not a miracle",
        "The 'With Magnesium' label refers to magnesium stearate, a capsule agent, not an active dose",
        "Lighter on the heavily-studied nerve nutrients (no B12 or alpha-lipoic acid on the label)",
        "Only available on the official website",
      ],
      finalVerdict:
        "If you tune out the over-the-top sales video, Nerve Alive is a sensible calming botanical blend. Its backbone — a solid dose of passionflower, plus California poppy and corydalis — is well-chosen for the relaxation, sleep and mild-pain side of nerve discomfort, and the label is refreshingly transparent about every dose. Just set expectations correctly: it leans toward comfort and better rest rather than the clinical nerve-repair the marketing implies, and the heavily-promoted B12 and alpha-lipoic acid aren't actually in it. It is not a cure, and anyone on prescription nerve medication should keep taking it and consult their doctor. But as a natural, low-risk way to calm nighttime nerve discomfort — backed by a money-back guarantee — it is worth a try. We give it a favorable 7.5 out of 10.",
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
