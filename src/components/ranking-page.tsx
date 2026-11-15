const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

export interface RankedProduct {
  rank: number;
  name: string;
  brand: string;
  score: number;
  winner?: boolean;
  anchor?: boolean;
  image?: string;
  ratingNote?: string;
  bottomLine: string;
  pros: string[];
  cons: string[];
  ctaLabel?: string;
  ctaNote?: string;
  link?: string;
}

export interface RankingData {
  eyebrow: string;
  badge: string;
  title: string;
  subtitle: string;
  author: string;
  updated: string;
  readTime: string;
  presellTitle: string;
  presell: string[];
  tableTitle: string;
  products: RankedProduct[];
  methodologyNote: string;
  references?: string[];
  disclaimer: string;
}

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-[var(--brand-navy)]">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function Stars({ score }: { score: number }) {
  const pct = Math.max(0, Math.min(100, (score / 5) * 100));
  const row = (cls: string) => (
    <div className={`flex gap-0.5 ${cls}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
  return (
    <div className="relative inline-block">
      {row("text-gray-200")}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
        {row("text-[var(--brand-gold)]")}
      </div>
    </div>
  );
}

function ProductImage({ p, size }: { p: RankedProduct; size: "lg" | "sm" }) {
  const box = size === "lg" ? "h-56" : "h-40";
  if (p.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={p.image} alt={p.name} className={`${box} w-full object-contain`} />
    );
  }
  return (
    <div
      className={`${box} w-full rounded-lg border border-dashed bg-slate-50 flex items-center justify-center text-center text-xs text-muted-foreground px-2`}
    >
      {p.name}
      <br />
      product image
    </div>
  );
}

function WinnerCard({ p }: { p: RankedProduct }) {
  return (
    <div className="relative border-2 border-[var(--brand-gold)] rounded-xl bg-white mb-6 mt-8">
      <span className="absolute -top-3 left-6 bg-[var(--brand-gold)] text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
        🏆 #1 Top Product for 2026
      </span>
      <div className="p-6 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
          <div>
            <h3 className="text-2xl font-black text-[var(--brand-navy)]" style={serif}>
              {p.rank}. {p.name}
            </h3>
            <p className="text-sm text-muted-foreground">{p.brand}</p>
          </div>
          <div className="sm:text-right">
            <div className="text-3xl font-black text-[var(--brand-gold)]" style={serif}>
              {p.score.toFixed(1)} <span className="text-lg text-muted-foreground">/ 5.0</span>
            </div>
            <div className="flex sm:justify-end">
              <Stars score={p.score} />
            </div>
            {p.ratingNote && (
              <div className="text-xs text-muted-foreground mt-0.5">({p.ratingNote})</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6">
          <ProductImage p={p} size="lg" />

          <div>
            <p className="text-base leading-relaxed mb-4">
              <strong className="text-[var(--brand-navy)]">The Bottom Line:</strong> {p.bottomLine}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2 text-sm">Pros:</h4>
                <ul className="space-y-1.5">
                  {p.pros.map((x, i) => (
                    <li key={i} className="text-sm text-green-700 leading-relaxed">✓ {x}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2 text-sm">Cons:</h4>
                <ul className="space-y-1.5">
                  {p.cons.map((x, i) => (
                    <li key={i} className="text-sm text-red-700 leading-relaxed">✗ {x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <a
          href={p.link ?? "#"}
          target="_blank"
          rel="nofollow noopener noreferrer sponsored"
          className="block w-full text-center bg-[var(--brand-gold)] text-white font-bold text-lg uppercase tracking-wide px-6 py-4 rounded-lg hover:bg-[var(--brand-gold-light)] transition-colors mt-6"
        >
          Visit Official {p.name} Website →
        </a>
        {p.ctaNote && (
          <p className="text-center text-xs text-muted-foreground mt-2">{p.ctaNote}</p>
        )}
      </div>
    </div>
  );
}

function RunnerUpCard({ p }: { p: RankedProduct }) {
  return (
    <div className="border rounded-xl bg-white p-6 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-[var(--brand-navy)]" style={serif}>
            {p.rank}. {p.name}
          </h3>
          <p className="text-sm text-muted-foreground">{p.brand}</p>
        </div>
        <div className="sm:text-right">
          <div className="text-2xl font-bold text-slate-500" style={serif}>
            {p.score.toFixed(1)} <span className="text-base text-muted-foreground">/ 5.0</span>
          </div>
          <div className="flex sm:justify-end">
            <Stars score={p.score} />
          </div>
          {p.ratingNote && (
            <div className="text-xs text-muted-foreground mt-0.5">({p.ratingNote})</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-5">
        <ProductImage p={p} size="sm" />
        <div>
          <p className="text-base leading-relaxed mb-4">
            <strong className="text-[var(--brand-navy)]">The Bottom Line:</strong> {p.bottomLine}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-green-800 mb-1 text-sm">Pros:</h4>
              <ul className="space-y-1">
                {p.pros.map((x, i) => (
                  <li key={i} className="text-sm text-green-700">✓ {x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-800 mb-1 text-sm">Cons:</h4>
              <ul className="space-y-1">
                {p.cons.map((x, i) => (
                  <li key={i} className="text-sm text-red-700">✗ {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RankingPage({ data }: { data: RankingData }) {
  const winner = data.products.find((p) => p.winner);
  const rest = data.products.filter((p) => !p.winner);

  return (
    <>
      <div className="bg-[var(--brand-navy)] text-white/80 text-center text-[11px] sm:text-xs tracking-[0.15em] uppercase py-2 px-4">
        {data.eyebrow}
      </div>

      <article className="max-w-5xl mx-auto px-4 py-5 sm:py-10">
        <div className="flex items-center justify-between gap-4 mb-3 sm:mb-5 pb-3 sm:pb-4 border-b">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--brand-gold)] bg-[var(--brand-gold)]/10 px-3 py-1 rounded-full">
            {data.badge}
          </span>
          <span className="text-xs text-muted-foreground">{data.readTime}</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight text-[var(--brand-navy)] mb-4"
          style={serif}
        >
          {data.title}
        </h1>
        <p className="text-xl text-foreground/80 leading-relaxed mb-4">{data.subtitle}</p>
        <p className="text-sm text-muted-foreground mb-8">
          By {data.author} · {data.updated}
        </p>

        <div className="border-l-4 border-[var(--brand-gold)] bg-slate-50 rounded-r-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-[var(--brand-navy)] mb-4" style={serif}>
            {data.presellTitle}
          </h2>
          <div className="space-y-4">
            {data.presell.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed">
                {inline(para)}
              </p>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[var(--brand-navy)] mb-4" style={serif}>
          {data.tableTitle}
        </h2>
        <div className="overflow-x-auto mb-2">
          <table className="w-full border rounded-lg overflow-hidden text-left">
            <thead className="bg-[var(--brand-navy)] text-white text-xs sm:text-sm">
              <tr>
                <th className="px-2 sm:px-4 py-3 font-semibold">Rank</th>
                <th className="px-2 sm:px-4 py-3 font-semibold">Product</th>
                <th className="px-2 sm:px-4 py-3 font-semibold hidden sm:table-cell">Brand</th>
                <th className="px-2 sm:px-4 py-3 font-semibold">Rating</th>
                <th className="px-2 sm:px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.products
                .slice()
                .sort((a, b) => a.rank - b.rank)
                .map((p) => (
                <tr key={p.rank} className={`border-t ${p.winner ? "bg-green-50" : "bg-white"}`}>
                  <td className="px-2 sm:px-4 py-3 font-bold text-[var(--brand-navy)] text-sm">
                    #{p.rank}
                  </td>
                  <td className="px-2 sm:px-4 py-3">
                    <span className="font-bold text-[var(--brand-navy)] text-sm sm:text-base">
                      {p.name}
                    </span>
                    {p.winner && (
                      <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0 w-fit bg-green-600 text-white text-[9px] sm:text-[10px] font-bold uppercase px-1.5 sm:px-2 py-0.5 rounded">
                        Winner
                      </span>
                    )}
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-muted-foreground hidden sm:table-cell">
                    {p.brand}
                  </td>
                  <td className="px-2 sm:px-4 py-3 font-semibold text-[var(--brand-navy)] text-sm whitespace-nowrap">
                    {p.score.toFixed(1)} / 5
                  </td>
                  <td className="px-2 sm:px-4 py-3">
                    {p.winner ? (
                      <a
                        href={p.link ?? "#"}
                        target="_blank"
                        rel="nofollow noopener noreferrer sponsored"
                        className="text-[var(--brand-gold)] font-bold hover:underline whitespace-nowrap text-sm"
                      >
                        View Offer →
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-xs sm:text-sm whitespace-nowrap">
                        Not Rec.
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mb-8">{data.methodologyNote}</p>

        {winner && <WinnerCard p={winner} />}
        {rest
          .slice()
          .sort((a, b) => a.rank - b.rank)
          .map((p) => (
            <RunnerUpCard key={p.rank} p={p} />
          ))}

        {data.references && data.references.length > 0 && (
          <div className="mt-10 border-t pt-5">
            <h2 className="text-lg font-bold text-[var(--brand-navy)] mb-3" style={serif}>
              References
            </h2>
            <ol className="space-y-1.5">
              {data.references.map((r, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {i + 1}. {r}
                </li>
              ))}
            </ol>
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-8 leading-relaxed border-t pt-5">
          {data.disclaimer}
        </p>
      </article>
    </>
  );
}
