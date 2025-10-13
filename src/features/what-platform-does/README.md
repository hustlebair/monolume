# What Platform Does Feature

## 📁 Folder Structure

```
src/features/what-platform-does/
├── components/
│   ├── OrbitingSkills.tsx           # Animated orbiting skills visualization
│   ├── ThemeAwareParticles.tsx      # Theme-aware particle background
│   └── WhatPlatformDoes.astro       # Section wrapper with heading
├── index.ts                          # Feature exports
└── README.md                         # This file
```

## 🧩 Components

### WhatPlatformDoes.astro

The main section component that wraps the orbiting skills with a heading, description, and animated particle background.

**Features:**
- Centered heading: "What The Platform Does"
- Subheading with Space Mono font
- Responsive container with proper spacing
- Theme-aware styling
- Animated particle background (light/dark compatible)
- Proper z-index layering for visual depth

**Usage:**
```astro
---
import { WhatPlatformDoes } from '@features/what-platform-does';
---

<WhatPlatformDoes />
```

### ThemeAwareParticles.tsx

Interactive particle background component that automatically adapts to light/dark theme.

**Features:**
- 🎨 **Theme Detection**: Automatically switches particle color based on theme
  - Dark theme: White particles (`#ffffff`)
  - Light theme: Black particles (`#000000`)
- 🖱️ **Mouse Interaction**: Particles react to mouse movement with magnetism effect
- ✨ **Smooth Animation**: Canvas-based rendering with 60fps performance
- 📱 **Responsive**: Adapts to container size changes
- 🎯 **Configurable**: 80 particles with optimized ease settings

**Technical Details:**
- Uses `MutationObserver` to detect theme changes
- Canvas-based rendering for performance
- Particles fade in/out at edges
- Mouse magnetism effect (particles follow cursor)

### OrbitingSkills.tsx

Interactive React component showing orbiting technology icons around a central code symbol.

**Source**: [21st.dev - Orbiting Skills](https://21st.dev/seraui/orbiting-skills/default)

**Features:**
- ✨ Smooth orbital animations
- 🎯 Two orbit layers (inner/outer)
- 🖱️ Interactive hover effects
- ⏸️ Pause on hover
- 📱 Fully responsive
- 🎨 Glowing effects and shadows
- 💫 requestAnimationFrame-based animation

**Technologies Displayed:**
- **Inner Orbit (Cyan)**: HTML5, CSS3, JavaScript
- **Outer Orbit (Purple)**: React, Node.js, Tailwind CSS

## 🎨 Visual Features

### Central Icon
- Gradient code icon (`</>`)
- Pulsing cyan and purple glows
- Dark gradient background

### Orbit Paths
- Glowing orbital rings
- Cyan glow for inner orbit
- Purple glow for outer orbit
- Animated pulse effects

### Skill Icons
- SVG technology logos
- Hover tooltips with labels
- Scale animation on hover
- Color-matched glow effects

## 🎛️ Customization

### Changing Skills

Edit `skillsConfig` in `OrbitingSkills.tsx`:

```typescript
const skillsConfig: SkillConfig[] = [
  { 
    id: 'your-skill',
    orbitRadius: 100,      // Distance from center
    size: 40,              // Icon size in px
    speed: 1,              // Rotation speed (negative = reverse)
    iconType: 'html',      // Icon to display
    phaseShift: 0,         // Starting position (radians)
    glowColor: 'cyan',     // 'cyan' or 'purple'
    label: 'Your Label'    // Hover tooltip text
  },
  // ... more skills
];
```

### Adding New Icons

1. Add icon type to `IconType`:
```typescript
type IconType = 'html' | 'css' | 'javascript' | 'react' | 'node' | 'tailwind' | 'your-icon';
```

2. Add icon component to `iconComponents`:
```typescript
'your-icon': {
  component: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      {/* Your SVG paths */}
    </svg>
  ),
  color: '#HEX-COLOR'
}
```

### Adjusting Orbit Sizes

Edit `orbitConfigs` in the main component:

```typescript
const orbitConfigs = [
  { radius: 100, glowColor: 'cyan', delay: 0 },      // Inner orbit
  { radius: 180, glowColor: 'purple', delay: 1.5 }  // Outer orbit
];
```

### Changing Colors

Modify `glowColors` in `GlowingOrbitPath`:

```typescript
const glowColors = {
  cyan: {
    primary: 'rgba(6, 182, 212, 0.4)',
    secondary: 'rgba(6, 182, 212, 0.2)',
    border: 'rgba(6, 182, 212, 0.3)'
  },
  purple: {
    primary: 'rgba(147, 51, 234, 0.4)',
    secondary: 'rgba(147, 51, 234, 0.2)',
    border: 'rgba(147, 51, 234, 0.3)'
  }
};
```

## 🎯 Animation Details

### Orbit Mechanics
- **Inner orbit**: Clockwise rotation (speed: 1)
- **Outer orbit**: Counter-clockwise rotation (speed: -0.6)
- **Phase shifts**: Icons evenly distributed (120° apart)

### Performance
- Uses `requestAnimationFrame` for smooth 60fps
- Pauses animation on hover to reduce CPU usage
- Memoized components to prevent unnecessary re-renders
- Optimized with React.memo for skill icons and orbit paths

### Responsive Behavior
- **Mobile**: `calc(100vw-40px)` with 20px margin
- **Desktop**: Fixed 450px × 450px
- Icons scale proportionally
- Touch-friendly hover states

## 📱 Integration Notes

- ⚠️ **Requires `client:load`** in Astro for React interactivity
- Uses Tailwind CSS for styling
- No external animation libraries needed
- Self-contained with all SVG icons included

## 🚀 Current Usage

- **Home Page** (`src/pages/index.astro`) - Below the timeline section

## 💡 Use Cases

1. **Technology Showcase** - Display your tech stack
2. **Skills Visualization** - Show proficiency areas
3. **Portfolio Enhancement** - Interactive resume element
4. **Course Platform** - Visualize learning paths
5. **Team Skills** - Show collective capabilities

## 🎓 Learning Resources

- [React useEffect](https://react.dev/reference/react/useEffect)
- [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [React.memo](https://react.dev/reference/react/memo)
- [SVG on MDN](https://developer.mozilla.org/en-US/docs/Web/SVG)

---

**Source**: Component adapted from [21st.dev](https://21st.dev/seraui/orbiting-skills/default)

