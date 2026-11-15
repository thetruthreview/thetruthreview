import type { Metadata } from "next";
import { RankingPage } from "@/components/ranking-page";
import { topHearing } from "@/lib/top-hearing";

export const metadata: Metadata = {
  title: topHearing.title,
  description: topHearing.subtitle,
};

export default function TopHearingPage() {
  return <RankingPage data={topHearing} />;
}
