import { bestBrain } from "@/lib/best-brain";

export interface Investigation {
  href: string;
  /** The product on its own, for card and list labels. */
  name: string;
  /**
   * The heading on the /reviews card: the brand plus the question an organic
   * visitor types. Deliberately NOT the page's own H1 or title, and every
   * question is one the page it links to actually answers.
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
    headline: "VapoLung Review: Does the Five-Botanical Spray Really Work?",
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
    headline: "HoneyHarmony Review: Is It Worth It, and What Does a Bottle Cost?",
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
    headline: "KlaroNail Review: Ingredients, Side Effects and How to Use It",
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
    headline: "Audifort Review: Does It Work, and What Does the 90-Day Guarantee Cover?",
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
    headline: "GelatineSculpt Review: Honest Prices, Bonuses and Refund Terms",
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
    headline: "NerveAlive Review: What's in Each Capsule, and Any Side Effects?",
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
    headline: "SugarDefender Review: Does the Chromium Formula Hold Up?",
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
    headline: "DentaVive Review: Is a Chewable Oral Probiotic Worth Trying?",
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
    headline: "Gelagen Review: How Long Before Biotin Gummies Show Results?",
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
    headline: "SlimTide Review: Is Akkermansia Worth the Price?",
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
    headline: "MemoHoney Review: Does It Help Memory, and Is It Safe to Take?",
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
    headline: "VapoCept Review: Does Ginkgo Really Sharpen Focus?",
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
    headline: "SodaTide Review: How Long Does a Synbiotic Take to Work?",
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
    headline: "SodaPeak Review: Do the Nine Botanicals Really Deliver?",
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
    headline: "BreathiZen Review: Price, Guarantee and Where to Order Safely",
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
    headline: "Prevagen vs MemoVolt and NooCube: Which Memory Formula Wins?",
    title: bestBrain.title,
    category: "Brain & Memory",
    summary:
      "What Prevagen's studies and the FTC case really show, and how it compares with the top memory supplements on dosing and evidence.",
    image: "/products/memovolt.png",
    imageAlt: "MemoVolt memory supplement",
  },
];
