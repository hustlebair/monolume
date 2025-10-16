"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleSpeed?: number;
  particleColor?: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.0,
  particleDensity = 100,
  particleSpeed = 0.5,
  particleColor = "#FFFFFF",
  speed = 1,
  className,
  style,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    const particleCount = Math.floor(particleDensity / 10); // Scale down density for performance
    
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      speed: (particleSpeed + Math.random() * 0.5) * speed,
      color: particleColor,
      opacity: 0.6 + Math.random() * 0.4,
      life: 1,
      maxLife: 1,
    }));
  }, [particleDensity, minSize, maxSize, particleSpeed, particleColor, speed]);

  const updateParticles = useCallback(() => {
    return particles.map((particle) => {
      const newY = particle.y + particle.speed;
      const newLife = particle.life - 0.01;
      const newOpacity = Math.max(0, newLife);

      return {
        ...particle,
        y: newY > 100 ? -10 : newY,
        life: newLife > 0 ? newLife : 1,
        opacity: newOpacity,
      };
    });
  }, [particles]);

  const [currentParticles, setCurrentParticles] = useState(particles);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentParticles(updateParticles());
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [mounted, updateParticles]);

  if (!mounted) {
    return <div className={cn("w-full h-full", className)} style={style} />;
  }

  return (
    <div
      id={id}
      className={cn("relative w-full h-full overflow-hidden", className)}
      style={{
        background,
        ...style,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        {currentParticles.map((particle) => (
          <circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particle.color}
            opacity={particle.opacity}
            style={{
              filter: `blur(${particle.size * 0.3}px)`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Keep the original Sparkles component for backward compatibility
export const Sparkles = SparklesCore;
