import { bestBrain } from "@/lib/best-brain";

export interface Investigation {
  href: string;
  /** The product on its own, for card and list labels. */
  name: string;
  /**
   * The heading on the /reviews card. Deliberately NOT the page's own H1 or
   * title: each one chases a keyword family that page is not already after.
   */
  headline: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
}

/**
 * The product pages currently published on the site, newest first.
 * Listed on /reviews and used by the home page "Latest Investigation".
 */
export const investigations: Investigation[] = [
  {
    href: "/vapolung",
    name: "VapoLung",
    headline: "What's Inside VapoLung: All Five Botanicals, Milligram by Milligram",
    title: "VapoLung Review: Ingredients, Price & Where to Buy",
    category: "Respiratory Health",
    summary:
      "A made-in-USA herbal oral spray with a 154 mg blend of mullein, ginger, bromelain, organic lemon and cordyceps militaris — five botanicals where most sprays carry three. We go through the label, the prices, the five bonuses and the 60-day guarantee.",
    image: "/vapolung/images/vapolung-hero.webp",
    imageAlt: "VapoLung herbal lung support spray bottles",
  },
  {
    href: "/honeyharmony",
    name: "HoneyHarmony",
    headline: "How to Take HoneyHarmony: Dosage, Timing and a Full Day's Routine",
    title: "HoneyHarmony Review: Ingredients, Price & Where to Buy",
    category: "Blood Sugar Support",
    summary:
      "A made-in-USA liquid drop with 7 mcg of chromium — 20% of the Daily Value, printed on its own line rather than pooled — plus a botanical blend of maca, gymnema, green tea and ginseng. We go through the label, the prices, the six bonuses and the 60-day guarantee.",
    image: "/honeyharmony/images/honeyharmony-hero.webp",
    imageAlt: "HoneyHarmony blood sugar support drop bottles",
  },
  {
    href: "/klaronail",
    name: "KlaroNail",
    headline: "KlaroNail's 5% Undecylenic Acid: The Active Behind the Spray",
    title: "KlaroNail Review: Ingredients, Price & Where to Buy",
    category: "Nail & Foot Care",
    summary:
      "A made-in-USA topical nail and skin spray with 5% undecylenic acid, tea tree, clove and manuka oils. We go through the full label, how to use it, the official prices, the bonuses and the 60-day guarantee.",
    image: "/klaronail/images/klaronail-hero.webp",
    imageAlt: "KlaroNail nail and skin spray bottles",
  },
  {
    href: "/audifort",
    name: "Audifort",
    headline: "Audifort's 90-Day Guarantee: The Longest Refund Window on Our List",
    title: "Audifort Review: Ingredients, Price & Where to Buy",
    category: "Hearing Health",
    summary:
      "A made-in-USA liquid drop sold as healthy hearing support, with chromium and a 200 mg botanical blend — and a 90-day guarantee, the longest we have reviewed. We read the label, including what it says about how hearing-specific this formula really is.",
    image: "/audifort/images/audifort-hero.webp",
    imageAlt: "Audifort healthy hearing support drop bottles",
  },
  {
    href: "/gelatinesculpt",
    name: "GelatineSculpt",
    headline: "GelatineSculpt Price: Every Package Compared, Shipping Included",
    title: "GelatineSculpt Review: Ingredients, Price & Where to Buy",
    category: "Weight Management",
    summary:
      "A made-in-USA liquid drop with chromium and a 200 mg blend of maca, green tea, gymnema and African mango. We read the Supplement Facts panel line by line — including the three featured ingredients that are not on it — and go through the prices, the six bonuses and the 60-day guarantee.",
    image: "/gelatinesculpt/images/gelatinesculpt-hero.webp",
    imageAlt: "GelatineSculpt metabolism support drop bottles",
  },
  {
    href: "/nervealive",
    name: "NerveAlive",
    headline: "NerveAlive's Label: Every Herb Dosed on Its Own, No Blend to Hide In",
    title: "NerveAlive Review: Ingredients, Price & Where to Buy",
    category: "Nerve Health",
    summary:
      "A daily nerve support capsule with passion flower, marshmallow root, corydalis, prickly pear and California poppy — every active printed with its own amount, no proprietary blend. We go through the label, the prices, the bonuses and the 60-day guarantee.",
    image: "/nervealive/images/nervealive-hero.webp",
    imageAlt: "NerveAlive nerve support capsule bottles",
  },
  {
    href: "/sugardefender",
    name: "SugarDefender",
    headline: "How SugarDefender Works: Chromium Plus a 200 mg Herbal Blend",
    title: "SugarDefender Review: Ingredients, Price & Where to Buy",
    category: "Blood Sugar Support",
    summary:
      "A made-in-USA liquid drop with chromium and a 200 mg herbal blend of maca, gymnema, ginseng and African mango. We go through the label, how to take it, the official prices, the bonuses and the 60-day guarantee.",
    image: "/sugardefender/images/sugardefender-hero.webp",
    imageAlt: "SugarDefender blood sugar support drop bottles",
  },
  {
    href: "/dentavive",
    name: "DentaVive",
    headline: "The Five Probiotic Strains in DentaVive, and What Each One Is For",
    title: "DentaVive Review: Ingredients, Price & Where to Buy",
    category: "Oral Health",
    summary:
      "A once-daily chewable oral probiotic with five strains, including L. reuteri and S. salivarius K12, plus tricalcium phosphate for gums, breath and teeth. We go through the formula, how to take it, the official prices, the bonuses and the 60-day guarantee.",
    image: "/dentavive/images/dentavive-hero.webp",
    imageAlt: "DentaVive oral probiotic bottles",
  },
  {
    href: "/gelagen",
    name: "Gelagen",
    headline: "Gelagen's 5,000 mcg of Biotin: What That Dose Means for Hair and Nails",
    title: "Gelagen Review: Ingredients, Price & Where to Buy",
    category: "Hair, Skin & Nails",
    summary:
      "Made-in-USA daily beauty gummies with 5,000 mcg biotin, B vitamins and vitamins A, C and E for skin, hair and nails. We go through the label, how to take them, the official prices, the bonuses and the 60-day guarantee.",
    image: "/gelagen/images/gelagen-hero.webp",
    imageAlt: "Gelagen skin, hair and nail gummy bottles",
  },
  {
    href: "/slimtide",
    name: "SlimTide",
    headline: "Akkermansia Muciniphila in SlimTide: The Strain Behind the Formula",
    title: "SlimTide Review: Ingredients, Price & Where to Buy",
    category: "Metabolism & Digestion",
    summary:
      "A made-in-USA once-daily synbiotic capsule with chicory root inulin, potato resistant starch and three probiotic strains, including Akkermansia muciniphila. We go through the label, how to take it, the official prices, the bonuses and the 60-day guarantee.",
    image: "/slimtide/images/slimtide-hero.webp",
    imageAlt: "SlimTide metabolic and digestive support capsule bottles",
  },
  {
    href: "/memohoney",
    name: "MemoHoney",
    headline: "MemoHoney's Amino Acids: L-Arginine, L-Citrulline and Blood Flow",
    title: "MemoHoney Review: Ingredients, Price & Where to Buy",
    category: "Brain & Memory",
    summary:
      "A made-in-USA once-daily vegetable capsule with L-arginine, L-citrulline, niacin and beta-alanine for memory and focus. We go through the label, how to take it, the official prices, the bonuses and the 60-day guarantee.",
    image: "/memohoney/images/memohoney-hero.webp",
    imageAlt: "MemoHoney advanced memory support capsule bottles",
  },
  {
    href: "/vapocept",
    name: "VapoCept",
    headline: "Ginkgo, Turmeric and Lutein: Reading the VapoCept Formula",
    title: "VapoCept Review: Ingredients, Price & Where to Buy",
    category: "Brain & Memory",
    summary:
      "A made-in-USA once-daily capsule with ginkgo biloba, turmeric, lutein and green tea for focus and mental clarity. We go through the label, how to take it, the official prices and the 60-day guarantee.",
    image: "/vapocept/images/vapocept-hero.webp",
    imageAlt: "VapoCept focus and mental clarity capsule bottles",
  },
  {
    href: "/sodatide",
    name: "SodaTide",
    headline: "SodaTide's Prebiotic Fiber and Three Live Strains, Explained",
    title: "SodaTide Review: Ingredients, Price & Where to Buy",
    category: "Digestive Health",
    summary:
      "A made-in-USA synbiotic capsule with chicory root inulin, potato resistant starch and three probiotic strains, Akkermansia muciniphila among them. We go through the label, how to take it, the official prices and the 60-day guarantee.",
    image: "/sodatide/images/sodatide-hero.webp",
    imageAlt: "SodaTide metabolic and digestive support capsule bottles",
  },
  {
    href: "/sodapeak",
    name: "SodaPeak",
    headline: "The Nine Botanicals in SodaPeak, From Muira Puama to Ashwagandha",
    title: "SodaPeak Review: Ingredients, Price & Where to Buy",
    category: "Men's Health",
    summary:
      "A made-in-USA daily gummy built on a 9-botanical blend with Muira Puama, Maca, Catuaba and Ashwagandha. We go through the label, how to take it, the official prices and the 60-day guarantee.",
    image: "/sodapeak/images/sodapeak-hero.webp",
    imageAlt: "SodaPeak male wellness gummy bottles",
  },
  {
    href: "/breathizen",
    name: "BreathiZen",
    headline: "Where to Buy BreathiZen, and What Each Package Costs",
    title: "BreathiZen Review: Ingredients, Price & Where to Buy",
    category: "Respiratory Health",
    summary:
      "A made-in-USA herbal oral spray with mullein, ginger and organic lemon. We go through the label, how to use it, the official prices and the 60-day guarantee.",
    image: "/breathizen/images/breathizen-hero.webp",
    imageAlt: "BreathiZen herbal oral spray bottles",
  },
  {
    href: "/best-brain-supplement",
    name: "Prevagen",
    headline: "Prevagen vs the Top Memory Supplements: Dosing and Evidence Compared",
    title: bestBrain.title,
    category: "Brain & Memory",
    summary:
      "What Prevagen's studies and the FTC case really show, and how it compares with the top memory supplements on dosing and evidence.",
    image: "/products/memovolt.png",
    imageAlt: "MemoVolt memory supplement",
  },
];
