/**
 * App header with title, navigation, and theme toggle.
 * @see ThemeToggle - Theme switch button
 * @see NavButtons - Navigation links
 * @see useTheme - Accesses theme state
 */
import ThemeToggle from '@components/shared/ThemeToggle.component';
import Heading from '@components/shared/Heading.component';
import { useTheme } from '@hooks/useTheme';
import NavButtons from '@components/shared/NavButtons.component';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const handleThemeChange = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="app-header relative z-75 pointer-events-auto mx-auto flex w-full max-w-lg items-center justify-between gap-4 px-6 pt-10 md:px-0 md:pt-16">
      <Heading hLevel={1} className="text-4xl font-semibold tracking-[0.4em] text-white">
        TODO
      </Heading>
      <NavButtons />
      <ThemeToggle isDark={isDark} onToggle={handleThemeChange} />
    </header>
  );
}
