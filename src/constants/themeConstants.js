// Shared theme context + storage key (used by ThemeProvider/useTheme)

import { createContext } from "react";

const ThemeContext = createContext(null);
const STORAGE_KEY = 'theme';

export { ThemeContext, STORAGE_KEY };
