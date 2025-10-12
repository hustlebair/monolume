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
          THE PULSE
        </h1>
        <p className="pulse-hero-subtitle">
          Real-time AI intel. No fluff. Just the signal.
        </p>
        <p className="pulse-hero-description">
          Daily quick hits on the latest AI developments, tools, and breakthroughs. Stay ahead of the curve with bite-sized updates.
        </p>
      </div>
    </div>
  );
}

