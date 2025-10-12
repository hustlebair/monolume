import React from 'react';
import { StockMarketBackground } from './StockMarketBackground';
import './MarketHero.css';

export default function MarketHero() {
  return (
    <StockMarketBackground className="market-hero-section">
      <div className="market-hero-content">
        <h1 className="market-hero-title">
          The Market
        </h1>
        <p className="market-hero-subtitle">
          Real-time insights and analysis of AI market trends
        </p>
      </div>
    </StockMarketBackground>
  );
}

