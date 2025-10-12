"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "transition-bg relative flex flex-col items-center justify-center",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
            "--aurora-dark":
              "repeating-linear-gradient(100deg,#FF4C4C_10%,#FF6B3D_15%,#E63946_20%,#FF4C4C_25%,#FF6B3D_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-60 blur-[10px] invert filter will-change-transform after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora-dark)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora-dark)]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`,
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};

