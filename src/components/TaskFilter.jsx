/**
 * TaskFilter
 * Lets the user view All / Active / Done tasks.
 * Demonstrates state-driven conditional rendering.
 */
const options = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Not Done' },
  { value: 'done', label: 'Done' },
]

function TaskFilter({ filter, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filter tasks"
      className="flex rounded-xl bg-slate-100 p-1"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={filter === option.value}
          className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition
            ${filter === option.value
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default TaskFilter
