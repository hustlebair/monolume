# Pulse Posts

This folder contains quick-hit AI news posts for The Pulse page.

## How to Add a New Pulse Post

1. Create a new markdown file in this directory with a slug-friendly name (e.g., `gpt-5-preview.md`)

2. Add the frontmatter with required fields:

```markdown
---
title: "Your Post Title"
description: "A brief description (shown on the main pulse page)"
date: 2025-01-15
draft: false
tags: ["LLM", "OpenAI"]
videoEmbed: '<blockquote class="tiktok-embed"...optional TikTok embed code...</blockquote>'
---

Your main content goes here. This will be shown on the individual post page.

## You can use Markdown

- Lists
- **Bold text**
- Links, images, etc.
```

## Field Descriptions

- `title` **(required)**: The headline of the post
- `description` **(required)**: Brief summary shown on the main Pulse page
- `date` **(required)**: Publication date in YYYY-MM-DD format
- `draft` *(optional)*: Set to `true` to hide the post (default: `false`)
- `tags` *(optional)*: Array of category tags like `["LLM", "Image Gen", "Vision"]`
- `videoEmbed` *(optional)*: Full HTML embed code for TikTok or other video platforms

## URLs

- Main Pulse page: `/pulse`
- Individual post: `/pulse/your-file-name` (without `.md`)

For example, `gpt-5-preview.md` will be available at `/pulse/gpt-5-preview`

## Tips

- Use descriptive slugs (filename) for better SEO
- Keep descriptions concise (1-2 sentences)
- Add relevant tags for categorization
- Main content can be as detailed as needed
- Use standard Markdown formatting

