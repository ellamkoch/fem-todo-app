# Frontend Mentor – Todo App

This is my solution to the **Frontend Mentor Todo App challenge** , completed as part of **CodeX – Week 5, Level 3** , with additional testing work completed in **Week 6** .

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

## Week 6 – Testing & Coverage

As part of **CodeX – Week 6** , this project was extended to focus on testing fundamentals and code quality. The work for this week built directly on the existing Frontend Mentor Todo App and introduced testing as an additional layer, rather than a rewrite of the application.

The emphasis was on understanding how and why different types of tests are used in a React project, and on writing tests that validate behavior without relying on implementation details.

---

## Testing Setup

Testing in this project is handled using **Vitest** , which integrates natively with Vite and supports Jest-style syntax. While **Jest** was demonstrated during instruction to introduce common testing patterns (matchers, snapshots, mocking), all tests in this project are executed using Vitest.

The testing setup includes:

* Vitest as the test runner
* @testing-library/react for component testing
* @testing-library/jest-dom for extended DOM assertions
* jsdom for a simulated browser environment

---

## Test Organization

Tests are organized under a dedicated `test/` directory to keep concerns clearly separated:

* `components/` – component-level UI tests (Header and Footer)
* `hooks/` – tests for custom hooks, including `useTasks`
* `snapshots/` – snapshot-related test files
* `setupTests.js` – shared test configuration and setup logic

This structure reflects how tests are typically organized in larger projects and helps keep unit, component, and hook tests easy to locate and reason about.

---

## Unit Testing (Homework)

As part of the Week 6 homework, unit tests were written for simple arithmetic functions. The initial addition test was provided during instruction, and the remaining tests for subtraction, multiplication, and division were implemented independently.

These tests were used to reinforce core testing concepts such as arranging test data, making assertions, and validating expected outcomes. All arithmetic tests pass successfully using Vitest.

---

## Component Testing (Homework)

Component testing was also part of the Week 6 homework. A test was written for the Footer component to verify that required attribution text renders correctly.

The component is rendered in isolation using React Testing Library, and assertions are made against visible text content. This mirrors the approach previously used when testing the Header component and reinforces testing components from the user’s perspective rather than inspecting internal structure.

### Component Testing (Guided In-Class Example)

In addition to the homework-based Footer test, component testing was demonstrated in class using the Header component. This walkthrough focused on testing a component that depends on shared application state and side effects.

The Header tests verify:

* Core UI elements render correctly
* The theme toggle button updates its label based on the active theme
* The `<html>` element’s class list changes when the theme is toggled
* The selected theme value is persisted to `localStorage`

To support this, a small test utility (`renderWithTheme`) was introduced to wrap components in the `ThemeProvider` during tests. This allowed theme-dependent behavior to be tested without modifying the component itself.

These tests intentionally treat the Header as a black box, asserting against user-visible behavior and DOM side effects rather than internal implementation details.

---

## Hook Testing and Mocking

The `useTasks` custom hook was tested by mocking the Supabase client and observing behavior through a minimal test harness component.

These tests cover:

* Loading tasks on mount (success and error scenarios)
* Adding a task and updating local state
* Toggling task completion
* Deleting a task
* Handling errors when task creation fails

Supabase is mocked at the module level to avoid real database access. This allows the hook’s logic and state management to be tested in isolation while still validating observable behavior in the UI.

---

## Running Tests

The following commands are available for running tests locally:

`npm run test`

`npm run test:run`

`npm run test:watch`


---

## Coverage

Coverage reporting is handled using Vitest’s built-in coverage support.

`npm run test:coverage`


Coverage was used primarily as a learning tool to understand which parts of the codebase were exercised by tests, rather than as a metric to optimize for coverage percentages alone.

---

## End-to-End Testing (Cypress)

End-to-end testing concepts were introduced during Week 6 using Cypress, including how E2E tests differ from unit and component tests and where they fit into a broader testing strategy.

Cypress scripts are present in the project configuration; however, Cypress was not fully configured successfully in this implementation, and E2E tests were not completed. The focus for this submission remains on unit and component testing using Vitest.

---

## Week 6 Takeaways

* Vitest provides a smooth testing experience in Vite-based projects while supporting familiar Jest-style patterns
* Unit tests are well suited for simple, predictable logic
* Component tests are most effective when written from the user’s perspective
* Mocking external services is essential for reliable and isolated tests
* Coverage is useful for visibility, but meaningful tests matter more than raw numbers
* End-to-end testing complements unit and component testing, even when not fully implemented

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



