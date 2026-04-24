/**
 * Main layout wrapper.
 * @see Header - App header with theme toggle
 * @see Footer - App footer
 * @see HeroBackground - Top background image
 * @see useTheme - Accesses theme state
 */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import HeroBackground from '@components/layout/HeroBackground';
import { useTheme } from '@hooks/useTheme';

function MainLayout({ children }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <HeroBackground isDark={isDark} />

      <div className="relative z-75 mb-15 -mt-[300px] pointer-events-auto">
        <div className="mx-auto w-full max-w-lg px-4 pt-5 sm:px-5">
          <Header />
        </div>
      </div>

      <div className="list_container relative z-10 -mt-16">
        <div className="mx-auto w-full max-w-lg px-4 pt-8 sm:px-5 sm:pt-10">{children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
