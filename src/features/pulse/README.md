# The Pulse Feature

## 📁 Folder Structure

```
src/features/pulse/
├── components/
│   ├── PulseHero.tsx       # Hero section component with Ripple background
│   └── PulseHero.css       # Hero section styles
├── styles/
│   └── PulseCard.css       # Pulse card styling (with light theme border fix)
└── README.md               # This file
```

## 📄 Main Page

- **Location**: `src/pages/pulse.astro`
- **Route**: `/pulse`

## 🧩 Components

### PulseHero.tsx
React component for the hero section of the Pulse page.

**Features:**
- Ripple animation background
- Theme-aware (dark/light mode)
- Responsive design
- Title, subtitle, and description

**Imports:**
```typescript
import PulseHero from '@features/pulse/components/PulseHero';
```

### PulseCard.css
Dedicated CSS file for Pulse card styling with maximum specificity.

**Features:**
- Light theme: Gray border (#9ca3af) with shadow
- Dark theme: Translucent white border
- Hover effects: Red border (#FF4C4C)
- Responsive layout

**Imports:**
```astro
import '@features/pulse/styles/PulseCard.css';
```

## 🎨 Styling

### Light Theme
- **Background**: `#f9fafb` (light gray)
- **Card Background**: `#ffffff` (white)
- **Border**: `2px solid #9ca3af` (medium gray)
- **Shadow**: `0 2px 8px rgba(0, 0, 0, 0.1)`
- **Hover Border**: `#FF4C4C` (red)

### Dark Theme
- **Background**: Transparent
- **Card Background**: `linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))`
- **Border**: `2px solid rgba(255, 255, 255, 0.3)` (translucent white)
- **Hover Border**: `rgba(255, 76, 76, 0.7)` (red)

## 📝 Card Structure

Each pulse post card has:
- **Date** (top left)
- **Tags** (next to date)
- **Title** (headline)
- **Content** (description)
- **Video** (optional, 9:16 aspect ratio on right side)

## 🔧 Adding a New Pulse Post

Edit `src/pages/pulse.astro`:

```typescript
const pulsePosts = [
  {
    id: 1,
    date: new Date(),
    title: "Your Title Here",
    content: "Your description here.",
    videoEmbed: null, // or TikTok embed code
    tags: ["LLM", "OpenAI"] // Category tags
  }
];
```

## 🎯 Design Principles

1. **Consistent card sizing**: All cards maintain same height (250px on desktop)
2. **Clear borders**: High contrast borders for visibility
3. **Mobile-first**: Responsive design with vertical stacking on mobile
4. **Theme-aware**: Seamless dark/light mode transitions
5. **Video support**: Built-in support for portrait video embeds (TikTok)

## 🚀 Related Files

- `src/pages/pulse.astro` - Main page
- `src/components/ripple.tsx` - Ripple animation component
- `src/consts.ts` - Contains `PULSE` constant for SEO

## 📊 SEO

**Title**: The Pulse  
**Description**: Real-time AI intel. Daily quick hits on the latest AI developments, tools, and breakthroughs. No fluff. Just the signal.  
**Route**: `/pulse`

## 🐛 Known Issues & Fixes

### Border Visibility Issue (Resolved)
**Problem**: Gray borders not visible in light theme  
**Solution**: Created dedicated `PulseCard.css` with maximum specificity selectors and `!important` flags  
**Files**: `src/features/pulse/styles/PulseCard.css`

## 💡 Future Enhancements

- [ ] Add pagination for pulse posts
- [ ] Implement filtering by tags
- [ ] Add search functionality
- [ ] Connect to CMS for dynamic content
- [ ] Add social sharing buttons
- [ ] Implement "Read More" for long content
