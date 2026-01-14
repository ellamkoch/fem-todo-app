# Frontend Mentor – Todo App

This is my solution to the **Frontend Mentor Todo App challenge** , completed as part of **CodeX – Week 5, Level 3** .

The project focuses on building a fully functional, theme-aware todo application using React, Supabase, and a component-driven styling approach.

The goal was to closely match the Frontend Mentor desktop design while keeping the codebase clean, readable, and maintainable.

---

## Links

* **Live Site:** [https://emk-fem-todo-app.netlify.app/](https://emk-fem-todo-app.netlify.app/)]
* **Repository:** [https://github.com/ellamkoch/fem-todo-app](https://github.com/ellamkoch/fem-todo-app)

---

## The Challenge

Users should be able to:

* Add, complete, and delete todos
* Filter tasks by **All / Active / Completed**
* Clear all completed tasks
* Toggle between **light, dark, and system** themes
* Persist tasks using a backend (Supabase)
* Experience consistent UI behavior across themes

---

## Built With

* React (Vite)
* Supabase (database + Row Level Security)
* Tailwind CSS
* shadcn/ui
* CSS theme tokens
* Frontend Mentor design assets

---

## Running the Project Locally

To run this project locally:

1. Clone the repository using the project’s GitHub URL.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in the project root and add the following environment variables:

   `VITE_SUPABASE_URL=your_supabase_url`

   `VITE_SUPABASE_ANON_KEY=your_supabase_anon_key`
4. Start the development server by running `npm run dev`.

The application will be available at `http://localhost:5173`.

## My Process

This project started as a Supabase task list and evolved into a Frontend Mentor–style application through multiple refactors.

Key focus areas included:

* Migrating from legacy SCSS and Bootstrap styling to Tailwind and shadcn
* Create at least 5 styled components from the app that was built in class
* Centralizing theme behavior using CSS variables and tokens
* Refactoring components to reduce duplicated styles and conflicting utilities
* Fixing subtle UI issues caused by inherited defaults (hover states, spacing, font sizing)
* Cleaning up layout behavior by adjusting shared component defaults instead of adding overrides

A final cleanup pass focused on removing redundant Tailwind classes and ensuring styles were handled at the appropriate level (layout, component, or token).

---

## What I Learned

* Small default styles in shared components can introduce unexpected visual spacing or hover behavior
* Fixing UI issues at the source (tokens or base components) is more reliable than stacking overrides
* Theme tokens such as `foreground`, `muted-foreground`, and `accent-foreground` should be used intentionally based on context
* Centralizing responsibilities (for example, typography controlled by a parent component) simplifies maintenance
* Light and dark mode issues are often token or inheritance related rather than component logic issues
* How CSS tooling and linters can unintentionally conflict with Tailwind setups, particularly around modern at-rules and package-based imports.
* How to evaluate linter warnings in the context of framework-driven CSS, and when it is appropriate to leave them unresolved to avoid breaking a working build.
* How to use <> which is a React Fragment, to group elements without a wrapper.
* Store repeated Tailwind class names in variables to reduce duplication and make active vs inactive states easier to read.

---

## Continued Development

If I revisit this project, I would:

* Add drag-and-drop task reordering
* Add mobile styling

---

## Useful Resources

* Frontend Mentor challenge documentation [https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)
* shadcn/ui component patterns [https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)
* Tailwind CSS utility and token documentation [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* Tailwind Crash Course [https://www.youtube.com/watch?v=dFgzHOX84xQ](https://www.youtube.com/watch?v=dFgzHOX84xQ)
* React & Tailwind CSS Image Gallery [https://www.youtube.com/watch?v=FiGmAI5e91M](https://www.youtube.com/watch?v=FiGmAI5e91M)
* React documents [https://react.dev/reference/react](https://react.dev/reference/react)
* Thinking in React for breaking down the UI into components [https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy](https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy)

