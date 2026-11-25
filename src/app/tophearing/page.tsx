import type { Metadata } from "next";
import { RankingPage } from "@/components/ranking-page";
import { topHearing } from "@/lib/top-hearing";
import { JsonLd } from "@/components/json-ld";
import { rankingMetadata, rankingSchema } from "@/lib/seo-content";

export const metadata: Metadata = rankingMetadata(topHearing, "/tophearing");

export default function TopHearingPage() {
  return (
    <>
      <JsonLd graph={rankingSchema(topHearing, "/tophearing")} />
      <RankingPage data={topHearing} />
    </>
  );
}
