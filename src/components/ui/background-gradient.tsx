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
  const gradientColors = theme === "resistance" 
    ? "from-[#5AA469] via-[#6FC7B8] to-[#2E8BC0]"
    : "from-[#FF4C4C] via-[#FF6B3D] to-[#E63946]";

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
          "absolute inset-0 rounded-xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
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
