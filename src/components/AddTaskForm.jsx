import { useState } from 'react'

/**
 * AddTaskForm
 * A controlled form used to add a new task to the list.
 * Demonstrates React state (`useState`) and form/button event handling.
 */
function AddTaskForm({ onAddTask }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  // Runs when the form is submitted (Add Task button or Enter key).
  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = text.trim()

    if (!trimmed) {
      setError('Please type a task before adding it.')
      return
    }

    onAddTask(trimmed) // Lift the new task up to the parent (App) state.
    setText('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="new-task" className="block text-sm font-semibold text-slate-700 mb-2">
        What needs to be done?
      </label>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="new-task"
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value)
            if (error) setError('')
          }}
          placeholder="e.g. Finish the React lab"
          className={`flex-1 rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
            ${error ? 'border-rose-400' : 'border-slate-300'}`}
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition
            hover:bg-indigo-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <span aria-hidden="true" className="text-lg leading-none">+</span>
          Add Task
        </button>
      </div>

      {error && (
        <p role="alert" className="mt-2 text-sm font-medium text-rose-600">
          {error}
        </p>
      )}
    </form>
  )
}

export default AddTaskForm
