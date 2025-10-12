import React from 'react';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { cn } from '@/lib/utils';
import './AIToolsHero.css';

export default function AIToolsHero() {
  return (
    <div className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <DottedSurface />
      </div>
      <div style={{ position: 'relative', zIndex: 10, minHeight: '300px' }} className="flex items-center justify-center">
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,rgba(255,76,76,0.15),transparent_50%)]',
            'blur-[60px]',
          )}
          style={{ zIndex: 1 }}
        />
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title">
            AI Tools
          </h1>
          <p className="hero-subtitle">
            Discover the best AI tools ranked by performance, usability, and value.
          </p>
        </div>
      </div>
    </div>
  );
}

