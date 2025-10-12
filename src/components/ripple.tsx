"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends React.ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    // Check initial theme - with fallback check
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const isDarkTheme = theme === 'dark' || theme === null || !theme;
      setIsDark(isDarkTheme);
      console.log('Ripple theme:', theme, 'isDark:', isDarkTheme);
    };

    // Check immediately
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className,
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";
        const borderColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.5)';
        const bgColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
        
        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full border shadow-xl`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: borderColor,
                backgroundColor: bgColor,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export type { RippleProps };

