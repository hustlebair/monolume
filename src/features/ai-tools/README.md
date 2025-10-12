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
├── add-ai-tool.js                 # Helper script to add new tools
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

**Option 1: Manual (Recommended)**

Edit `data/tools.ts` and add a new tool object to the `aiTools` array:

```typescript
{
  id: "midjourney",                              // Unique ID (lowercase, no spaces)
  name: "Midjourney",                            // Display name
  logo: "/logos/midjourney-logo.png",            // Logo path in /public/logos/
  rating: 4.7,                                   // Rating (0-5)
  reviewUrl: "/blog/midjourney-review",          // Link to your review post
  affiliateUrl: "https://midjourney.com?ref=id", // Affiliate link
  notes: "Best AI for creating realistic images", // Short description
  productDetails: "Midjourney is an AI image generator that creates stunning, photorealistic images from text prompts. It excels at artistic styles and detailed compositions.",
  quickTake: "Top choice for professional AI art and realistic images. Unmatched quality in the image generation space.",
  category: "Image Generation",                  // Full category name (display)
  categoryId: "image",                           // Category ID (see list below)
  pricing: "Basic $10/month, Standard $30/month",
  features: [
    "Photorealistic images",
    "Style versatility", 
    "High resolution output",
    "Creative control"
  ]
}
```

**Option 2: Using the Script**

1. Edit `add-ai-tool.js` (lines 99-110) with your tool details
2. Run: `node src/features/ai-tools/add-ai-tool.js "Tool Name"`
3. Follow the terminal prompts

**After Adding:**
1. ✅ Add logo image to `public/logos/[tool-name]-logo.png`
2. ✅ (Optional) Create review blog post
3. ✅ Test on `/ai-tools` page

### Available Categories

Use one of these `categoryId` values:

| categoryId | Display Name | Description |
|------------|--------------|-------------|
| `"llm"` | LLM | Large Language Models - General AI assistants like ChatGPT, Claude |
| `"coding"` | AI CODING | AI Coding Assistants - Development tools like GitHub Copilot, Cursor |
| `"image"` | IMAGE GENERATION | AI Image Generation - Tools like Midjourney, DALL-E, Stable Diffusion |
| `"video"` | VIDEO GENERATION | AI Video Generation - Video creation tools like Runway, Synthesia |
| `"audio"` | AUDIO/MUSIC AI | AI Audio & Music - Music and voice generation like Suno, ElevenLabs |
| `"writing"` | AI WRITING | AI Writing Assistants - Content creation tools like Jasper, Copy.ai |

**TypeScript Interface:**

```typescript
export interface AITool {
  id: string;              // Unique identifier (slug format)
  name: string;            // Display name
  logo: string;            // Path to logo image
  rating: number;          // 0-5 rating
  reviewUrl: string;       // Link to blog post review
  affiliateUrl: string;    // Affiliate/referral link
  notes: string;           // Short description
  productDetails: string;  // Detailed description
  quickTake: string;       // Quick recommendation summary
  category: string;        // Display category name
  categoryId: string;      // Category ID (llm, coding, image, video, audio, writing)
  pricing: string;         // Pricing information
  features: string[];      // Key features list
}
```

### Adding a New Category

Edit `components/ImprovedStickyTabs.tsx` and add to the `categories` array:

```typescript
{ 
  id: 'new-category',
  label: 'NEW CATEGORY',
  title: 'New Category Title',
  description: 'Description of this category'
}
```

Then update this README to include the new category in the table above.

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
