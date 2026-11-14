import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-6">
        <Link href="/" aria-label="The Truth Review - Home">
          <Image
            src="/logo.png"
            alt="The Truth Review - Before You Buy, Know the Truth."
            width={1378}
            height={320}
            priority
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        <nav className="ml-auto hidden sm:flex items-center gap-6 text-sm font-medium text-[var(--brand-navy)]">
          <Link href="/" className="hover:text-[var(--brand-gold)]">Home</Link>
          <Link href="/reviews" className="hover:text-[var(--brand-gold)]">Reviews</Link>
          <Link href="/about" className="hover:text-[var(--brand-gold)]">About</Link>
        </nav>

        <Link
          href="/reviews"
          className="ml-auto sm:ml-0 bg-[var(--brand-gold)] text-[var(--brand-navy)] font-bold text-sm px-5 py-2.5 rounded hover:bg-[var(--brand-gold-light)] transition-colors"
        >
          Latest Reviews
        </Link>
      </div>
    </header>
  );
}
