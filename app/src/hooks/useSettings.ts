'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';
import { db, initializeSettings } from '@/db';
import type { Theme } from '@/types';

/**
 * Hook for app settings (theme, etc.)
 */
export function useSettings() {
  const settings = useLiveQuery(() => db.settings.get('settings'));

  // Initialize settings on mount
  useEffect(() => {
    initializeSettings();
  }, []);

  // Get current theme
  const theme: Theme = settings?.theme ?? 'light';

  // Set theme
  const setTheme = async (newTheme: Theme): Promise<void> => {
    await db.settings.update('settings', { theme: newTheme });
  };

  // Toggle theme
  const toggleTheme = async (): Promise<void> => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    await setTheme(newTheme);
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    isLoading: settings === undefined,
  };
}
