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
- **Sticky Navigation**: Category tabs that stick to top when scrolling
- **Tool Cards**: Expandable cards showing AI tool details
- **Filtering**: Dynamic filtering by category

## 🔧 Usage

### Adding a New Tool

Edit `data/tools.ts` and add a new tool object:

```typescript
{
  id: "tool-id",
  name: "Tool Name",
  logo: "/logos/tool-logo.png",
  rating: 4.5,
  categoryId: "llm", // llm, coding, image, video, audio, writing, research
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

## 📝 Notes

- Hero background uses the Warp shader from `@/components/warp-background`
- All tools are sorted by rating (highest first) by default
- Supports URL hash navigation for categories (e.g., `/ai-tools#llm`)

## 🎯 How to Use

- **Find AI Tools code**: Go to `src/features/ai-tools/`
- **Main page**: `src/pages/ai-tools.astro`
- **Edit tools**: `src/features/ai-tools/data/tools.ts`
- **Edit hero**: `src/features/ai-tools/components/AIToolsHero.tsx`
- **Edit tabs**: `src/features/ai-tools/components/ImprovedStickyTabs.tsx`
- **Edit card**: `src/features/ai-tools/components/AIToolCard.astro`
