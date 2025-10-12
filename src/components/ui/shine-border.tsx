import React from "react";
import { cn } from "@/lib/utils";

type ShineBorderProps = {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  className?: string;
  style?: React.CSSProperties;
};

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
  className,
  style,
}: ShineBorderProps) {
  const colors =
    typeof shineColor === "string" ? [shineColor] : shineColor;

  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-[-2px] rounded-[var(--border-radius)]",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient":
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${colors.length === 1 ? colors[0] : colors.join(",")},transparent,transparent)`,
            backgroundSize: "300% 300%",
            animation: `shine-pulse var(--duration) infinite linear`,
          } as React.CSSProperties
        }
        className="absolute inset-0 rounded-[var(--border-radius)] p-[var(--border-width)] will-change-[background-position] motion-reduce:transition-none [background-clip:padding-box,border-box] [background-origin:border-box] [mask-clip:padding-box,border-box] [mask-composite:intersect] [background:var(--background-radial-gradient)] [mask:var(--mask-linear-gradient)]"
      />
    </div>
  );
}

