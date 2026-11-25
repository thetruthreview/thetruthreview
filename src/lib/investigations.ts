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
