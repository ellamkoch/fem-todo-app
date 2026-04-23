/**
 * Theme provider component.
 * Manages global theme state (light/dark/system) and syncs to Tailwind + localStorage.
 * @see useTheme - Hook for accessing theme context
 * @see appConstants - Storage key constants
 */
import { useEffect, useMemo, useState } from 'react';
import { THEME_STORAGE_KEY, ThemeContext } from '@/constants/appConstants';

const initialTheme = (defaultTheme) => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored || defaultTheme;
};

function ThemeProvider({ children, defaultTheme = 'system' }) {
  const [theme, setTheme] = useState(() => initialTheme(defaultTheme));

  useEffect(() => {
    const root = document.documentElement;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const resolved = theme === 'system' ? (mql.matches ? 'dark' : 'light') : theme;

    root.classList.toggle('dark', resolved === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (theme === 'system') {
      const onChange = (e) => root.classList.toggle('dark', e.matches);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider };
