/**
 * TaskStats
 * Small summary panel showing total, done and not-done counts.
 * Demonstrates deriving values from React state.
 */
function TaskStats({ total, done }) {
  const notDone = total - done
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)

  const cards = [
    { label: 'Total', value: total, accent: 'text-indigo-600' },
    { label: 'Done', value: done, accent: 'text-emerald-600' },
    { label: 'Not Done', value: notDone, accent: 'text-amber-600' },
  ]

  return (
    <section
      aria-label="Task summary"
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="grid grid-cols-3 gap-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl bg-slate-50 p-3 text-center">
            <p className={`text-2xl font-bold ${card.accent}`}>{card.value}</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {card.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </section>
  )
}

export default TaskStats
