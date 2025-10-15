'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingTextProps {
  text: string;
  className?: string;
}

export function ScrollingText({ text, className = "" }: ScrollingTextProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap`}>
      <motion.div
        className="inline-flex min-w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 8,
            ease: "linear",
          },
        }}
      >
        {/* block A */}
        <div className="inline-flex min-w-max">
          <span className={`text-6xl md:text-8xl font-bold uppercase tracking-wider ${className}`}>{text}</span>
          <span className={`text-6xl md:text-8xl font-bold uppercase tracking-wider ml-8 ${className}`}>{text}</span>
          <span className={`text-6xl md:text-8xl font-bold uppercase tracking-wider ml-8 ${className}`}>{text}</span>
        </div>
        {/* block B (duplicate for seamless loop) */}
        <div className="inline-flex min-w-max" aria-hidden="true">
          <span className={`text-6xl md:text-8xl font-bold uppercase tracking-wider ml-8 ${className}`}>{text}</span>
          <span className={`text-6xl md:text-8xl font-bold uppercase tracking-wider ml-8 ${className}`}>{text}</span>
          <span className={`text-6xl md:text-8xl font-bold uppercase tracking-wider ml-8 ${className}`}>{text}</span>
        </div>
      </motion.div>
    </div>
  );
}
