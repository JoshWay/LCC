# Tasks — Liquidation Command Center

Spec: `agent-os/specs/liquidation-command-center/requirements.md`

---

## Task Group 1: Project Setup [S]

- [ ] **1.1** Initialize Next.js 14+ project with App Router and TypeScript
- [ ] **1.2** Configure Tailwind CSS with mobile-first breakpoints
- [ ] **1.3** Install and configure shadcn/ui with dark mode support
- [ ] **1.4** Install Dexie.js and create database configuration
- [ ] **1.5** Install @dnd-kit for drag-and-drop
- [ ] **1.6** Set up project folder structure (`/components`, `/lib`, `/hooks`, `/types`)
- [ ] **1.7** Configure ESLint and Prettier
- [ ] **1.8** Create TypeScript types for Item, Category, Settings

**Acceptance:** Project runs locally with `npm run dev`, all dependencies installed

---

## Task Group 2: Database Layer [M]

- [ ] **2.1** Define Dexie schema for `items` table
- [ ] **2.2** Define Dexie schema for `categories` table
- [ ] **2.3** Define Dexie schema for `settings` table
- [ ] **2.4** Create `useItems()` hook — CRUD operations for items
- [ ] **2.5** Create `useCategories()` hook — CRUD operations for categories
- [ ] **2.6** Create `useSettings()` hook — theme preference getter/setter
- [ ] **2.7** Add database versioning for future migrations
- [ ] **2.8** Test database operations in isolation

**Acceptance:** Can create, read, update, delete items and categories; data persists across refresh

---

## Task Group 3: Core Layout & Theme [M]

- [ ] **3.1** Create app shell with header and main content area
- [ ] **3.2** Build responsive header with app title and action buttons
- [ ] **3.3** Implement dark/light theme toggle button
- [ ] **3.4** Create theme provider using CSS variables + Tailwind
- [ ] **3.5** Persist theme preference to IndexedDB settings
- [ ] **3.6** Apply theme on initial load (no flash)
- [ ] **3.7** Create mobile-first container with proper padding/margins

**Acceptance:** App has consistent header, theme toggle works and persists, responsive on all screens

---

## Task Group 4: Dashboard [M]

- [ ] **4.1** Create Dashboard component as main landing view
- [ ] **4.2** Build summary card component (reusable)
- [ ] **4.3** Implement "Total Items" card with count
- [ ] **4.4** Implement "Available Items" card with count
- [ ] **4.5** Implement three pricing tier total cards (Max/Balanced/Quick)
- [ ] **4.6** Implement "Sold Count" card
- [ ] **4.7** Implement "Revenue Collected" card (sum of soldPrice)
- [ ] **4.8** Add "Revenue by Channel" breakdown list
- [ ] **4.9** Make dashboard cards responsive (grid on desktop, stack on mobile)
- [ ] **4.10** Add empty state when no items exist

**Acceptance:** Dashboard shows accurate totals, updates in real-time as items change

---

## Task Group 5: Item List View [M]

- [ ] **5.1** Create ItemList component to display all items
- [ ] **5.2** Build ItemCard component for mobile (card-based display)
- [ ] **5.3** Display item name, category badge, and pricing tiers on card
- [ ] **5.4** Show item status with visual indicator (available/hold/sold)
- [ ] **5.5** Style sold items with dimmed/strikethrough appearance
- [ ] **5.6** Add category color indicator on item cards
- [ ] **5.7** Implement "Add Item" floating action button (FAB) on mobile
- [ ] **5.8** Create empty state for no items

**Acceptance:** Items display in scrollable list, status visually distinct, mobile-friendly cards

---

## Task Group 6: Item CRUD [L]

