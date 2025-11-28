# Liquidation Command Center — Requirements

## Overview

A browser-based pricing and inventory tool for anyone selling multiple items. Provides three-tier pricing scenarios (Maximum, Balanced, Quick Sale) with real-time dashboard totals, enabling sellers to understand their best-case, expected, and floor outcomes at a glance.

## Target Users

Anyone selling 10+ items who wants clarity on inventory value under different pricing scenarios:
- Garage/yard sale organizers
- eBay / FB Marketplace / Craigslist sellers
- Estate liquidators
- People moving/downsizing
- Business equipment disposition
- Collectors managing inventory
- Consignment trackers

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Database | IndexedDB + Dexie.js |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Drag & Drop | @dnd-kit |
| PWA | next-pwa |
| Hosting | Vercel |

---

## Functional Requirements

### F1: Item Management

**F1.1: Add Item**
- Fields: name (required), category, 3 prices (max/balanced/quick), notes, condition
- All prices entered manually (no auto-calculation)
- Default status: `available`

**F1.2: Edit Item**
- Tap/click item to open detail modal
- Edit all fields inline within modal
- Save/Cancel actions

**F1.3: Delete Item**
- Delete button in item modal
- Confirmation dialog before deletion
- No bulk delete (keep it simple for v1)

**F1.4: Item Status**
- `available` — actively for sale
- `hold` — reserved or pending decision
- `sold` — completed sale

### F2: Three-Tier Pricing

**F2.1: Price Fields**
| Tier | Field | Description |
|------|-------|-------------|
| Maximum | `priceMax` | Aspirational, hold-out price |
| Balanced | `priceBalanced` | Fair market value |
| Quick Sale | `priceQuick` | Move-it-now floor price |

**F2.2: Manual Entry**
- User enters all three prices manually
- No auto-calculation or default ratios
- All prices optional (can be $0 or empty)

### F3: Sold Tracking

**F3.1: Mark as Sold**
When marking an item sold, capture:
- `soldPrice` — actual sale price (required)
- `soldDate` — date of sale (default: today)
- `soldChannel` — where it sold (required)

**F3.2: Sales Channels (Preset)**
| Value | Label |
|-------|-------|
| `ebay` | eBay |
| `fb_marketplace` | FB Marketplace |
| `craigslist` | Craigslist |
| `offerup` | OfferUp |
| `local` | Local / Cash |
| `consignment` | Consignment |
| `other` | Other |

**F3.3: "Other" Channel**
- When `other` selected, show text input for custom channel name
- Store in `soldChannelOther` field

**F3.4: Sold Items Display**
- Sold items remain in main list
- Visual distinction: dimmed/strikethrough styling
- Filter to show/hide sold items

### F4: Categories

**F4.1: User-Defined Categories**
- User creates categories with: name, color
- No preset categories (start empty)
- Suggest common categories on first use (optional)

**F4.2: Category Management**
- Add, edit, rename, delete categories
- Delete category: items become "Uncategorized"

**F4.3: Category Colors**
- Color picker or preset palette
- Used for visual distinction in item list

### F5: Dashboard

**F5.1: Summary Cards**
| Card | Value |
|------|-------|
| Total Items | Count of all items |
| Available | Count of available items |
| Maximum Total | Sum of `priceMax` for available items |
| Balanced Total | Sum of `priceBalanced` for available items |
| Quick Sale Total | Sum of `priceQuick` for available items |
| Sold Count | Count of sold items |
| Revenue | Sum of `soldPrice` for sold items |

**F5.2: Revenue by Channel**
- Breakdown of sold revenue by sales channel
- Simple list or mini chart

### F6: Search & Filter

**F6.1: Search**
- Search by item name (fuzzy/contains match)
- Real-time filtering as user types

**F6.2: Filters**
- Category (single or multi-select)
- Status: available / hold / sold / all
- Clear all filters button

### F7: Sorting & Organization

**F7.1: Drag-and-Drop**
- Reorder items manually via drag-and-drop
- Persist sort order in `sortOrder` field
- Mobile-friendly touch dragging

