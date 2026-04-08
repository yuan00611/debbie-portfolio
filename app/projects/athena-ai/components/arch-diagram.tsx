

const leftItems = [
  { text: "ChatHistoryManager", level: 0 },
  { text: "ChatList → ListItem", level: 1, prefix: "└" },
  { text: "Query message", level: 2, prefix: "├" },
  { text: "Response (streaming)", level: 2, prefix: "├" },
  { text: "Rating buttons", level: 2, prefix: "└" },
  { text: "QuickQueries", level: 0 },
  { text: "ChatBar (input)", level: 0 },
]

const rightItems = [
  { text: "DisplayRegistry", level: 0 },
  { text: "24 lazy components", level: 1, prefix: "└" },
  { text: "NetWorthHistory", level: 2, prefix: "├" },
  { text: "Credit / Debt", level: 2, prefix: "├" },
  { text: "Investment", level: 2, prefix: "├" },
  { text: "RetirementProjection", level: 2, prefix: "└" },
  { text: "DefaultDisplay (fallback)", level: 0 },
  { text: "Hidden on mobile", level: 1 },
]

function TreeItem({ text, level = 0, prefix }: { text: string; level?: number; prefix?: string }) {
  return (
    <div
      className="flex items-start gap-1 text-sm text-muted-foreground leading-relaxed"
      style={{ paddingLeft: `${level * 16}px` }}
    >
      {prefix && (
        <span className="font-mono text-muted-foreground/50 flex-shrink-0">{prefix}</span>
      )}
      <span className={level === 0 ? "font-medium text-foreground" : ""}>{text}</span>
    </div>
  )
}

export function ArchDiagram() {
  return (
    <div className="border border-border rounded-xl overflow-hidden mt-4">
      {/* Header */}
      <div className="bg-muted px-4 py-2 text-xs text-muted-foreground font-medium">
        twoPanel.tsx — top-level layout
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
        {/* Left panel */}
        <div className="p-4 space-y-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">ChatController (left)</span>
          </div>
          {leftItems.map((item, i) => (
            <TreeItem key={i} {...item} />
          ))}
          <div className="pt-2">
            <span className="text-xs text-green-600 dark:text-green-400">
              ErrorBoundary wraps panel
            </span>
          </div>
        </div>

        {/* Right panel */}
        <div className="p-4 space-y-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-500 flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">DisplayPanel (right)</span>
          </div>
          {rightItems.map((item, i) => (
            <TreeItem key={i} {...item} />
          ))}
          <div className="pt-2">
            <span className="text-xs text-green-600 dark:text-green-400">
              ErrorBoundary wraps panel
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
