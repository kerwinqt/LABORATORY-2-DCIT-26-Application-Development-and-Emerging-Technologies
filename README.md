# TodoThis — React To-Do List

A responsive to-do list web app built with **React**, **Vite** and **Tailwind CSS**.
This project was created for the Website Development lab (React structure,
Tailwind styling, React state & event handling, and component organization).

## ✨ Features

- **Add tasks dynamically** — type in the input and click **Add Task** (or press Enter).
- **Done / Not Done status** — every task shows a status badge; toggle it with the
  status button or the checkbox.
- **Delete tasks** — remove any single task with the red **Delete** button.
- **Clear Done / Reset All** — bulk-clear completed tasks or wipe the whole list.
- **Filter** — view **All**, **Not Done**, or **Done** tasks.
- **Live stats & progress bar** — totals update as you work.
- **Instructions / User Guide** — an on-page section explaining how to use it.
- **Fully responsive** — works on phones, tablets and desktops.

## 🧩 Project structure

```
src/
├── App.jsx                  # Holds all state + handlers, composes the page
├── main.jsx                 # React entry point
├── index.css                # Tailwind import + base styles
└── components/
    ├── Header.jsx           # Page title / hero
    ├── AddTaskForm.jsx      # Controlled input + Add Task button
    ├── TaskList.jsx         # Renders list / empty state
    ├── TaskItem.jsx         # Single task row (status + delete)
    ├── TaskFilter.jsx       # All / Not Done / Done filter
    ├── TaskStats.jsx        # Totals + progress bar
    └── Instructions.jsx     # User guide section
```

## 🧠 React concepts used

- `useState` for the task list, the filter and the input value.
- `useMemo` for derived values (counts and filtered list).
- Lifting state up: `AddTaskForm` and `TaskItem` receive callbacks from `App`.
- Event handling: `onSubmit`, `onChange`, `onClick`.
- Immutable state updates with `.map`, `.filter` and the spread operator.

## 🚀 Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## ✅ Browser testing checklist

Open `http://localhost:5173` and verify:

1. **Add** — a task appears in the list after clicking **Add Task**.
2. **Done / Not Done** — the status badge and strike-through change when toggled.
3. **Delete** — the task disappears immediately.
4. **Clear Done / Reset All** — completed tasks (or all tasks) are removed.
5. **Filter** — All / Not Done / Done show the correct subsets.
6. **Responsive** — resize the window (or use device emulation): the input and
   Add button stack vertically on small screens and sit side by side on larger ones.
7. **Validation** — adding an empty task shows a friendly error message.
