/**
 * Application router.
 * Defines routes for the main pages.
 * @see TaskList - Main todo list page
 * @see AboutPage - About information page
 * @see NotFoundPage - 404 fallback page
 */
import { Routes, Route } from 'react-router-dom';
import AboutPage from '@pages/AboutPage';
import NotFoundPage from '@pages/NotFoundPage';
import TaskList from '@components/tasks/TaskList';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default AppRouter;
