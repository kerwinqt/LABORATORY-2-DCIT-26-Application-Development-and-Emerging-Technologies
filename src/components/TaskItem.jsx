/**
 * TaskItem
 * Renders a single task row. Receives the task plus callbacks for
 * toggling its status and deleting it.
 */
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`group flex items-start gap-3 rounded-xl border p-3 shadow-sm transition sm:items-center
        ${task.done ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white hover:border-indigo-200'}`}
    >
      {/* Checkbox also toggles status for a quick interaction */}
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.text}" as ${task.done ? 'not done' : 'done'}`}
        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-300 text-emerald-600 focus:ring-emerald-300 sm:mt-0"
      />

      <div className="min-w-0 flex-1">
        <p
          className={`break-words text-[15px] font-medium leading-snug
            ${task.done ? 'text-slate-500 line-through' : 'text-slate-800'}`}
        >
          {task.text}
        </p>

        <span
          className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold
            ${task.done
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-amber-100 text-amber-700'}`}
        >
          {task.done ? 'Done' : 'Not Done'}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className={`rounded-lg px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2
            ${task.done
              ? 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-300'
              : 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-300'}`}
        >
          {task.done ? 'Not Done' : 'Done'}
        </button>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="rounded-lg bg-rose-100 px-3 py-2 text-xs font-semibold text-rose-700 transition
            hover:bg-rose-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
