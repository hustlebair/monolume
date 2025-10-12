# Timeline Feature

## 📁 Folder Structure

```
src/features/timeline/
├── components/
│   └── HomeTimeline.astro    # Main timeline component for home page
├── index.ts                   # Feature exports
└── README.md                  # This file
```

## 🧩 Components

### HomeTimeline.astro

The main timeline component displayed on the home page, showcasing the "Planet Take Over" journey.

**Features:**
- 4 journey steps (Wake-Up Call → Building Systems → Sharing Knowledge → Your Turn)
- Status indicators (completed, current, upcoming)
- Smooth animations and progress bars
- Theme-aware styling

**Usage:**
```astro
---
import { HomeTimeline } from '@features/timeline';
---

<HomeTimeline />
```

## 📊 Timeline Data

The timeline items are defined in `HomeTimeline.astro`:

```typescript
const journeyItems = [
  {
    title: "The Wake-Up Call",
    description: "...",
    date: "Early 2024",
    category: "Awareness",
    status: "completed"
  },
  // ... more items
];
```

## 🎨 Customization

### Adding New Timeline Items

Edit `src/features/timeline/components/HomeTimeline.astro`:

```typescript
{
  title: "Your New Step",
  description: "Description of this milestone",
  date: "Date",
  category: "Category Name",
  status: "completed" | "current" | "upcoming",
  image: "https://images.unsplash.com/..." // optional
}
```

### Changing Heading/Subtitle

Edit the section header in `HomeTimeline.astro`:

```astro
<h2 class="heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
  Your Custom Heading
</h2>
<p class="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
  Your custom subtitle
</p>
```

## 🔧 Dependencies

### Core Components (in `src/components/ui/`)
- `modern-timeline.tsx` - Main timeline component
- `card.tsx` - Card component for items
- `badge.tsx` - Status badge component

### NPM Packages
- `lucide-react` - Icons (CheckCircle, Clock, Circle)
- `class-variance-authority` - Badge variants
- `framer-motion` - Animations

## 📝 Timeline Item Schema

```typescript
interface TimelineItem {
  title: string;           // Required - Event title
  description: string;     // Required - Event description
  date?: string;          // Optional - Display date
  category?: string;      // Optional - Category label
  status?: "completed" | "current" | "upcoming";  // Optional - Status
  image?: string;         // Optional - Avatar image URL
}
```

## 🎯 Status Colors

- **Completed** 🟢: Green (`--color-success`)
- **Current** 🔵: Blue (`bg-blue-600`)
- **Upcoming** 🟡: Amber (`--color-warning`)

## 🚀 Related Files

- Main Timeline Component: `src/components/ui/modern-timeline.tsx`
- UI Components: `src/components/ui/card.tsx`, `src/components/ui/badge.tsx`
- Demo Page: `src/pages/timeline-demo.astro`
- Documentation: `src/components/ui/README.md`
- Integration Guide: `TIMELINE_INTEGRATION.md`

## 📱 Responsive Design

- **Desktop**: Full width timeline with large avatars
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Single column, optimized touch targets

## 🌗 Theme Support

Fully compatible with light/dark mode. Colors automatically adjust based on `data-theme` attribute.

## 💡 Creating Additional Timelines

To create a new timeline for another page:

1. Create a new component in `src/features/timeline/components/`
2. Define your timeline items
3. Import and use the `Timeline` component from `@/components/ui/modern-timeline`
4. Export from `index.ts`

Example:

```astro
---
// src/features/timeline/components/AboutTimeline.astro
import { Timeline } from "@/components/ui/modern-timeline";

const aboutItems = [
  // your items here
];
---

<Timeline items={aboutItems} client:load />
```

Then export it:

```typescript
// src/features/timeline/index.ts
export { default as HomeTimeline } from './components/HomeTimeline.astro';
export { default as AboutTimeline } from './components/AboutTimeline.astro';
```

## 📖 Documentation

For detailed component API and examples, see:
- [UI Components README](../../components/ui/README.md#modern-timeline-modern-timelinetsx)
- [Timeline Integration Guide](../../../TIMELINE_INTEGRATION.md)

