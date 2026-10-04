import { useMemo, useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import Header from './components/Header'
import Instructions from './components/Instructions'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'

// A unique id generator for tasks (no external library needed).
const createId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

// A couple of starter tasks so the page isn't empty on first load.
const initialTasks = [
  { id: createId(), text: 'Read the lab instructions', done: true },
  { id: createId(), text: 'Build the to-do list with React', done: false },
]

function App() {
  // --- Core React state ---------------------------------------------------
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  // --- Feature 1: Add a task dynamically ----------------------------------
  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: createId(), text, done: false }])
    setFilter('all')
  }

  // --- Feature 2: Toggle a task between Done / Not Done -------------------
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  // --- Feature 3: Delete a single task ------------------------------------
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  // --- Feature 4: Clear completed / reset the whole list ------------------
  const clearDone = () => {
    setTasks((prev) => prev.filter((task) => !task.done))
  }

  const resetAll = () => {
    setTasks([])
  }

  // --- Derived values (recomputed only when tasks change) -----------------
  const doneCount = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks],
  )

  const visibleTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((task) => !task.done)
    if (filter === 'done') return tasks.filter((task) => task.done)
    return tasks
  }, [tasks, filter])

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-12">
      <Header />

      {/* Main to-do interface */}
      <main className="flex flex-col gap-6">
        <section
          aria-label="To-do list"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <AddTaskForm onAddTask={addTask} />

          <div className="mt-6 flex flex-col gap-4">
            <TaskStats total={tasks.length} done={doneCount} />
            <TaskFilter filter={filter} onChange={setFilter} />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-900">My Tasks</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={clearDone}
                  disabled={doneCount === 0}
                  className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition
                    hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Clear Done
                </button>
                <button
                  type="button"
                  onClick={resetAll}
                  disabled={tasks.length === 0}
                  className="rounded-lg border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-700 transition
                    hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Reset All
                </button>
              </div>
            </div>

            <TaskList
              tasks={visibleTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </div>
        </section>

        {/* Required Instructions / User Guide section */}
        <Instructions />
      </main>

      <footer className="pb-2 text-center text-xs text-slate-400">
        Built with React, Vite &amp; Tailwind CSS · TodoThis
      </footer>
    </div>
  )
}

export default App
