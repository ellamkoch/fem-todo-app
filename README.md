
# Frontend Mentor – Todo App

This is my solution to the Frontend Mentor Todo App challenge, originally completed as part of CodeX (Week 5, Level 3) and later refactored for portfolio use.

The project is a frontend React application focused on state management, component structure, and responsive layout.

---

## Links

- Live Site: https://emk-fem-todo-app.netlify.app/
- Repository: https://github.com/ellamkoch/fem-todo-app

---

## The Challenge

Users can:

- Add, complete, and delete todos
- Filter tasks by All / Active / Completed
- Clear completed tasks
- Toggle between light, dark, and system themes
- Persist tasks between visits using localStorage

---

## Built With

- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS
- shadcn/ui
- localStorage

---

## Running the Project Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/ellamkoch/fem-todo-app.git
cd fem-todo-app
npm install
npm run dev
```


The app runs at:

[http://localhost:5173](http://localhost:5173)

## Project Overview

This project was refactored from a Supabase-backed version to a frontend-only application using localStorage.

The refactor focused on simplifying the architecture and improving clarity, while keeping the UI aligned with the original Frontend Mentor design.


## Technical Focus

* Client-side state management with React hooks
* Local persistence using localStorage
* Component-based structure
* Separation of UI and task logic
* Responsive layout using Tailwind

## Development Notes

* Removed backend dependency (Supabase) to simplify the project
* Consolidated styling with Tailwind and shared components
* Refactored layout and components for consistency
* Updated layout for mobile responsiveness


## Continued Development

* Add drag-and-drop task reordering
* Improve accessibility
* Optionally reintroduce a backend for syncing


## Acknowledgments

Challenge by Frontend Mentor:

[https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)
