import TaskItem from './TaskItem'

/**
 * TaskList
 * Maps over the tasks array and renders a TaskItem for each one.
 * Shows an empty state when there are no tasks.
 */
function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
        <p className="text-4xl" aria-hidden="true">📝</p>
        <p className="mt-3 font-semibold text-slate-700">No tasks yet</p>
        <p className="text-sm text-slate-500">Add your first task using the form above.</p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
