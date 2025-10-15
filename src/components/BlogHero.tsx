import React from 'react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import './BlogHero.css';

export default function BlogHero() {
  return (
    <div className="blog-hero-section">
      <BackgroundPaths>
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">
            The Uprising
          </h1>
          <p className="blog-hero-subtitle">
            Weekly newsletter from the front lines of AI.
          </p>
          <p className="blog-hero-description">
            The gap grows every day you wait. Get unfiltered intel on the tools reshaping business, where smart money is moving, and the strategies separating the updated from the obsolete.
          </p>
        </div>
      </BackgroundPaths>
    </div>
  );
}

