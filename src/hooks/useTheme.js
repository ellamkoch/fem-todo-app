/**
 * Hook for accessing theme context.
 * @see ThemeProvider - Provides theme state
 * @see appConstants - ThemeContext definition
 */
import { useContext } from 'react';
import { ThemeContext } from '@/constants/appConstants';

function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

export { useTheme };
