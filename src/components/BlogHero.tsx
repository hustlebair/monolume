import React from 'react';
import { EtheralShadow } from './ethereal-shadow';
import './BlogHero.css';

export default function BlogHero() {
  return (
    <EtheralShadow
      color="rgba(128, 128, 128, 1)"
      animation={{ scale: 100, speed: 90 }}
      noise={{ opacity: 1, scale: 1.2 }}
      className="blog-hero-section"
    >
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
    </EtheralShadow>
  );
}

