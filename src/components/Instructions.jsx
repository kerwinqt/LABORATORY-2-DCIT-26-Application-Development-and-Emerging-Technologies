/**
 * Instructions
 * Static user guide explaining how to use the to-do list.
 */
const steps = [
  {
    icon: '➕',
    title: 'How to add a task',
    body: 'Type your task into the text box at the top of the page, then click the "Add Task" button (or press Enter). The task appears in the list below.',
  },
  {
    icon: '✅',
    title: 'How to mark a task as Done or Not Done',
    body: 'Click the "Done" button on a task to mark it complete, or the "Not Done" button to move it back. You can also tick or untick the checkbox next to a task.',
  },
  {
    icon: '🗑️',
    title: 'How to delete a task',
    body: 'Click the red "Delete" button on the task you want to remove. It disappears from the list immediately.',
  },
  {
    icon: '🧹',
    title: 'Clearing and resetting',
    body: 'Use "Clear Done" to remove every completed task, or "Reset All" to wipe the whole list and start fresh.',
  },
]

function Instructions() {
  return (
    <section
      id="instructions"
      aria-labelledby="instructions-heading"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 id="instructions-heading" className="text-xl font-bold text-slate-900">
        Instructions / User Guide
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Follow these simple steps to manage your to-do list.
      </p>

      <ol className="mt-5 flex flex-col gap-4">
        {steps.map((step) => (
          <li key={step.title} className="flex gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg"
            >
              {step.icon}
            </span>
            <div>
              <h3 className="font-semibold text-slate-800">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Instructions
