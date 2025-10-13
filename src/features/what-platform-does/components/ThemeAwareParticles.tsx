"use client"

import React, { useEffect, useState } from 'react';
import { Particles } from '@/components/Particles';

export default function ThemeAwareParticles() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      quantity={80}
      ease={80}
      color={isDark ? "#ffffff" : "#000000"}
      refresh={false}
      vx={0.3}
      vy={0.3}
    />
  );
}

