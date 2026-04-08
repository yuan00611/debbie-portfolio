const flowSteps = [
  {
    num: 1,
    title: "Optimistic insert",
    detail: "Before the request fires, a temp item is inserted into the cache with status: 'pending'. The user sees their message immediately with a loading spinner — zero perceived latency.",
    code: `tempId = "temp/uuid-v4"\nquery.setData([...items, { meta: { status: 'pending' }, history: { user_message } }])`,
  },
  {
    num: 2,
    title: "Initial JSON chunk",
    detail: "The first newline-delimited chunk contains metadata — the real chat_id, display_item type, and status upgrade to 'streaming'. The right panel starts loading its lazy component immediately.",
    code: `Chunk 1: {"chat_id":"abc","display_item":{"id":"net_worth_history",...}}\\n\n→ replace tempId → set status: 'streaming' → load display component`,
  },
  {
    num: 3,
    title: "Token streaming",
    detail: "Every subsequent chunk is a raw text token. Each token appends to the response string and triggers a cache update — creating the typewriter effect.",
    code: `onStreamText(token) → response.response += token → query.setData() × N tokens`,
  },
  {
    num: 4,
    title: "Completion + error handling",
    detail: "On done: status → 'idle', rating buttons enabled, next-suggested-questions invalidated. On error: status → 'error' with retryable flag and Alert UI.",
    code: `onDone() → status: 'idle' → invalidate('next-suggested-question')\nonError() → errorType: SERVER_ERROR | UNKNOWN_ERROR → retry button`,
  },
]

export function StreamingFlow() {
  return (
    <div className="space-y-0 my-4">
      {flowSteps.map((step, i) => (
        <div key={step.num} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-500 flex items-center justify-center text-sm font-medium text-blue-600 flex-shrink-0">
              {step.num}
            </div>
            {i < flowSteps.length - 1 && (
              <div className="w-px flex-1 bg-border my-1" />
            )}
          </div>
          <div className="pb-8">
            <p className="text-base font-medium text-foreground my-1">{step.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{step.detail}</p>
            <pre className="text-xs font-mono bg-muted rounded-lg px-4 py-3 text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {step.code}
            </pre>
          </div>
        </div>
      ))}
    </div>
  )
}