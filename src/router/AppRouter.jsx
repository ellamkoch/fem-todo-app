/**AppRouter.jsx
 * This file does the routing for the pages in the App
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
