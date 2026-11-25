import type { Metadata } from "next";
import Script from "next/script";
import { RankingPage } from "@/components/ranking-page";
import { bestBrain } from "@/lib/best-brain";
import { JsonLd } from "@/components/json-ld";
import { rankingMetadata, rankingSchema } from "@/lib/seo-content";

export const metadata: Metadata = rankingMetadata(bestBrain, "/best-brain-supplement");

// Presell landing page: the site header links are disabled so paid traffic has
// no exit path other than the offer CTA.
const disableHeaderNav = `header a { pointer-events: none; cursor: default; }`;

export default function BestBrainSupplementPage() {
  return (
    <>
      <style>{disableHeaderNav}</style>
      <JsonLd graph={rankingSchema(bestBrain, "/best-brain-supplement")} />
      <Script
        src="https://app.roottracking.com/track/57ac9e06-e378-4060-aa1a-7050f91bc6ff"
        strategy="afterInteractive"
      />
      <RankingPage data={bestBrain} />
    </>
  );
}
