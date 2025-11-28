import Dexie, { type EntityTable } from 'dexie';
import type { Item, Category, Settings } from '@/types';

/**
 * Liquidation Command Center Database
 * Uses Dexie.js for IndexedDB wrapper
 */
class LCCDatabase extends Dexie {
  items!: EntityTable<Item, 'id'>;
  categories!: EntityTable<Category, 'id'>;
  settings!: EntityTable<Settings, 'id'>;

  constructor() {
    super('LiquidationCommandCenter');

    this.version(1).stores({
      items: 'id, name, category, status, sortOrder, createdAt, updatedAt',
      categories: 'id, name, sortOrder, createdAt',
      settings: 'id',
    });
  }
}

// Singleton database instance
export const db = new LCCDatabase();

/**
 * Initialize default settings if not exist
 */
export async function initializeSettings(): Promise<void> {
  const existing = await db.settings.get('settings');
  if (!existing) {
    await db.settings.add({
      id: 'settings',
      theme: 'light',
    });
  }
}

/**
 * Clear all data (for import)
 */
export async function clearAllData(): Promise<void> {
  await db.items.clear();
  await db.categories.clear();
}

/**
 * Export all data as JSON object
 */
export async function exportData(): Promise<{
  items: Item[];
  categories: Category[];
  settings: Settings | undefined;
  exportedAt: string;
  version: number;
}> {
  const [items, categories, settings] = await Promise.all([
    db.items.toArray(),
    db.categories.toArray(),
    db.settings.get('settings'),
  ]);

  return {
    items,
    categories,
    settings,
    exportedAt: new Date().toISOString(),
    version: 1,
  };
}

/**
 * Import data from JSON object
 */
export async function importData(data: {
  items: Item[];
  categories: Category[];
  settings?: Settings;
}): Promise<void> {
  await clearAllData();

  if (data.categories.length > 0) {
    await db.categories.bulkAdd(data.categories);
  }

  if (data.items.length > 0) {
    await db.items.bulkAdd(data.items);
  }

  if (data.settings) {
    await db.settings.put(data.settings);
  }
}
