# Market Feature

This folder contains all components and assets related to the Market page.

## Structure

```
market/
├── components/
│   ├── StockMarketBackground.tsx  # Animated stock market bar chart background
│   ├── MarketHero.tsx             # Hero section for the market page
│   └── MarketHero.css             # Styling for the hero section
└── README.md                      # This file
```

## Components

### StockMarketBackground
An animated canvas background that displays rising and falling stock market bars with green gradients. Features:
- Real-time animated bar charts
- Smooth height transitions
- Responsive design
- Dark green gradient theme

### MarketHero
The hero section component for the Market page. Features:
- Integrates StockMarketBackground
- Page title and subtitle
- Consistent styling with other page heroes
- Responsive design

## Usage

```astro
---
import MarketHero from "@/features/market/components/MarketHero";
---

<MarketHero client:load />
```

## Notes
- The background animation uses Canvas API for performance
- Client-side rendering is required for animations (`client:load`)
- Colors use emerald/green theme for "market growth" feeling