**F7.2: Sort Options**
- Manual (drag order)
- By name (A-Z, Z-A)
- By price (high-low, low-high) — which tier?
- By date added (newest, oldest)

### F8: Export / Import

**F8.1: Export**
- Export all data as JSON file
- Filename: `lcc-backup-{date}.json`
- Includes: items, categories, settings

**F8.2: Import**
- Import JSON file to restore data
- Confirmation: "This will replace all existing data"
- Validate file format before import

### F9: Dark Mode

**F9.1: Theme Toggle**
- Manual toggle: Light / Dark
- Persist preference in localStorage
- No "system" option — user controls it

### F10: Offline / PWA

**F10.1: Offline Support**
- Full functionality without network
- All data in IndexedDB
- Service worker caches app shell

**F10.2: Installable**
- PWA manifest for "Add to Home Screen"
- App icon and splash screen

---

## Non-Functional Requirements

### NF1: Performance
- Handle 500+ items smoothly
- Instant search/filter response (<100ms)
- Smooth drag-and-drop at 60fps

### NF2: Mobile Responsiveness
- Mobile-first design
- Touch-friendly tap targets (44px minimum)
- Works on screens 320px and up
- No horizontal scrolling

### NF3: Accessibility
- Keyboard navigation for all actions
- ARIA labels on interactive elements
- Focus management in modals
- Color contrast AA compliant

### NF4: Data Safety
- Confirmation dialogs for destructive actions (delete item, import/replace)
- No data loss on browser refresh
- Export reminder if data hasn't been backed up (optional)

### NF5: Browser Support
- Modern browsers: Chrome, Safari, Firefox, Edge
- Last 2 versions
- No IE11 support

---

## Data Schema

```typescript
interface Item {
  id: string;                  // UUID
  name: string;                // Required
  category: string | null;     // Category ID or null

  // Three-tier pricing
  priceMax: number;            // Aspirational
  priceBalanced: number;       // Fair market
  priceQuick: number;          // Quick sale

  // Status
  status: 'available' | 'hold' | 'sold';

  // Sold details (when status === 'sold')
  soldPrice?: number;
  soldDate?: string;           // ISO date
  soldChannel?: 'ebay' | 'fb_marketplace' | 'craigslist' | 'offerup' | 'local' | 'consignment' | 'other';
  soldChannelOther?: string;   // Custom channel if 'other'

  // Metadata
  notes: string;
  condition: string;
  sortOrder: number;           // For drag-and-drop

  createdAt: string;           // ISO datetime
  updatedAt: string;           // ISO datetime
}

interface Category {
  id: string;                  // UUID
  name: string;
  color: string;               // Hex color
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

interface Settings {
  theme: 'light' | 'dark';
  // Future settings here
}
```

---

## Edge Cases & Error Handling

### EC1: Empty States
- No items: "Add your first item to get started"
- No categories: "Create a category to organize items"
- No search results: "No items match your search"
- No sold items: "No sales yet"

### EC2: Data Validation
- Item name required (show inline error)
- Prices must be >= 0
- Sold price required when marking sold
- Channel required when marking sold

### EC3: Category Deletion
- Items in deleted category → set to `null` (Uncategorized)
- Show count of affected items in confirmation

### EC4: Import Validation
- Validate JSON structure before import
- Show error if file is invalid
- Reject non-JSON files

### EC5: Storage Limits
- IndexedDB has generous limits (~50MB+)
- If approaching limit, warn user
- Suggest export to free space (unlikely edge case)

---

## Out of Scope (v1)

- User accounts / authentication
- Cloud sync / multi-device
- Item photos/images
- Barcode scanning
- Bulk operations
- Print labels
- Listing templates
- Fee calculators
- Currency conversion
- Multiple inventories

---

## UI/UX Notes

- Mobile-first, responsive up to desktop
- Clean, minimal interface
- Card-based item display on mobile
- Table view option on desktop (nice-to-have)
- Quick actions via swipe (nice-to-have)
- Subtle animations for state changes

---

*Spec shaped: 2025-11-28*
*Ready for: /write-spec or /create-tasks*
