'use client';

import { useEffect } from 'react';
import { useSettings } from '@/hooks';

/**
 * Theme provider that syncs theme state with DOM
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, isLoading } = useSettings();

  useEffect(() => {
    // Update document class for dark mode
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Prevent flash of wrong theme
  if (isLoading) {
    return null;
  }

  return <>{children}</>;
}
