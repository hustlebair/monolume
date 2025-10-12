'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StockMarketBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const StockMarketBackground: React.FC<StockMarketBackgroundProps> = ({
  className = '',
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const bars: Array<{
      x: number;
      baseHeight: number;
      currentHeight: number;
      targetHeight: number;
      speed: number;
      color: string;
    }> = [];

    const numBars = Math.floor(window.innerWidth / 40);
    const barWidth = window.innerWidth / numBars;

    const greenShades = [
      'rgba(16, 185, 129, 0.8)',
      'rgba(34, 197, 94, 0.7)',
      'rgba(74, 222, 128, 0.6)',
      'rgba(134, 239, 172, 0.5)',
    ];

    for (let i = 0; i < numBars; i++) {
      bars.push({
        x: i * barWidth,
        baseHeight: Math.random() * 200 + 100,
        currentHeight: Math.random() * 200 + 100,
        targetHeight: Math.random() * 200 + 100,
        speed: Math.random() * 0.02 + 0.01,
        color: greenShades[Math.floor(Math.random() * greenShades.length)],
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(6, 78, 59, 0.95)');
      gradient.addColorStop(0.5, 'rgba(5, 46, 22, 0.98)');
      gradient.addColorStop(1, 'rgba(3, 7, 18, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      bars.forEach((bar) => {
        if (Math.abs(bar.currentHeight - bar.targetHeight) < 1) {
          bar.targetHeight = Math.random() * 300 + 150;
        }

        bar.currentHeight += (bar.targetHeight - bar.currentHeight) * bar.speed;

        const barGradient = ctx.createLinearGradient(
          bar.x,
          canvas.height,
          bar.x,
          canvas.height - bar.currentHeight
        );
        barGradient.addColorStop(0, bar.color);
        barGradient.addColorStop(1, 'rgba(16, 185, 129, 0.1)');

        ctx.fillStyle = barGradient;
        ctx.fillRect(bar.x, canvas.height - bar.currentHeight, barWidth - 2, bar.currentHeight);

        ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.lineWidth = 1;
        ctx.strokeRect(bar.x, canvas.height - bar.currentHeight, barWidth - 2, bar.currentHeight);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(to bottom, #064e3b, #051e16, #030712)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-emerald-950/20" />

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-950/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />

      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

