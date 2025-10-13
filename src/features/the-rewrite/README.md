# The Rewrite Section

This section displays a powerful message about adapting to the AI revolution with an animated blur text effect.

## Structure

```
src/features/the-rewrite/
├── components/
│   └── TheRewrite.astro      # Main section component
├── index.ts                   # Feature exports
└── README.md                  # This file
```

## Components

### TheRewrite.astro

Main section component that displays the message about AI adaptation.

**Features:**
- Animated blur text effect using GSAP
- DM Sans font for headline
- Space Mono font for subheadlines
- Responsive typography
- Centered max-width layout

**Content:**
- **Headline**: Powerful opening statement about changing rules
- **Subheadline**: Two-line description about industry transformation
- **Paragraph Copy**: Three paragraphs explaining the importance of AI adaptation

## Usage

Import and use in any Astro page:

```astro
---
import { TheRewrite } from '@/features/the-rewrite';
---

<TheRewrite />
```

## Dependencies

- GSAP (GreenSock Animation Platform) for text animation
- BlurTextEffect component for character-by-character animation

## Styling

Uses the site's theme-aware colors and fonts:
- Headlines: DM Sans
- Subheadlines: Space Mono
- Body text: DM Sans with 90% opacity for subtle effect

