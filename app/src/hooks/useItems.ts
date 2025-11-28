'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/db';
import { getNowISO } from '@/lib/utils';
import type { Item, ItemFormData, SoldFormData, DashboardSummary } from '@/types';

/**
 * Hook for item CRUD operations and queries
 */
export function useItems() {
  // Live query for all items sorted by sortOrder
  const items = useLiveQuery(() =>
    db.items.orderBy('sortOrder').toArray()
  ) ?? [];

  // Add new item
  const addItem = async (data: ItemFormData): Promise<string> => {
    const now = getNowISO();
    const maxSortOrder = items.length > 0
      ? Math.max(...items.map(i => i.sortOrder))
      : 0;

    const item: Item = {
      id: uuidv4(),
      ...data,
      status: 'available',
      sortOrder: maxSortOrder + 1,
      createdAt: now,
      updatedAt: now,
    };

    await db.items.add(item);
    return item.id;
  };

  // Update existing item
  const updateItem = async (id: string, data: Partial<Item>): Promise<void> => {
    await db.items.update(id, {
      ...data,
      updatedAt: getNowISO(),
    });
  };

  // Delete item
  const deleteItem = async (id: string): Promise<void> => {
    await db.items.delete(id);
  };

  // Mark item as sold
  const markAsSold = async (id: string, soldData: SoldFormData): Promise<void> => {
    await db.items.update(id, {
      status: 'sold',
      soldPrice: soldData.soldPrice,
      soldDate: soldData.soldDate,
      soldChannel: soldData.soldChannel,
      soldChannelOther: soldData.soldChannelOther,
      updatedAt: getNowISO(),
    });
  };

  // Unmark sold (revert to available)
  const unmarkSold = async (id: string): Promise<void> => {
    await db.items.update(id, {
      status: 'available',
      soldPrice: undefined,
      soldDate: undefined,
      soldChannel: undefined,
      soldChannelOther: undefined,
      updatedAt: getNowISO(),
    });
  };

  // Toggle hold status
  const toggleHold = async (id: string): Promise<void> => {
    const item = await db.items.get(id);
    if (!item) return;

    const newStatus = item.status === 'hold' ? 'available' : 'hold';
    await db.items.update(id, {
      status: newStatus,
      updatedAt: getNowISO(),
    });
  };

  // Update sort order (for drag-and-drop)
  const updateSortOrder = async (itemIds: string[]): Promise<void> => {
    const updates = itemIds.map((id, index) =>
      db.items.update(id, { sortOrder: index, updatedAt: getNowISO() })
    );
    await Promise.all(updates);
  };

  // Clear category from items when category is deleted
  const clearCategory = async (categoryId: string): Promise<void> => {
    const itemsInCategory = await db.items.where('category').equals(categoryId).toArray();
    const updates = itemsInCategory.map(item =>
      db.items.update(item.id, { category: null, updatedAt: getNowISO() })
    );
    await Promise.all(updates);
  };

  return {
    items,
    addItem,
    updateItem,
    deleteItem,
    markAsSold,
    unmarkSold,
    toggleHold,
    updateSortOrder,
    clearCategory,
  };
}

/**
 * Hook for dashboard summary calculations
 */
export function useDashboardSummary(): DashboardSummary {
  const items = useLiveQuery(() => db.items.toArray()) ?? [];

  const availableItems = items.filter(i => i.status === 'available');
  const holdItems = items.filter(i => i.status === 'hold');
  const soldItems = items.filter(i => i.status === 'sold');

  // Calculate totals for available items only
  const totalMax = availableItems.reduce((sum, i) => sum + (i.priceMax || 0), 0);
  const totalBalanced = availableItems.reduce((sum, i) => sum + (i.priceBalanced || 0), 0);
  const totalQuick = availableItems.reduce((sum, i) => sum + (i.priceQuick || 0), 0);

  // Calculate revenue from sold items
  const totalRevenue = soldItems.reduce((sum, i) => sum + (i.soldPrice || 0), 0);

  // Revenue by channel
  const revenueByChannel = soldItems.reduce((acc, item) => {
    const channel = item.soldChannel || 'unknown';
    acc[channel] = (acc[channel] || 0) + (item.soldPrice || 0);
    return acc;
  }, {} as Record<string, number>);

  return {
    totalItems: items.length,
    availableItems: availableItems.length,
    holdItems: holdItems.length,
    soldItems: soldItems.length,
    totalMax,
    totalBalanced,
    totalQuick,
    totalRevenue,
    revenueByChannel,
  };
}
