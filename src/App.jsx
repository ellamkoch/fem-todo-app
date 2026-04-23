/**
 * Root application component.
 * Renders the router inside the shared layout.
 * @see MainLayout - Provides header/footer structure
 * @see AppRouter - Handles page routing
 */
import MainLayout from '@components/layout/MainLayout.jsx';
import AppRouter from '@/router/AppRouter.jsx';

export default function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}
