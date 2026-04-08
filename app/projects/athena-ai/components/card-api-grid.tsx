const creditCards = [
  { endpoint: "/api/card/credit-score/{id}", name: "Credit Score", desc: "Primary score with context header for personalization" },
  { endpoint: "/api/card/credit-score-history/{id}", name: "Score History", desc: "Historical trend data for chart visualization" },
  { endpoint: "/api/card/credit-score-summary/{id}", name: "Score Summary", desc: "Aggregated summary with improvement recommendations" },
  { endpoint: "/api/card/credit/utilization/{id}", name: "Credit Utilization", desc: "Current utilization rate with status indicator" },
  { endpoint: "/api/card/credit/on-time-payment/{id}", name: "On-Time Payment", desc: "Payment history percentage and streak" },
  { endpoint: "/api/card/credit/derogatory/{id}", name: "Derogatory Marks", desc: "Negative items affecting credit score" },
  { endpoint: "/api/card/credit/length/{id}", name: "Credit Length", desc: "Age of oldest and average account" },
  { endpoint: "same pattern", name: "Debt, Investment...", desc: "Same /api/card/{metric} pattern across all domains", isPlaceholder: true },
]

export function CreditCardGrid() {
  return (
    <div className="mt-4">
      <p className="text-md text-gray-700 mb-3">
        Credit score page — 7 independent endpoints
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {creditCards.map((card) => (
          <div
            key={card.endpoint}
            className={`border border-border rounded-xl bg-white p-4 ${card.isPlaceholder ? "opacity-40" : ""}`}
          >
            <span className={`inline-block text-xs font-mono px-2.5 py-1 rounded-md mb-3 ${card.isPlaceholder ? "bg-muted text-muted-foreground" : "bg-blue-100 text-blue-700"}`}>
              {card.endpoint}
            </span>
            <p className="text-sm font-medium text-foreground mb-1">{card.name}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}