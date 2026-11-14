function Row({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// `score` is on a 0–5 scale.
export function RatingStars({
  score,
  hideValue = false,
}: {
  score: number;
  hideValue?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, (score / 5) * 100));
  return (
    <div className="flex items-center gap-1">
      <div className="relative inline-block">
        <Row className="text-gray-200" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
          <Row className="text-[var(--brand-gold)]" />
        </div>
      </div>
      {!hideValue && (
        <span className="text-sm font-semibold text-muted-foreground ml-1">{score}/5</span>
      )}
    </div>
  );
}