- [ ] **6.1** Create AddItemModal component with form
- [ ] **6.2** Build form fields: name (required), category dropdown, condition
- [ ] **6.3** Build pricing fields: priceMax, priceBalanced, priceQuick
- [ ] **6.4** Build notes textarea field
- [ ] **6.5** Add form validation (name required, prices >= 0)
- [ ] **6.6** Implement save item to database
- [ ] **6.7** Create EditItemModal (reuse form, pre-populate fields)
- [ ] **6.8** Implement update item in database
- [ ] **6.9** Add delete button in edit modal
- [ ] **6.10** Create delete confirmation dialog
- [ ] **6.11** Implement delete item from database
- [ ] **6.12** Close modal and refresh list on save/delete

**Acceptance:** Can add, edit, and delete items; validation prevents bad data; modals work on mobile

---

## Task Group 7: Category Management [M]

- [ ] **7.1** Create CategoryManager component (accessible from settings/menu)
- [ ] **7.2** Display list of existing categories with color swatches
- [ ] **7.3** Build AddCategoryModal with name and color picker
- [ ] **7.4** Implement color picker (preset palette of 8-10 colors)
- [ ] **7.5** Save new category to database
- [ ] **7.6** Create EditCategoryModal for rename and color change
- [ ] **7.7** Add delete category button with confirmation
- [ ] **7.8** Handle delete: set affected items to uncategorized (null)
- [ ] **7.9** Show count of affected items in delete confirmation
- [ ] **7.10** Populate category dropdown in item forms

**Acceptance:** Can create, edit, delete categories; items update when category deleted

---

## Task Group 8: Search & Filter [M]

- [ ] **8.1** Add search input to item list header
- [ ] **8.2** Implement real-time search filtering by item name
- [ ] **8.3** Create filter dropdown/popover component
- [ ] **8.4** Add category filter (multi-select checkboxes)
- [ ] **8.5** Add status filter (available/hold/sold/all)
- [ ] **8.6** Combine search and filters (AND logic)
- [ ] **8.7** Add "Clear filters" button
- [ ] **8.8** Show active filter count badge
- [ ] **8.9** Display "No results" empty state when filters match nothing

**Acceptance:** Search is instant (<100ms), filters combine correctly, clear resets all

---

## Task Group 9: Drag-and-Drop Sorting [M]

- [ ] **9.1** Wrap ItemList with DndContext from @dnd-kit
- [ ] **9.2** Make ItemCard draggable with useDraggable
- [ ] **9.3** Create drop zones with useDroppable
- [ ] **9.4** Implement drag overlay for visual feedback
- [ ] **9.5** Update sortOrder in database on drop
- [ ] **9.6** Ensure touch-friendly dragging on mobile
- [ ] **9.7** Add drag handle icon for clarity
- [ ] **9.8** Disable drag when search/filter is active (or sort by sortOrder only)

**Acceptance:** Can reorder items via drag-and-drop on desktop and mobile; order persists

---

## Task Group 10: Sold Tracking [M]

- [ ] **10.1** Create MarkSoldModal component
- [ ] **10.2** Add sold price input (required, numeric)
- [ ] **10.3** Add sold date picker (default: today)
- [ ] **10.4** Add sales channel dropdown (preset options)
- [ ] **10.5** Implement "Other" channel with conditional text input
- [ ] **10.6** Validate required fields before save
- [ ] **10.7** Update item status to 'sold' with sold details
- [ ] **10.8** Add "Mark as Sold" action button on available items
- [ ] **10.9** Add "Unmark Sold" option to revert to available (clears sold data)
- [ ] **10.10** Display sold details on item card (price, channel, date)

**Acceptance:** Can mark items sold with all required fields; sold items show details; can undo

---

## Task Group 11: Hold Status [S]

- [ ] **11.1** Add "Mark as Hold" action on available items
- [ ] **11.2** Add "Remove Hold" action on hold items
- [ ] **11.3** Style hold items with distinct visual (e.g., yellow/amber indicator)
- [ ] **11.4** Include hold items in status filter

**Acceptance:** Can toggle hold status; hold items visually distinct; filterable

---

## Task Group 12: Export / Import [M]

