import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  variable: "--font-atkinson",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Truth Review — Before You Buy, Know the Truth.",
    template: "%s | The Truth Review",
  },
  description:
    "Independent investigations into dietary supplements and nutraceuticals. Science-backed analysis, ingredient deep dives, and honest consumer verdicts.",
  metadataBase: new URL("https://thetruthrview.com"),
  openGraph: {
    type: "website",
    siteName: "The Truth Review",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={atkinson.variable}>
      <body className="min-h-screen flex flex-col bg-background antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
