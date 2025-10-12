# The Pulse - Quick AI News Updates

## 📱 What is The Pulse?

A short-form content section for daily AI news, updates, and quick hits. Think Twitter/TikTok style posts but on your own site.

- **Quick updates** - No long-form content, just the essentials
- **TikTok embeds** - Support for video content
- **Mobile-first** - Optimized for scrolling on phones
- **Daily cadence** - Post multiple times per day

## 🎯 Page Features

- **React Ripple Background** - Animated concentric circles create a pulsing effect
- **Hero Section** - Same size as blog header with "THE PULSE" title
- **Card-based Layout** - Clean, modern cards with hover effects
- **Tags System** - Categorize posts (LLM, Image Gen, Video, Audio, etc.)
- **Mobile Optimized** - Responsive design, edge-to-edge on mobile

## 📝 How to Add a Pulse Post

Edit `src/pages/pulse.astro` and add a new object to the `pulsePosts` array:

```typescript
{
  id: 3,
  date: new Date(),
  title: "Gemini 2.0 Released with Video Understanding",
  content: "Google's new model can now analyze and understand video content in real-time. Rolling out to Workspace users first.",
  videoEmbed: null, // or TikTok embed code
  tags: ["LLM", "Google"]
}
```

## 🎬 Adding TikTok Videos

To embed a TikTok video:

1. Go to the TikTok video
2. Click "Share" → "Embed"
3. Copy the embed code
4. Add it to the `videoEmbed` field:

```typescript
{
  id: 4,
  date: new Date(),
  title: "AI Tool Demo",
  content: "Watch how this new AI tool works in practice",
  videoEmbed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@username/video/123456789" data-video-id="123456789" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@username" href="https://www.tiktok.com/@username?refer=embed">@username</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
  tags: ["Demo", "Tools"]
}
```

## 🏷️ Available Tags

Common tags to use:
- `"LLM"` - Large Language Models
- `"Image Gen"` - Image Generation
- `"Video Gen"` - Video Generation
- `"Audio"` - Audio/Music AI
- `"Coding"` - AI Coding tools
- `"OpenAI"`, `"Anthropic"`, `"Google"` - Company names
- `"Research"` - AI Research papers
- `"Tools"` - New tool launches

## 🎨 Styling

The page uses:
- **Red accent color** (`#FF4C4C`) - Your brand color
- **Dark background** - Radial gradient from dark blue to black
- **Glass morphism** - Cards have subtle transparency
- **Hover effects** - Cards lift and glow on hover
- **Monospace font** - IBM Plex Mono for dates and tags

## 📱 Mobile Optimization

- Full-width layout on mobile
- Touch-friendly card spacing
- Responsive text sizes
- TikTok embeds auto-resize
- No horizontal scroll

## 🚀 Future Enhancements

Potential additions:
- [ ] Content collection for pulse posts (like blog)
- [ ] Markdown support for richer formatting
- [ ] Twitter/X embed support
- [ ] YouTube Shorts embeds
- [ ] Filter by tags
- [ ] Search functionality
- [ ] RSS feed for pulse updates
- [ ] Load more / pagination
- [ ] Date grouping (Today, Yesterday, This Week)

## 📍 File Locations

- **Page**: `src/pages/pulse.astro`
- **Hero**: `src/components/PulseHero.tsx`
- **Hero CSS**: `src/components/PulseHero.css`
- **Ripple Component**: `src/components/ripple.tsx`
- **Ripple Animation**: `src/styles/global.css` (lines 43-54)

## 🔗 Navigation

The page is accessible at `/pulse` and is added to the main navigation between "AI Tools" and "Systems".