- [ ] **12.1** Create ExportImport component (settings/menu area)
- [ ] **12.2** Implement export: gather all items, categories, settings
- [ ] **12.3** Generate JSON file with timestamp filename
- [ ] **12.4** Trigger browser download of JSON file
- [ ] **12.5** Create import file input (accept .json only)
- [ ] **12.6** Parse and validate imported JSON structure
- [ ] **12.7** Show confirmation dialog: "This will replace all data"
- [ ] **12.8** Clear existing data and import new data
- [ ] **12.9** Show success/error toast after import
- [ ] **12.10** Handle invalid file format gracefully

**Acceptance:** Export downloads valid JSON; import replaces data after confirmation; errors handled

---

## Task Group 13: PWA & Offline [M]

- [ ] **13.1** Install and configure next-pwa
- [ ] **13.2** Create PWA manifest (name, icons, theme colors)
- [ ] **13.3** Generate app icons (192x192, 512x512)
- [ ] **13.4** Configure service worker for offline caching
- [ ] **13.5** Test offline functionality (airplane mode)
- [ ] **13.6** Add "Add to Home Screen" meta tags
- [ ] **13.7** Test PWA install on mobile devices

**Acceptance:** App works fully offline; installable on mobile; cached for instant load

---

## Task Group 14: Polish & Accessibility [M]

- [ ] **14.1** Audit keyboard navigation (all actions reachable via keyboard)
- [ ] **14.2** Add ARIA labels to interactive elements
- [ ] **14.3** Implement focus trap in modals
- [ ] **14.4** Ensure color contrast meets AA standards
- [ ] **14.5** Add loading states where appropriate
- [ ] **14.6** Add toast notifications for actions (saved, deleted, etc.)
- [ ] **14.7** Test on various mobile devices/screen sizes
- [ ] **14.8** Fix any responsive layout issues
- [ ] **14.9** Add subtle animations (modal open/close, status changes)

**Acceptance:** App is keyboard accessible, screen reader friendly, polished feel

---

## Task Group 15: Deployment [S]

- [ ] **15.1** Configure Vercel project settings
- [ ] **15.2** Set up production environment variables (if any)
- [ ] **15.3** Deploy to Vercel
- [ ] **15.4** Test production build
- [ ] **15.5** Configure custom domain (if desired)

**Acceptance:** App deployed and accessible on Vercel URL

---

# Summary

| Task Group | Tasks | Complexity | Dependencies |
|------------|-------|------------|--------------|
| 1. Project Setup | 8 | S | — |
| 2. Database Layer | 8 | M | 1 |
| 3. Core Layout & Theme | 7 | M | 1 |
| 4. Dashboard | 10 | M | 2, 3 |
| 5. Item List View | 8 | M | 2, 3 |
| 6. Item CRUD | 12 | L | 2, 5, 7 |
| 7. Category Management | 10 | M | 2, 3 |
| 8. Search & Filter | 9 | M | 5 |
| 9. Drag-and-Drop | 8 | M | 5 |
| 10. Sold Tracking | 10 | M | 6 |
| 11. Hold Status | 4 | S | 6 |
| 12. Export / Import | 10 | M | 2 |
| 13. PWA & Offline | 7 | M | 3 |
| 14. Polish & Accessibility | 9 | M | All |
| 15. Deployment | 5 | S | All |

**Total: 15 task groups, 115 tasks**

---

# Recommended Implementation Order

```
Phase 1 - Foundation
├── 1. Project Setup
├── 2. Database Layer
└── 3. Core Layout & Theme

Phase 2 - Core Features
├── 5. Item List View
├── 6. Item CRUD
├── 7. Category Management
└── 4. Dashboard

Phase 3 - Enhanced Features
├── 8. Search & Filter
├── 9. Drag-and-Drop
├── 10. Sold Tracking
└── 11. Hold Status

Phase 4 - Data & Offline
├── 12. Export / Import
└── 13. PWA & Offline

Phase 5 - Ship It
├── 14. Polish & Accessibility
└── 15. Deployment
```

---

*Tasks created: 2025-11-28*
*Ready for: /implement-tasks or GitHub Issue creation*
