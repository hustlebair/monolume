import React from 'react';
import WarpBackground from './warp-background';
import './AIToolsHero.css';

export default function AIToolsHero() {
  return (
    <section className="hero-section">
      {/* Warp Background Layer */}
      <div className="hero-warp-background">
        <WarpBackground
          colors={["#ffffff", "#27272a"]}
          speed={0.25}
          swirl={1.5}
          swirlIterations={10}
          shapeScale={0.3}
        />
      </div>
      
      {/* Content Layer */}
      <div className="hero-content">
        <h1 className="hero-title">
          AI Tools
        </h1>
        <p className="hero-subtitle">
          Discover the best AI tools ranked by performance, usability, and value.
        </p>
      </div>
    </section>
  );
}
