# AI Tools Feature

This folder contains all code related to the AI Tools page.

## 📁 Structure

```
features/ai-tools/
├── components/                    # UI components specific to AI Tools
│   ├── AIToolsHero.tsx           # Hero section with Warp background
│   ├── AIToolsHero.css           # Hero section styles
│   ├── ImprovedStickyTabs.tsx    # Category navigation tabs
│   ├── ImprovedStickyTabs.css    # Sticky tabs styles
│   └── AIToolCard.astro          # Individual AI tool card component
├── data/                          # Data for AI Tools
│   └── tools.ts                   # AI tools data & types
└── README.md                      # This file

pages/
└── ai-tools.astro                 # Main AI Tools page (imports from features/)
```

## 🎯 Key Features

- **Hero Section**: Full-width animated background using Warp shader
- **Smooth-Scroll Navigation**: Category tabs with intelligent smooth scrolling
- **Section-Based Layout**: Tools organized in sections with descriptive headers
- **Active Tab Tracking**: Auto-updates based on scroll position with Intersection Observer
- **Sticky Navigation**: Tabs stick to top when scrolling past hero
- **Tool Cards**: Expandable cards showing AI tool details with ratings
- **URL Hash Support**: Bookmarkable category links (e.g., `/ai-tools#llm`)

## 🔧 Usage

### Adding a New Tool

Edit `data/tools.ts` and add a new tool object:

```typescript
{
  id: "tool-id",
  name: "Tool Name",
  logo: "/logos/tool-logo.png",
  rating: 4.5,
  categoryId: "llm", // llm, coding, image, video, audio, writing
  // ... other properties
}
```

### Adding a New Category

Edit `components/ImprovedStickyTabs.tsx` and add to the `categories` array:

```typescript
{ id: 'new-category', label: 'NEW CATEGORY' }
```

## 🎨 Styling

- Component-specific styles are colocated with components (`.css` files)
- Page-level styles are in `index.astro`
- Uses Tailwind CSS utilities where appropriate

## 🔄 Navigation System

### Smooth Scrolling
- Clicking a tab smoothly scrolls to that category section
- Automatically accounts for sticky navigation bar height
- Adds 20px extra padding for comfortable reading

### Active Tab Tracking
- Uses Intersection Observer API to detect visible sections
- Updates active tab styling as you scroll
- Updates URL hash for bookmarking and sharing

### Scroll Behavior
- All tools remain visible at all times (no filtering)
- Users can freely scroll between sections
- Sections have proper scroll offset (via `scroll-margin-top`)
- Supports browser back/forward navigation

### Edge Cases Handled
- Page load with hash in URL (e.g., `/ai-tools#coding`)
- Window resize events (recalculates sticky nav height)
- Mobile touch scrolling (horizontal swipe for tabs)
- Empty categories are automatically skipped

## 📝 Notes

- Hero background uses the Warp shader from `@/components/warp-background`
- Tools within each category are sorted by rating (highest first)
- Navigation tabs scroll horizontally on mobile if they overflow
- Sticky navigation has blur effect and shadow for depth
- Section headers include title and description for each category

## 🎯 How to Use

- **Find AI Tools code**: Go to `src/features/ai-tools/`
- **Main page**: `src/pages/ai-tools.astro`
- **Edit tools**: `src/features/ai-tools/data/tools.ts`
- **Edit hero**: `src/features/ai-tools/components/AIToolsHero.tsx`
- **Edit tabs**: `src/features/ai-tools/components/ImprovedStickyTabs.tsx`
- **Edit card**: `src/features/ai-tools/components/AIToolCard.astro`
