#!/usr/bin/env node

/**
 * AI Tools Data Manager
 * 
 * This script helps you easily add new AI tools to the data structure.
 * Run with: node scripts/add-ai-tool.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const AI_TOOLS_FILE = 'src/features/ai-tools/data/tools.ts';

interface AIToolInput {
  name: string;
  rating: number;
  category: string;
  pricing: string;
  notes: string;
  productDetails: string;
  quickTake: string;
  features: string[];
  reviewUrl: string;
  affiliateUrl: string;
}

function addAITool(toolData: AIToolInput) {
  try {
    // Read current file
    const filePath = join(process.cwd(), AI_TOOLS_FILE);
    let content = readFileSync(filePath, 'utf-8');
    
    // Generate ID from name
    const id = toolData.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    // Create new tool object
    const newTool = {
      id: `"${id}"`,
      name: `"${toolData.name}"`,
      logo: `"/logos/${id}-logo.png"`,
      rating: toolData.rating,
      reviewUrl: `"${toolData.reviewUrl}"`,
      affiliateUrl: `"${toolData.affiliateUrl}"`,
      notes: `"${toolData.notes}"`,
      productDetails: `"${toolData.productDetails}"`,
      quickTake: `"${toolData.quickTake}"`,
      category: `"${toolData.category}"`,
      pricing: `"${toolData.pricing}"`,
      features: `[${toolData.features.map(f => `"${f}"`).join(', ')}]`
    };
    
    // Create the tool object string
    const toolString = `  {
    id: ${newTool.id},
    name: ${newTool.name},
    logo: ${newTool.logo},
    rating: ${newTool.rating},
    reviewUrl: ${newTool.reviewUrl},
    affiliateUrl: ${newTool.affiliateUrl},
    notes: ${newTool.notes},
    productDetails: ${newTool.productDetails},
    quickTake: ${newTool.quickTake},
    category: ${newTool.category},
    pricing: ${newTool.pricing},
    features: ${newTool.features}
  },`;
    
    // Find the insertion point (before the closing bracket of the array)
    const arrayEndIndex = content.lastIndexOf('];');
    if (arrayEndIndex === -1) {
      throw new Error('Could not find the end of the aiTools array');
    }
    
    // Insert the new tool
    const newContent = content.slice(0, arrayEndIndex) + toolString + '\n' + content.slice(arrayEndIndex);
    
    // Write back to file
    writeFileSync(filePath, newContent, 'utf-8');
    
    console.log(`✅ Successfully added ${toolData.name} to AI tools!`);
    console.log(`📝 Don't forget to:`);
    console.log(`   1. Add the logo image to public/logos/${id}-logo.png`);
    console.log(`   2. Create the review blog post at ${toolData.reviewUrl}`);
    console.log(`   3. Update your affiliate link: ${toolData.affiliateUrl}`);
    
  } catch (error) {
    console.error('❌ Error adding AI tool:', error.message);
  }
}

// Example usage - you can modify this or create a CLI interface
if (process.argv.length > 2) {
  const toolName = process.argv[2];
  console.log(`Adding ${toolName}...`);
  
  // You would typically prompt for input or read from a config file
  // For now, this is a template you can modify
  const exampleTool: AIToolInput = {
    name: toolName,
    rating: 4.0,
    category: "AI Assistant",
    pricing: "Free tier available, Pro at $20/month",
    notes: "Great tool for [specific use case]",
    productDetails: "Detailed description of the tool and its capabilities...",
    quickTake: "Quick summary of why this tool is recommended...",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    reviewUrl: `/blog/${toolName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-review`,
    affiliateUrl: `https://example.com?ref=your-affiliate-id`
  };
  
  addAITool(exampleTool);
} else {
  console.log(`
🤖 AI Tools Data Manager

Usage: node scripts/add-ai-tool.js <tool-name>

This script helps you add new AI tools to your data structure.
You'll need to manually edit the script to provide the tool details.

Example:
  node scripts/add-ai-tool.js "New AI Tool"
`);
}
