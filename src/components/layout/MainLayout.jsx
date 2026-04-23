/**
 * Main layout wrapper.
 * @see Header - App header with theme toggle
 * @see Footer - App footer
 * @see HeroBackground - Top background image
 * @see useTheme - Accesses theme state
 */
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import HeroBackground from '@components/layout/HeroBackground';
import { useTheme } from '@hooks/useTheme';

function MainLayout({ children }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div className="min-h-screen bg-background ">
      <HeroBackground isDark={isDark} />

      <div className="-mt-[300px] mb-15 relative z-75 pointer-events-auto">
        <div className="mx-auto w-full max-w-lg pt-5">
          <Header />
        </div>
      </div>

      <div className="list_container -mt-16 relative z-10">
        <div className="mx-auto w-full max-w-lg pt-10">{children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
