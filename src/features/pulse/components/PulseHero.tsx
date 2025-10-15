import React from 'react';
import { Ripple } from '@components/ripple';
import './PulseHero.css';

export default function PulseHero() {
  return (
    <div className="pulse-hero-section">
      <Ripple
        mainCircleSize={200}
        mainCircleOpacity={0.3}
        numCircles={8}
      />
      <div className="pulse-hero-content">
        <h1 className="pulse-hero-title">
          The Pulse
        </h1>
        <p className="pulse-hero-description">
          Daily quick hits on the latest AI developments, tools, and breakthroughs.
        </p>
      </div>
    </div>
  );
}

