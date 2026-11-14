import Link from "next/link";

const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

const pillars = [
  { title: "Ingredient analysis", text: "Every ingredient checked for purpose, dosage and evidence quality." },
  { title: "Scientific evidence", text: "Human studies only. Ingredient evidence is never passed off as product proof." },
  { title: "Honest verdict", text: "A clear conclusion, including when the evidence simply isn't there." },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[var(--brand-navy)] text-white pb-28 pt-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-gold)]">
            Independent Supplement Investigations
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mt-3 mb-4" style={serif}>
            Before You Buy, <span className="text-[var(--brand-gold)]">Know the Truth.</span>
          </h1>
          <p className="text-white/70 leading-relaxed mb-6 max-w-xl">
            We investigate dietary supplements so you don&apos;t have to: ingredients, dosages,
            clinical evidence and the claims behind the sales page.
          </p>
          <Link
            href="/reviews"
            className="inline-block bg-[var(--brand-gold)] text-[var(--brand-navy)] font-bold px-6 py-3 rounded hover:bg-[var(--brand-gold-light)] transition-colors"
          >
            Latest Reviews
          </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-lg shadow-lg border-t-4 border-[var(--brand-gold)] p-6 text-center">
              <h2 className="text-lg font-bold text-[var(--brand-navy)] mb-2" style={serif}>{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-[var(--brand-navy)] mb-3" style={serif}>
          Layout preview
        </h2>
        <p className="text-muted-foreground mb-5 text-sm">
          The page below uses fictional sample content to show the review layout.
        </p>
        <Link
          href="/reviews/vision/sample-product"
          className="inline-block border border-[var(--brand-navy)] text-[var(--brand-navy)] px-5 py-2.5 rounded text-sm font-semibold hover:bg-[var(--brand-navy)] hover:text-white transition-colors"
        >
          View sample review
        </Link>
      </section>
    </>
  );
}
