# fem-todo-app

This is the repo for the Front End Mentor To Do App Challenge for Week 5, Level 3 assignment with CodeX.

## Project Structure

## Project Status

This project is currently in progress.

It is being updated from a Supabase + React task list into a styled Todo application based on the Frontend Mentor Todo App challenge.

### Current Progress

* Migrated styling from Bootstrap/SCSS toward **Tailwind CSS**
* Installed and configured **shadcn UI**
* Added reusable UI components (Button, Checkbox, Input)
* Introduced path aliases using `jsconfig.json` and Vite
* Updated Supabase Row Level Security (RLS) policies to support UI interactions
* Cleaned up legacy Bootstrap dependencies and loaders
* Updated lint scripts to support JSX and Tailwind-generated CSS
* Implemented a global **theme system** (light / dark / system) using React Context
* Persisted theme preference using localStorage
* Connected Tailwind dark mode via the `dark` class on the document root
* Aligned existing SCSS styles with theme tokens for theme-aware backgrounds and text
* Refactored task UI into focused, reusable components (TaskList, TaskItem, TaskControls, Filters, TasksLeft)
* Implemented **Clear Completed** functionality with Supabase + local state synchronization
* Centralized task data logic in a custom `useTasks` hook
* Integrated shadcn UI components into core interactions (buttons, inputs, checkboxes)
* Refined layout and spacing to more closely match the Frontend Mentor design, focusing on tighter vertical rhythm and reduced padding
* Resolved interaction and layering issues between the hero background and interactive UI elements
* Improved accessibility with ARIA attributes and non-intrusive UI hints (tooltips)

Some Stylelint warnings remain related to Tailwind/shadcn-specific at-rules. These are expected with the current configuration and do not affect application functionality. They will be addressed once styling work is finalized.

## **Tech Stack**

- React (Vite)
- Supabase
- Tailwind CSS
- shadcn UI
- SCSS (legacy styles, gradually being aligned with theme tokens)

## Live Demo

Coming soon

## Resources

* Supabase Documentation - [https://supabase.com/docs/guides](https://supabase.com/docs/guides)
* React documentation - [https://react.dev/reference/react](https://react.dev/reference/react)
* Frontend Mentor Todo App Challenge: [https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)
* Shadcn/UI documentation - [https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

