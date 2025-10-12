import React from 'react';
import { AuroraBackground } from '@/components/aurora-background';
import './AIToolsHero.css';

export default function AIToolsHero() {
  return (
    <AuroraBackground className="hero-section" showRadialGradient={true}>
      <div className="hero-content">
        <h1 className="hero-title">
          AI Tools
        </h1>
        <p className="hero-subtitle">
          Discover the best AI tools ranked by performance, usability, and value.
        </p>
      </div>
    </AuroraBackground>
  );
}

