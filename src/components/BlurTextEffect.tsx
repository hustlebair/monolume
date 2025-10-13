'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ text, className = '', delay = 0 }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('span.char');

    gsap.set(chars, { opacity: 0, y: 10, filter: 'blur(8px)' });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.03,
      delay: delay,
      clearProps: 'filter',
    });
  }, [text, delay]);

  return (
    <span className={`${className}`} ref={containerRef} style={{ display: 'inline' }}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIndex) => (
            <span key={`${wordIndex}-${charIndex}`} className="char inline-block">
              {char}
            </span>
          ))}
          {wordIndex < text.split(' ').length - 1 && <span className="char inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

