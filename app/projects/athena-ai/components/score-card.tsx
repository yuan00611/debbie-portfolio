type Verdict = "Correct" | "Acceptable" | "Monitor" | "Gap"

const scorecardData: { decision: string; verdict: Verdict; reason: string }[] = [
  { decision: "HTTP Streaming over WebSocket", verdict: "Correct", reason: "Chat is one-way — no server push needed" },
  { decision: "ErrorBoundary per panel", verdict: "Correct", reason: "Left/right panel crash isolation" },
  { decision: "Full retry on stream error", verdict: "Correct", reason: "LLM responses can't resume mid-stream" },
  { decision: "All 24 displays lazy-loaded", verdict: "Correct", reason: "Could add prefetch on onInitialJson" },
  { decision: "RQ cache as streaming buffer", verdict: "Acceptable", reason: "Works, but setData bypasses fetch lifecycle" },
  { decision: "Per-token setData", verdict: "Monitor", reason: "React 18 batching helps — profile if slow" },
  { decision: "No AbortController", verdict: "Gap", reason: "Stale streams not cancelled on re-ask" },
]

const verdictStyles: Record<Verdict, string> = {
  Correct: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  Acceptable: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  Monitor: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  Gap: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
}

export function Scorecard() {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_2fr] px-4 py-2.5 bg-muted text-xs text-muted-foreground font-medium gap-4">
        <span>Decision</span>
        <span>Verdict</span>
        <span>Key reason</span>
      </div>

      {/* Rows */}
      {scorecardData.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-[2fr_1fr_2fr] px-4 py-3.5 border-t border-border gap-4 items-center"
        >
          <span className="text-sm text-foreground">{row.decision}</span>
          <span>
            <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${verdictStyles[row.verdict]}`}>
              {row.verdict}
            </span>
          </span>
          <span className="text-sm text-muted-foreground">{row.reason}</span>
        </div>
      ))}
    </div>
  )
}