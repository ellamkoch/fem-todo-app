/**
 * Header with global theme toggle (light / dark mode)
 */

import Title from "@components/shared/Title.component";
import { Button} from "@components/ui/button";
import { useTheme } from "@hooks/useTheme";

export default function Header() {
  //used to access the global theme state of light/dark mode
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  //toggle btwn light/dark modes
  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="app-header flex">
      <Title>Supabase Tasks</Title>
      <p className="app-header__subtitle">
        Simple task list powered by Supabase, built with React + Vite.
      </p>
      <Button variant="secondary" onClick={handleThemeChange}>
        Change to {isDark ? "Light" : "Dark"} Mode
      </Button>
    </header>
  );
}
