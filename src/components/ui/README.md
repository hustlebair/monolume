# UI Components

This directory contains reusable UI components from 21st.dev and custom implementations.

## Components

### Background Paths (`background-paths.tsx`)

An animated SVG background with flowing paths that create a dynamic, modern aesthetic.

**Source**: [21st.dev - Background Paths](https://21st.dev/kokonutd/background-paths/default)

#### Features
- 🎨 **Theme-Aware**: Automatically adapts to light/dark mode
- 🌊 **Smooth Animation**: 36 animated path layers with varying speeds
- 🎯 **Layered Depth**: Multiple path positions create visual depth
- 💫 **Subtle Motion**: Gentle opacity and path animations
- 📱 **Responsive**: Scales beautifully on all screen sizes

#### Basic Usage

```tsx
import { BackgroundPaths } from '@/components/ui/background-paths';

<BackgroundPaths>
  <div>
    <h1>Your Content Here</h1>
    <p>Content appears above the animated paths</p>
  </div>
</BackgroundPaths>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `undefined` | Content to display over the animated background |

#### Implementation Details

- **36 SVG Paths**: Each with unique animation timing
- **Dual Direction**: Two `FloatingPaths` layers (position: 1 and -1) create bidirectional flow
- **Animation Duration**: Random variation (20-30s) creates organic movement
- **Opacity Animation**: Paths pulse between 0.3 and 0.6 opacity
- **Path Offset**: Creates flowing motion effect

#### Theme Colors

- **Dark Mode**: White paths (`text-white`)
- **Light Mode**: Dark slate paths (`text-slate-950`)

#### Examples

##### With Hero Content
```tsx
<div className="blog-hero-section">
  <BackgroundPaths>
    <div className="blog-hero-content">
      <h1>THE WATCHTOWER</h1>
      <p>The machines aren't coming — they're already here.</p>
    </div>
  </BackgroundPaths>
</div>
```

##### Full Screen Background
```tsx
<div className="relative min-h-screen">
  <BackgroundPaths>
    <div className="container mx-auto px-4 py-16">
      {/* Your page content */}
    </div>
  </BackgroundPaths>
</div>
```

#### Best Use Cases

1. **Hero Sections** - Add dynamic movement to landing pages
2. **Blog Headers** - Create engaging entry points for content
3. **Feature Pages** - Provide visual interest without distraction
4. **About Pages** - Subtle animation that doesn't overwhelm text
5. **Loading States** - Engaging background during data fetch

#### Integration Notes

- ⚠️ **Requires `client:load`** directive in Astro for animation
- Uses Framer Motion for smooth animations
- Paths are pointer-events: none (won't interfere with content interaction)
- SVG viewBox is responsive (preserveAspectRatio: xMidYMid slice)

#### Current Usage

- **Blog Hero** (`src/components/BlogHero.tsx`)

---

### Modern Timeline (`modern-timeline.tsx`)

An animated timeline component for showcasing milestones, events, and progress with smooth animations and status indicators.

**Dependencies**: `lucide-react`, `class-variance-authority`

#### Features
- 🎯 **Status Indicators**: completed, current, upcoming states with color coding
- ✨ **Smooth Animations**: Framer Motion powered entrance and hover effects
- 📊 **Progress Bars**: Visual progress indication for each item
- 🖼️ **Avatar Support**: Optional images with fallback icons
- 📱 **Fully Responsive**: Adapts beautifully to all screen sizes
- 🎨 **Theme-Aware**: Full light/dark mode support
- ♿ **Accessible**: ARIA labels, semantic HTML, keyboard navigation

#### Basic Usage

```tsx
import { Timeline } from '@/components/ui/modern-timeline';

const items = [
  {
    title: "Project Started",
    description: "We began our journey with an ambitious goal.",
    date: "2024-01-15",
    category: "Foundation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    status: "completed"
  },
  {
    title: "Beta Launch",
    description: "Released beta version to early adopters.",
    date: "2024-06-20",
    category: "Product",
    status: "current"
  }
];

<Timeline items={items} client:load />
```

#### Props

**`TimelineItem` Interface:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | ✓ | Event title |
| `description` | `string` | ✓ | Event description |
| `date` | `string` | - | Date in any format (e.g. "2024-01-15") |
| `image` | `string` | - | Avatar/image URL (Unsplash recommended) |
| `status` | `"completed" \| "current" \| "upcoming"` | - | Event status (default: "upcoming") |
| `category` | `string` | - | Category label (e.g. "Product", "Funding") |

**`Timeline` Component Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TimelineItem[]` | required | Array of timeline events |
| `className` | `string` | `''` | Additional CSS classes |

#### Status Colors

- **Completed** 🟢: Green theme (`bg-success`)
- **Current** 🔵: Blue theme (`bg-blue-600`)
- **Upcoming** 🟡: Amber/warning theme (`bg-warning`)

#### Examples

##### Company Milestones
```tsx
const milestones = [
  {
    title: "Company Founded",
    description: "Started with a vision to change the industry.",
    date: "2024-01-15",
    category: "Foundation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    status: "completed"
  },
  {
    title: "Series A Funding",
    description: "Raised $5M to scale operations.",
    date: "2024-06-10",
    category: "Funding",
    status: "completed"
  },
  {
    title: "Product Launch",
    description: "Launching v2.0 with enterprise features.",
    date: "2024-12-01",
    category: "Product",
    status: "current"
  }
];

<Timeline items={milestones} client:load />
```

##### Project Roadmap
```tsx
const roadmap = [
  {
    title: "Research Phase",
    description: "Market analysis and user research.",
    status: "completed"
  },
  {
    title: "Development",
    description: "Building core features and infrastructure.",
    status: "current"
  },
  {
    title: "Beta Testing",
    description: "Early access for selected users.",
    status: "upcoming"
  }
];

<Timeline items={roadmap} client:load />
```

#### Best Use Cases

1. **Company History** - Showcase key milestones and achievements
2. **Product Roadmap** - Display development phases and future plans
3. **Project Timeline** - Track project progress and deliverables
4. **Event History** - Chronicle important events chronologically
5. **Career Journey** - Personal timeline for portfolios
6. **Process Steps** - Visualize multi-step workflows

#### Integration Notes

- ⚠️ **Requires `client:load`** directive in Astro for animations
- Uses Framer Motion for smooth entrance and hover animations
- Fully keyboard accessible with proper ARIA labels
- Images are lazy-loaded for performance
- Falls back to status icons when no image provided

#### Theme Customization

The timeline uses CSS custom properties from your Tailwind theme:
- `--color-success` for completed items
- `--color-warning` for upcoming items
- `--color-primary` for the main timeline line
- `--color-border`, `--color-card`, `--color-muted` for UI elements

#### Demo Page

Visit `/timeline-demo` to see the component in action with various configurations.

---

### Spotlight Card (`spotlight-card.tsx`)

An interactive card component with a cursor-following spotlight effect.

#### Features
- 🎨 **5 Color Presets**: blue, purple, green, red, orange
- 📏 **3 Size Options**: sm, md, lg
- 🔧 **Custom Sizing**: Support for custom width/height
- ✨ **Smooth Animations**: GPU-accelerated spotlight following cursor
- 🎯 **Backdrop Blur**: Built-in glassmorphism effect

#### Basic Usage

```tsx
import { GlowCard } from "@/components/ui/spotlight-card";

<GlowCard client:load>
  <div>
    <h3>Card Title</h3>
    <p>Card content goes here</p>
  </div>
</GlowCard>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Content to display inside the card |
| `className` | `string` | `''` | Additional CSS classes |
| `glowColor` | `'blue' \| 'purple' \| 'green' \| 'red' \| 'orange'` | `'blue'` | Spotlight color theme |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Preset card size |
| `width` | `string \| number` | `undefined` | Custom width (use with `customSize`) |
| `height` | `string \| number` | `undefined` | Custom height (use with `customSize`) |
| `customSize` | `boolean` | `false` | Enable custom sizing (ignores `size` prop) |

#### Size Reference

- **sm**: `w-48 h-64` (192px × 256px)
- **md**: `w-64 h-80` (256px × 320px)
- **lg**: `w-80 h-96` (320px × 384px)

#### Color Themes

Each color theme has unique hue and spread values:

- **blue**: Standard ocean blue (hue: 220)
- **purple**: Mystical violet (hue: 280)
- **green**: Fresh emerald (hue: 120)
- **red**: Vibrant crimson (hue: 0)
- **orange**: Warm amber (hue: 30)

#### Examples

##### Different Colors
```tsx
<GlowCard client:load glowColor="purple">
  <div>Purple themed card</div>
</GlowCard>

<GlowCard client:load glowColor="red">
  <div>Red themed card</div>
</GlowCard>
```

##### Custom Size
```tsx
<GlowCard 
  client:load 
  customSize={true} 
  width="600px" 
  height="400px"
  glowColor="green"
>
  <div>Custom sized card</div>
</GlowCard>
```

##### With CTA Button
```tsx
<GlowCard client:load glowColor="blue">
  <div className="flex flex-col h-full">
    <div className="flex-1">
      <h3 className="text-2xl font-bold mb-2">Feature Card</h3>
      <p className="text-secondary">Description here</p>
    </div>
    <button className="bg-primary text-white px-4 py-2 rounded-lg">
      Call to Action
    </button>
  </div>
</GlowCard>
```

#### Best Use Cases

1. **Feature Highlights** - Showcase key features on landing pages
2. **Product Cards** - Display products or services with style
3. **Team Members** - Present team profiles with flair
4. **Portfolio Items** - Showcase projects or work samples
5. **Call-to-Action** - Draw attention to important actions
6. **AI Tool Cards** - Display AI tools with modern aesthetics

#### Integration Notes

- ⚠️ **Requires `client:load`** directive in Astro
- Works seamlessly with Tailwind CSS
- No external dependencies needed
- Fully responsive and touch-friendly

#### Demo

Visit `/spotlight-demo` to see all variations and examples in action.

