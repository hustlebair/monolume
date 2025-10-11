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
  pricing: string;
  features: string[];
}

export const aiTools: AITool[] = [
  {
    id: "claude",
    name: "Claude AI",
    logo: "/logos/claude-logo.png",
    rating: 4.8,
    reviewUrl: "/blog/claude-ai-review",
    affiliateUrl: "https://claude.ai?ref=your-affiliate-id",
    notes: "Best for complex reasoning and analysis. Excellent at coding and creative writing.",
    productDetails: "Claude is an AI assistant developed by Anthropic, designed to be helpful, harmless, and honest. It excels at complex reasoning tasks, coding assistance, and creative writing. Claude has a strong understanding of context and can maintain coherent conversations across long interactions.",
    quickTake: "Claude stands out for its exceptional reasoning capabilities and safety-focused design. It's particularly strong in coding tasks and complex analysis, making it ideal for developers and researchers.",
    category: "AI Assistant",
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
    category: "AI Assistant",
    pricing: "Free tier available, Plus at $20/month",
    features: ["Versatile AI assistant", "Plugin ecosystem", "Custom GPTs", "Code interpreter", "Image generation"]
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    logo: "/logos/perplexity-logo.png",
    rating: 4.6,
    reviewUrl: "/blog/perplexity-ai-review",
    affiliateUrl: "https://perplexity.ai?ref=your-affiliate-id",
    notes: "Best for research and fact-checking. Provides sources with every answer.",
    productDetails: "Perplexity AI is a search engine powered by AI that provides accurate, sourced answers to questions. It excels at research tasks and fact-checking by citing sources and providing up-to-date information.",
    quickTake: "Perplexity is the go-to tool for research and fact-checking. Its ability to provide sourced answers makes it invaluable for journalists, students, and researchers.",
    category: "Research AI",
    pricing: "Free tier available, Pro at $20/month",
    features: ["Sourced answers", "Real-time information", "Research focus", "Fact-checking", "Academic sources"]
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
    category: "AI Art",
    pricing: "Basic at $10/month, Standard at $30/month",
    features: ["High-quality art", "Multiple styles", "Photorealistic", "Artistic generation", "Community features"]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    logo: "/logos/notion-logo.png",
    rating: 4.3,
    reviewUrl: "/blog/notion-ai-review",
    affiliateUrl: "https://notion.so?ref=your-affiliate-id",
    notes: "Integrated AI for productivity. Perfect for writing and organization.",
    productDetails: "Notion AI integrates AI capabilities directly into the Notion workspace, helping with writing, brainstorming, and organization. It's designed to enhance productivity within the existing Notion ecosystem.",
    quickTake: "Notion AI seamlessly integrates AI into your existing workflow. It's perfect for those already using Notion who want AI assistance without switching tools.",
    category: "Productivity AI",
    pricing: "Free tier available, AI add-on at $8/month",
    features: ["Integrated workflow", "Writing assistance", "Brainstorming", "Organization", "Team collaboration"]
  }
];

// Sort tools by rating (highest to lowest)
export const sortedAiTools = aiTools.sort((a, b) => b.rating - a.rating);
