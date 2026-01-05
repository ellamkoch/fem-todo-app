//  Provides global theme state (light / dark / system),
//  syncs it to Tailwind's `dark` class and localStorage.
import { useEffect, useMemo, useState } from "react";
import { STORAGE_KEY, ThemeContext } from "@/constants/themeConstants";

const initialTheme = (defaultTheme) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored || defaultTheme;
};

function ThemeProvider({ children, defaultTheme = "system"}) {
    //sets initial theme. localStorage is only read upon mount of theme
    const [theme, setTheme] = useState(() => initialTheme(defaultTheme));

    //This is responsible for
    // - DOM class updates
    // - localStorage
    // - system preference listening (when theme === "system")
    useEffect(() => {
        const root = document.documentElement;
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const resolved = theme === "system" ? (mql.matches ? "dark" : "light") : theme;

        root.classList.toggle("dark", resolved === "dark");
        localStorage.setItem(STORAGE_KEY, theme);

        // Resolves actual theme when using system preference
        if (theme === "system") {
        const onChange = (e) => root.classList.toggle("dark", e.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
        }
    }, [theme]);

    const value = useMemo(() => ({ theme, setTheme }), [theme]);
    //wrapper for the themeProvider and children
    return <ThemeContext.Provider value={value}>
        {children}
        </ThemeContext.Provider>;
}

export { ThemeProvider };
