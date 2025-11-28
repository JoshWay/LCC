'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/db';
import { getNowISO } from '@/lib/utils';
import type { Category, CategoryFormData } from '@/types';

/**
 * Hook for category CRUD operations
 */
export function useCategories() {
  // Live query for all categories sorted by sortOrder
  const categories = useLiveQuery(() =>
    db.categories.orderBy('sortOrder').toArray()
  ) ?? [];

  // Add new category
  const addCategory = async (data: CategoryFormData): Promise<string> => {
    const now = getNowISO();
    const maxSortOrder = categories.length > 0
      ? Math.max(...categories.map(c => c.sortOrder))
      : 0;

    const category: Category = {
      id: uuidv4(),
      ...data,
      sortOrder: maxSortOrder + 1,
      createdAt: now,
      updatedAt: now,
    };

    await db.categories.add(category);
    return category.id;
  };

  // Update existing category
  const updateCategory = async (id: string, data: Partial<CategoryFormData>): Promise<void> => {
    await db.categories.update(id, {
      ...data,
      updatedAt: getNowISO(),
    });
  };

  // Delete category
  const deleteCategory = async (id: string): Promise<void> => {
    await db.categories.delete(id);
  };

  // Get category by ID
  const getCategoryById = (id: string | null): Category | undefined => {
    if (!id) return undefined;
    return categories.find(c => c.id === id);
  };

  // Count items in category
  const getItemCountInCategory = async (categoryId: string): Promise<number> => {
    return db.items.where('category').equals(categoryId).count();
  };

  return {
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    getCategoryById,
    getItemCountInCategory,
  };
}

/**
 * Preset color palette for categories
 */
export const CATEGORY_COLORS = [
  '#ef4444', // red
  '#f97316', // orange
  '#eab308', // yellow
  '#22c55e', // green
  '#14b8a6', // teal
  '#3b82f6', // blue
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#6b7280', // gray
  '#000000', // black
];
