import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="bg-[var(--brand-navy)] text-white/80 text-xs">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <span>Independent investigations. Not medical advice.</span>
          <span className="hidden sm:inline text-[var(--brand-gold)]">
            Before You Buy, Know the Truth.
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-9 h-9 bg-[var(--brand-navy)] text-[var(--brand-gold)] rounded flex items-center justify-center font-black">
            T
          </span>
          <span
            className="text-xl font-bold text-[var(--brand-navy)] leading-none"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The Truth Review
          </span>
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
