// Sales channels for sold items
export const SALES_CHANNELS = [
  { value: 'ebay', label: 'eBay' },
  { value: 'fb_marketplace', label: 'FB Marketplace' },
  { value: 'craigslist', label: 'Craigslist' },
  { value: 'offerup', label: 'OfferUp' },
  { value: 'local', label: 'Local / Cash' },
  { value: 'consignment', label: 'Consignment' },
  { value: 'other', label: 'Other' },
] as const;

export type SalesChannel = typeof SALES_CHANNELS[number]['value'];

// Item status
export type ItemStatus = 'available' | 'hold' | 'sold';

// Item interface
export interface Item {
  id: string;
  name: string;
  category: string | null;

  // Three-tier pricing
  priceMax: number;
  priceBalanced: number;
  priceQuick: number;

  // Status
  status: ItemStatus;

  // Sold details (when status === 'sold')
  soldPrice?: number;
  soldDate?: string; // ISO date string
  soldChannel?: SalesChannel;
  soldChannelOther?: string; // Custom channel if 'other'

  // Metadata
  notes: string;
  condition: string;
  sortOrder: number;

  createdAt: string; // ISO datetime
  updatedAt: string; // ISO datetime
}

// Category interface
export interface Category {
  id: string;
  name: string;
  color: string; // Hex color
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

// Theme type
export type Theme = 'light' | 'dark';

// Settings interface
export interface Settings {
  id: string; // Always 'settings' (singleton)
  theme: Theme;
}

// Dashboard summary data
export interface DashboardSummary {
  totalItems: number;
  availableItems: number;
  holdItems: number;
  soldItems: number;
  totalMax: number;
  totalBalanced: number;
  totalQuick: number;
  totalRevenue: number;
  revenueByChannel: Record<string, number>;
}

// Form data types
export interface ItemFormData {
  name: string;
  category: string | null;
  priceMax: number;
  priceBalanced: number;
  priceQuick: number;
  notes: string;
  condition: string;
}

export interface SoldFormData {
  soldPrice: number;
  soldDate: string;
  soldChannel: SalesChannel;
  soldChannelOther?: string;
}

export interface CategoryFormData {
  name: string;
  color: string;
}
