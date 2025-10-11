import React from 'react';
import WarpBackground from './warp-background';
import './AIToolsHero.css';

export default function AIToolsHero() {
  return (
    <section className="hero-section">
      {/* Warp Background Layer */}
      <div className="hero-warp-background">
        <WarpBackground
          colors={["#5AA469", "#6FC7B8", "#2E8BC0"]}
          speed={0.3}
          swirl={1.2}
          swirlIterations={8}
          shapeScale={0.4}
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
