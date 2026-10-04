/**
 * Header
 * Page title and short description.
 */
function Header() {
  return (
    <header className="text-center sm:text-left">
      <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
        <span aria-hidden="true">⚛️</span> React + Tailwind CSS
      </div>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Todo<span className="text-indigo-600">List</span>
      </h1>
      <p className="mt-2 text-slate-600">
        A simple, responsive to-do list to help you plan and finish your day.
      </p>
    </header>
  )
}

export default Header
