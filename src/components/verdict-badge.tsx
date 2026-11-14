type Verdict = "legit" | "scam" | "mixed" | "inconclusive";

const config: Record<Verdict, { label: string; className: string; icon: string }> = {
  legit: {
    label: "Legit",
    icon: "✓",
    className: "bg-green-100 text-green-800 border-green-200",
  },
  scam: {
    label: "Likely Scam",
    icon: "✗",
    className: "bg-red-100 text-red-800 border-red-200",
  },
  mixed: {
    label: "Mixed Evidence",
    icon: "~",
    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
  },
  inconclusive: {
    label: "Inconclusive",
    icon: "?",
    className: "bg-gray-100 text-gray-700 border-gray-200",
  },
};

export function VerdictBadge({ verdict }: { verdict: Verdict }) {
  const c = config[verdict];
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase border px-2 py-0.5 rounded-sm ${c.className}`}
    >
      <span>{c.icon}</span>
      {c.label}
    </span>
  );
}
