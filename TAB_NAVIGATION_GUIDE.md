# AI Tools Tab Navigation System

## Overview
The AI tools page now includes a sticky tab navigation system that allows users to filter tools by category. The navigation sticks to the top when scrolling and provides smooth filtering functionality.

## Features

### Tab Categories
- **All Tools** - Shows all AI tools (default view)
- **LLM** - Large Language Models (Claude, ChatGPT)
- **AI Coding** - Coding assistants (GitHub Copilot)
- **Image Generation** - AI art tools (Midjourney)
- **Video Generation** - Video creation tools (Runway ML)
- **Audio/Music AI** - Music generation (Suno AI)
- **AI Writing** - Writing assistants (Notion AI)
- **Research & Analysis** - Research tools (Perplexity)

### Design Features
- **Sticky Behavior**: Tabs stick to top when scrolled past
- **Gradient Backgrounds**: Each tab has unique vibrant gradients
- **Smooth Animations**: Hover effects and transitions
- **Mobile Responsive**: Horizontal scroll on mobile with snap points
- **Theme Compatible**: Works in both light and dark modes
- **Accessibility**: Proper ARIA labels and keyboard navigation

## How to Add New Categories

### 1. Update TabNavigation.astro
Add new category to the `categories` array:
```typescript
{
  id: "new-category",
  label: "New Category",
  gradient: "linear-gradient(135deg, #color1 0%, #color2 100%)",
  hoverGradient: "linear-gradient(135deg, #color3 0%, #color4 100%)"
}
```

### 2. Update AI Tools Data
Add `categoryId` to tools in `src/data/ai-tools.ts`:
```typescript
{
  // ... other properties
  category: "New Category Name",
  categoryId: "new-category"
}
```

### 3. Update Valid Categories
Add the new category ID to the `validCategories` array in the TabNavigation script.

## Technical Details

### Sticky Implementation
- Uses `position: sticky` with `top: 0`
- Adds backdrop blur and shadow when sticky
- Smooth transition between normal and sticky states

### Filtering Logic
- JavaScript filters cards based on `data-category` attribute
- Smooth fade-in animation for filtered results
- URL hash updates for bookmarking

### Mobile Optimization
- Horizontal scroll with snap points
- Touch-friendly 44px minimum tap targets
- Scroll indicators for overflow

### Performance
- Passive scroll listeners
- Efficient DOM queries
- Minimal layout shifts

## Customization

### Gradient Colors
Each tab uses CSS custom properties for gradients:
```css
.tab-button {
  background: var(--gradient);
}
.tab-button:hover::before {
  background: var(--hover-gradient);
}
```

### Responsive Breakpoints
- Desktop: Full horizontal layout
- Tablet: Scrollable with indicators
- Mobile: Compact scroll with snap

### Theme Support
- Dark mode: Full vibrant gradients
- Light mode: Adjusted opacity and shadows
- Automatic theme detection

## Usage Examples

### Programmatic Tab Switching
```javascript
// Switch to a specific category
switchTab('llm');

// Switch to all tools
switchTab('all');
```

### URL Hash Navigation
- `#llm` - Shows LLM tools
- `#coding` - Shows coding tools
- `#all` or no hash - Shows all tools

The system is fully functional and ready for production use!
