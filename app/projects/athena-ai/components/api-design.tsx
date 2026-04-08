const beforeIssues = [
  "Slowest metric blocks entire page",
  "One failure = full page error",
  "Can't cache metrics independently",
]

const afterBenefits = [
  "Each card renders as soon as its data arrives",
  "Failed card shows error in isolation",
  "Independent TanStack Query cache per metric",
]

const afterEndpoints = [
  "GET /api/card/credit-score/{household_id}",
  "GET /api/card/credit-score-history/{household_id}",
  "GET /api/card/credit/utilization/{household_id}",
  "GET /api/card/credit/on-time-payment/{household_id}",
]

export function BeforeAfterAPI() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {/* Before */}
      <div className="border border-red-900 rounded-xl overflow-hidden">
        <div className="px-4 py-2.5 bg-red-100 text-sm font-medium text-red-600">
          Before — Page-level response
        </div>
        <div className="p-4 space-y-3">
          <div className="bg-muted rounded-lg px-3 py-2 text-xs font-mono text-muted-foreground">
            GET /api/credit-score-page/{"{household_id}"}
          </div>
          <pre className="text-xs font-mono text-muted-foreground leading-relaxed bg-muted rounded-lg px-3 py-2 whitespace-pre-wrap">{`{
  score: 825,
  history: [...],
  utilization: 5%,
  onTimePayment: 98%,
  derogatory: [...],
  summary: {...}
}`}</pre>
          <div className="space-y-1.5 pt-1">
            {beforeIssues.map((issue) => (
              <div key={issue} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                {issue}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* After */}
      <div className="border border-green-900 rounded-xl overflow-hidden">
        <div className="px-4 py-2.5 bg-green-100 text-sm font-medium text-green-600">
          After — Per-card endpoints
        </div>
        <div className="p-4 space-y-3">
          {afterEndpoints.map((ep) => (
            <div key={ep} className="bg-muted rounded-lg px-3 py-2 text-xs font-mono text-muted-foreground">
              {ep}
            </div>
          ))}
          <div className="bg-muted rounded-lg px-3 py-2 text-xs font-mono text-muted-foreground opacity-50">
            + 3 more parallel requests
          </div>
          <div className="space-y-1.5 pt-1">
            {afterBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}