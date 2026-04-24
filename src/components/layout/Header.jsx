/**
 * App header with title, navigation, and theme toggle.
 * @see ThemeToggle - Theme switch button
 * @see NavButtons - Navigation links
 * @see useTheme - Accesses theme state
 */
import NavButtons from '@components/shared/NavButtons.component';
import ThemeToggle from '@components/shared/ThemeToggle.component';
import Heading from '@components/shared/Heading.component';
import { useTheme } from '@hooks/useTheme';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleThemeChange = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="app-header relative z-75 mx-auto flex w-full max-w-lg flex-wrap items-center justify-between gap-3 pt-8 sm:gap-4 sm:pt-10 md:flex-nowrap md:pt-16">
      <Heading hLevel={1} className="text-3xl font-semibold tracking-[0.25em] text-white sm:text-4xl sm:tracking-[0.4em]">
        TODO
      </Heading>
      <NavButtons />
      <ThemeToggle isDark={isDark} onToggle={handleThemeChange} />
    </header>
  );
}
