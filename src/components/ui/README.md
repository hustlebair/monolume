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

