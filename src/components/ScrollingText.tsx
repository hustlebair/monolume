'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingTextProps {
  text: string;
  className?: string;
}

export function ScrollingText({ text, className = "" }: ScrollingTextProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: [0, -100],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <span className="text-6xl md:text-8xl font-bold uppercase tracking-wider">
          {text}
        </span>
        <span className="text-6xl md:text-8xl font-bold uppercase tracking-wider ml-8">
          {text}
        </span>
        <span className="text-6xl md:text-8xl font-bold uppercase tracking-wider ml-8">
          {text}
        </span>
      </motion.div>
    </div>
  );
}
