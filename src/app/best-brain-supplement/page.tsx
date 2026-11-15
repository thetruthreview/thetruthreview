import type { Metadata } from "next";
import { RankingPage } from "@/components/ranking-page";
import { bestBrain } from "@/lib/best-brain";

export const metadata: Metadata = {
  title: bestBrain.title,
  description: bestBrain.subtitle,
};

export default function BestBrainSupplementPage() {
  return <RankingPage data={bestBrain} />;
}
