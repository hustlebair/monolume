"use client"

import React from 'react';

export const FuturisticDivider = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute w-64 h-16 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-blue-500/5 blur-2xl"></div>
      
      {/* Main divider line */}
      <div className="relative w-full max-w-3xl flex items-center gap-3">
        {/* Left line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-blue-500/60"></div>
        
        {/* Center element */}
        <div className="relative flex items-center justify-center">
          {/* Static outer ring */}
          <div className="absolute w-6 h-6 rounded-full border border-blue-500/30"></div>
          
          {/* Inner dot */}
          <div className="relative w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
        </div>
        
        {/* Right line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/40 to-purple-500/60"></div>
      </div>
    </div>
  );
};

