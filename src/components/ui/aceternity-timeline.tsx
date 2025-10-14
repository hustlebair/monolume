"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode | {
    heading: string;
    description: string;
    highlight?: boolean;
    image?: string;
  };
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    // Initial height calculation
    updateHeight();

    // Recalculate height when images load
    const images = ref.current?.querySelectorAll('img');
    images?.forEach((img) => {
      if (img.complete) {
        updateHeight();
      } else {
        img.addEventListener('load', updateHeight);
      }
    });

    // Also recalculate on window resize
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      images?.forEach((img) => {
        img.removeEventListener('load', updateHeight);
      });
    };
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background dark:bg-background font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto p-4 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-foreground font-bold heading">
          The <span className="hero-gradient-text">AI Revolution</span> Timeline
        </h2>
        <p className="text-secondary text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Space Mono', 'Courier Prime', monospace" }}>
          From ChatGPT's explosive debut to today's intelligence leap. The pace of change isn't slowing down. It's accelerating.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background dark:bg-background flex items-center justify-center">
                {index === data.length - 1 ? (
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#ff4c4c' }}
                      animate={{
                        scale: [1, 2.5],
                        opacity: [0.6, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        repeatDelay: 0.5
                      }}
                    />
                    <div 
                      className="h-4 w-4 rounded-full border border-[#ff4c4c] p-2 relative z-10"
                      style={{ backgroundColor: '#ff4c4c', boxShadow: '0 0 10px #ff4c4c' }}
                    />
                  </div>
                ) : (
                  <div className="h-4 w-4 rounded-full bg-secondary dark:bg-secondary border border-secondary dark:border-secondary p-2" />
                )}
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-secondary dark:text-secondary heading">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-secondary dark:text-secondary heading">
                {item.title}
              </h3>
              {typeof item.content === 'object' && 'heading' in item.content ? (
                <div>
                  <h3 className={`text-foreground text-2xl md:text-3xl font-bold mb-4 heading ${item.content.highlight ? 'primary-gradient-text' : ''}`}>
                    {item.content.heading}
                  </h3>
                  <p className="text-secondary text-base md:text-lg mb-8" style={{ fontFamily: "'Space Mono', 'Courier Prime', monospace" }}>
                    {item.content.description}
                  </p>
                  {item.content.image && (
                    <div className="mt-4 rounded-lg overflow-hidden border border-secondary/20">
                      <img 
                        src={item.content.image} 
                        alt={item.content.heading}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ) : (
                item.content
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-secondary dark:via-secondary to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#ff4c4c] via-[#ff6b3d] to-[#e63946] from-[0%] via-[50%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

