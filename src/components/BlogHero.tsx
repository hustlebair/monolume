import React from 'react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import './BlogHero.css';

export default function BlogHero() {
  return (
    <div className="blog-hero-section">
      <BackgroundPaths>
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">
            THE WATCHTOWER
          </h1>
          <p className="blog-hero-subtitle">
            The machines aren't coming — they're already here.
          </p>
          <p className="blog-hero-description">
            The Watchtower is your intel source for learning the tools, skills, and systems to stay ahead in the age of AI. Adapt fast. Upgrade your mind. Stay human.
          </p>
        </div>
      </BackgroundPaths>
    </div>
  );
}

