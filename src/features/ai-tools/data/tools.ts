export interface AITool {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewUrl: string; // Link to blog post review
  affiliateUrl: string; // Affiliate link to visit site
  notes: string;
  productDetails: string;
  quickTake: string;
  category: string;
  categoryId: string; // For tab filtering
  pricing: string;
  features: string[];
}

export const aiTools: AITool[] = [
  {
    id: "claude",
    name: "Claude AI",
    logo: "/logos/claude_logo.svg",
    rating: 4.8,
    reviewUrl: "/blog/claude-ai-review",
    affiliateUrl: "https://claude.ai?ref=your-affiliate-id",
    notes: "Best for complex reasoning and analysis. Excellent at coding and creative writing.",
    productDetails: "Claude is an AI assistant developed by Anthropic, designed to be helpful, harmless, and honest. It excels at complex reasoning tasks, coding assistance, and creative writing. Claude has a strong understanding of context and can maintain coherent conversations across long interactions.",
    quickTake: "Claude stands out for its exceptional reasoning capabilities and safety-focused design. It's particularly strong in coding tasks and complex analysis, making it ideal for developers and researchers.",
    category: "Large Language Model",
    categoryId: "llm",
    pricing: "Free tier available, Pro at $20/month",
    features: ["Advanced reasoning", "Code assistance", "Creative writing", "Long context", "Safety-focused"]
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/logos/chatgpt-logo.png",
    rating: 4.5,
    reviewUrl: "/blog/chatgpt-review",
    affiliateUrl: "https://chat.openai.com?ref=your-affiliate-id",
    notes: "Most popular AI assistant. Great for general tasks and creative projects.",
    productDetails: "ChatGPT by OpenAI is the most widely used AI assistant. It's versatile across many tasks including writing, coding, analysis, and creative projects. The GPT-4 model offers advanced capabilities with plugins and custom GPTs.",
    quickTake: "ChatGPT remains the gold standard for AI assistants. Its versatility and extensive plugin ecosystem make it suitable for almost any task, from creative writing to data analysis.",
    category: "Large Language Model",
    categoryId: "llm",
    pricing: "Free tier available, Plus at $20/month",
    features: ["Versatile AI assistant", "Plugin ecosystem", "Custom GPTs", "Code interpreter", "Image generation"]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    logo: "/logos/midjourney-logo.png",
    rating: 4.7,
    reviewUrl: "/blog/midjourney-review",
    affiliateUrl: "https://midjourney.com?ref=your-affiliate-id",
    notes: "Top choice for AI art generation. Exceptional quality and artistic style.",
    productDetails: "Midjourney is a leading AI art generation tool that creates high-quality images from text prompts. It's known for its artistic quality and ability to generate photorealistic and stylized images.",
    quickTake: "Midjourney sets the standard for AI art generation. Its artistic quality and attention to detail make it the preferred choice for artists, designers, and content creators.",
    category: "Image Generation",
    categoryId: "image",
    pricing: "Basic at $10/month, Standard at $30/month",
    features: ["High-quality art", "Multiple styles", "Photorealistic", "Artistic generation", "Community features"]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    logo: "/logos/Notion-logo.png",
    rating: 4.3,
    reviewUrl: "/blog/notion-ai-review",
    affiliateUrl: "https://notion.so?ref=your-affiliate-id",
    notes: "Integrated AI for productivity. Perfect for writing and organization.",
    productDetails: "Notion AI integrates AI capabilities directly into the Notion workspace, helping with writing, brainstorming, and organization. It's designed to enhance productivity within the existing Notion ecosystem.",
    quickTake: "Notion AI seamlessly integrates AI into your existing workflow. It's perfect for those already using Notion who want AI assistance without switching tools.",
    category: "AI Writing",
    categoryId: "writing",
    pricing: "Free tier available, AI add-on at $8/month",
    features: ["Integrated workflow", "Writing assistance", "Brainstorming", "Organization", "Team collaboration"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    logo: "/logos/github-copilot-logo.jpg",
    rating: 4.4,
    reviewUrl: "/blog/github-copilot-review",
    affiliateUrl: "https://github.com/features/copilot?ref=your-affiliate-id",
    notes: "Best AI coding assistant. Integrates seamlessly with VS Code and other editors.",
    productDetails: "GitHub Copilot is an AI pair programmer that helps you write code faster and with fewer errors. It suggests code and entire functions in real-time as you type, trained on billions of lines of public code.",
    quickTake: "GitHub Copilot revolutionizes coding by providing intelligent code suggestions. It's particularly powerful for repetitive tasks and learning new programming languages.",
    category: "AI Coding",
    categoryId: "coding",
    pricing: "Individual at $10/month, Business at $19/month",
    features: ["Code suggestions", "Multi-language support", "IDE integration", "Context awareness", "Learning assistance"]
  },
  {
    id: "runway",
    name: "Runway ML",
    logo: "/logos/Runway_Logo.webp",
    rating: 4.2,
    reviewUrl: "/blog/runway-ml-review",
    affiliateUrl: "https://runwayml.com?ref=your-affiliate-id",
    notes: "Leading AI video generation platform. Excellent for creative video content.",
    productDetails: "Runway ML offers powerful AI tools for video generation, editing, and manipulation. It's used by filmmakers, content creators, and artists to create stunning visual content with AI assistance.",
    quickTake: "Runway ML is at the forefront of AI video generation. Its tools are professional-grade and perfect for creators looking to push the boundaries of visual storytelling.",
    category: "Video Generation",
    categoryId: "video",
    pricing: "Free tier available, Pro at $12/month",
    features: ["Video generation", "AI editing", "Motion graphics", "Green screen", "Style transfer"]
  },
  {
    id: "suno",
    name: "Suno AI",
    logo: "/logos/suno-logo.webp",
    rating: 4.1,
    reviewUrl: "/blog/suno-ai-review",
    affiliateUrl: "https://suno.ai?ref=your-affiliate-id",
    notes: "Revolutionary AI music generation. Create full songs from text prompts.",
    productDetails: "Suno AI generates complete songs with vocals, instruments, and lyrics from simple text prompts. It's perfect for musicians, content creators, and anyone who wants to create music without traditional instruments.",
    quickTake: "Suno AI democratizes music creation by allowing anyone to generate professional-quality songs. It's particularly impressive for its ability to create coherent lyrics and melodies.",
    category: "Audio/Music AI",
    categoryId: "audio",
    pricing: "Free tier available, Pro at $8/month",
    features: ["Song generation", "Lyrics creation", "Multiple genres", "Vocals included", "High quality audio"]
  }
];

// Sort tools by rating (highest to lowest)
export const sortedAiTools = aiTools.sort((a, b) => b.rating - a.rating);

