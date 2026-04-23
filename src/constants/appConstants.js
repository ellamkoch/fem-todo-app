/**
 * Application constants.
 * @see ThemeProvider - Uses ThemeContext and THEME_STORAGE_KEY
 * @see useTheme - Consumes ThemeContext
 * @see useTasks - Uses TODO_STORAGE_KEY
 */
import { createContext } from 'react';

const ThemeContext = createContext(null);
const THEME_STORAGE_KEY = 'theme';
const TODO_STORAGE_KEY = 'todo:v1';

export { ThemeContext, THEME_STORAGE_KEY, TODO_STORAGE_KEY };
