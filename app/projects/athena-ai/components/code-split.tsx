const splitStrategies = [
  {
    badge: "Current",
    badgeStyle: "bg-green-100 text-green-800",
    title: "All 24 lazy",
    text: "Smallest initial bundle. Each display loads on first use. Trade-off: brief Suspense fallback on first render.",
  },
  {
    badge: "Improvement",
    badgeStyle: "bg-blue-100 text-blue-800",
    title: "Prefetch on onInitialJson",
    text: "When the first chunk arrives with display_item.id, trigger import() immediately. By the time streaming ends, the component is already loaded.",
  },
  {
    badge: "Alternative",
    badgeStyle: "bg-amber-100 text-amber-800",
    title: "Eager load top 5",
    text: "Pre-bundle the most common displays (net_worth, credit, debt, investment). Adds ~50-100KB to initial bundle for zero-delay on common cases.",
  },
]

export function CodeSplittingCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
      {splitStrategies.map((s) => (
        <div key={s.title} className="border border-border rounded-xl p-4 bg-background">
          <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 ${s.badgeStyle}`}>
            {s.badge}
          </span>
          <p className="text-sm font-medium text-foreground mb-2">{s.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
        </div>
      ))}
    </div>
  )
}