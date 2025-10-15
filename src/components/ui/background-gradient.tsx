"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  theme?: "resistance" | "takeover";
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  theme = "resistance",
}: BackgroundGradientProps) => {
  const gradientColors = "from-[#3B82F6] via-[#FFFFFF] to-[#A855F7]";

  return (
    <div
      className={cn(
        "relative group",
        containerClassName
      )}
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl z-[1] opacity-40 group-hover:opacity-70 blur-xl transition duration-500",
          `bg-gradient-to-r ${gradientColors}`,
          animate && "animate-pulse"
        )}
      />
      {/* Border gradient */}
      <div
        className={cn(
          "relative p-[2px] rounded-xl",
          `bg-gradient-to-r ${gradientColors}`
        )}
      >
        <div
          className={cn(
            "relative z-10 rounded-xl bg-background",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
