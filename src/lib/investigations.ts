import { bestBrain } from "@/lib/best-brain";

export interface Investigation {
  href: string;
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
    href: "/gelagen",
    title: "Gelagen Review: Ingredients, Price & Where to Buy",
    category: "Hair, Skin & Nails",
    summary:
      "Made-in-USA daily beauty gummies with 5,000 mcg biotin, B vitamins and vitamins A, C and E for skin, hair and nails. We go through the label, how to take them, the official prices, the bonuses and the 60-day guarantee.",
    image: "/gelagen/images/gelagen-6-bottles.webp",
    imageAlt: "Gelagen skin, hair and nail gummy bottles",
  },
  {
    href: "/slimtide",
    title: "SlimTide Review: Ingredients, Price & Where to Buy",
    category: "Metabolism & Digestion",
    summary:
      "A made-in-USA once-daily synbiotic capsule with chicory root inulin, potato resistant starch and three probiotic strains, including Akkermansia muciniphila. We go through the label, how to take it, the official prices, the bonuses and the 60-day guarantee.",
    image: "/slimtide/images/slimtide-6-bottles.webp",
    imageAlt: "SlimTide metabolic and digestive support capsule bottles",
  },
  {
    href: "/memohoney",
    title: "MemoHoney Review: Ingredients, Price & Where to Buy",
    category: "Brain & Memory",
    summary:
      "A made-in-USA once-daily vegetable capsule with L-arginine, L-citrulline, niacin and beta-alanine for memory and focus. We go through the label, how to take it, the official prices, the bonuses and the 60-day guarantee.",
    image: "/memohoney/images/memohoney-6-bottles.webp",
    imageAlt: "MemoHoney advanced memory support capsule bottles",
  },
  {
    href: "/vapocept",
    title: "VapoCept Review: Ingredients, Price & Where to Buy",
    category: "Brain & Memory",
    summary:
      "A made-in-USA once-daily capsule with ginkgo biloba, turmeric, lutein and green tea for focus and mental clarity. We go through the label, how to take it, the official prices and the 60-day guarantee.",
    image: "/vapocept/images/vapocept-6-bottles.webp",
    imageAlt: "VapoCept focus and mental clarity capsule bottles",
  },
  {
    href: "/sodatide",
    title: "SodaTide Review: Ingredients, Price & Where to Buy",
    category: "Digestive Health",
    summary:
      "A made-in-USA synbiotic capsule with chicory root inulin, potato resistant starch and three probiotic strains, Akkermansia muciniphila among them. We go through the label, how to take it, the official prices and the 60-day guarantee.",
    image: "/sodatide/images/sodatide-6-bottles.webp",
    imageAlt: "SodaTide metabolic and digestive support capsule bottles",
  },
  {
    href: "/sodapeak",
    title: "SodaPeak Review: Ingredients, Price & Where to Buy",
    category: "Men's Health",
    summary:
      "A made-in-USA daily gummy built on a 9-botanical blend with Muira Puama, Maca, Catuaba and Ashwagandha. We go through the label, how to take it, the official prices and the 60-day guarantee.",
    image: "/sodapeak/images/sodapeak-6-bottles.webp",
    imageAlt: "SodaPeak male wellness gummy bottles",
  },
  {
    href: "/breathizen",
    title: "BreathiZen Review: Ingredients, Price & Where to Buy",
    category: "Respiratory Health",
    summary:
      "A made-in-USA herbal oral spray with mullein, ginger and organic lemon. We go through the label, how to use it, the official prices and the 60-day guarantee.",
    image: "/breathizen/images/breathizen-6-bottles.webp",
    imageAlt: "BreathiZen herbal oral spray bottles",
  },
  {
    href: "/best-brain-supplement",
    title: bestBrain.title,
    category: "Brain & Memory",
    summary:
      "What Prevagen's studies and the FTC case really show, and how it compares with the top memory supplements on dosing and evidence.",
    image: "/products/memovolt.png",
    imageAlt: "MemoVolt memory supplement",
  },
];
