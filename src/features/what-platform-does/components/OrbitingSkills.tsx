"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'claude' | 'cursor' | 'grok' | 'llamaindex' | 'n8n' | 'python' | 'chatgpt';

type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Icon Components Using PNG Images ---
const iconComponents: Record<IconType, { imagePath: string; color: string; label: string }> = {
  claude: {
    imagePath: '/orbiting-logos/claude-icon-8x.png',
    color: '#D97757',
    label: 'Claude AI'
  },
  cursor: {
    imagePath: '/orbiting-logos/cursor-ai.png',
    color: '#0B84F3',
    label: 'Cursor AI'
  },
  grok: {
    imagePath: '/orbiting-logos/f1cb9239c1408e2b7323b72ea80a0fab1760040027248.png',
    color: '#3ECF8E',
    label: 'Grok'
  },
  llamaindex: {
    imagePath: '/orbiting-logos/llamaindex-color.png',
    color: '#9D5CFF',
    label: 'LlamaIndex'
  },
  n8n: {
    imagePath: '/orbiting-logos/n8n-color.png',
    color: '#FF6D5A',
    label: 'n8n'
  },
  python: {
    imagePath: '/orbiting-logos/Python-logo-notext.svg.png',
    color: '#FFD43B',
    label: 'Python'
  },
  chatgpt: {
    imagePath: '/orbiting-logos/chatgpt-logo.png',
    color: '#10A37F',
    label: 'ChatGPT'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const icon = iconComponents[type];
  if (!icon) return null;
  
  return (
    <img 
      src={icon.imagePath} 
      alt={icon.label}
      className="w-full h-full object-contain"
    />
  );
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  { 
    id: 'claude',
    orbitRadius: 100, 
    size: 50, 
    speed: 0.5, 
    iconType: 'claude', 
    phaseShift: 0, 
    glowColor: 'cyan',
    label: 'Claude AI'
  },
  { 
    id: 'cursor',
    orbitRadius: 100, 
    size: 50, 
    speed: 0.5, 
    iconType: 'cursor', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'cyan',
    label: 'Cursor AI'
  },
  { 
    id: 'grok',
    orbitRadius: 100, 
    size: 50, 
    speed: 0.5, 
    iconType: 'grok', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'cyan',
    label: 'Grok'
  },
  // Outer Orbit - 4 logos equidistant (90 degrees apart)
  { 
    id: 'llamaindex',
    orbitRadius: 180, 
    size: 55, 
    speed: -0.3, 
    iconType: 'llamaindex', 
    phaseShift: 0, 
    glowColor: 'purple',
    label: 'LlamaIndex'
  },
  { 
    id: 'n8n',
    orbitRadius: 180, 
    size: 50, 
    speed: -0.3, 
    iconType: 'n8n', 
    phaseShift: Math.PI / 2, 
    glowColor: 'purple',
    label: 'n8n'
  },
  { 
    id: 'python',
    orbitRadius: 180, 
    size: 50, 
    speed: -0.3, 
    iconType: 'python', 
    phaseShift: Math.PI, 
    glowColor: 'purple',
    label: 'Python'
  },
  { 
    id: 'chatgpt',
    orbitRadius: 180, 
    size: 50, 
    speed: -0.3, 
    iconType: 'chatgpt', 
    phaseShift: (3 * Math.PI) / 2, 
    glowColor: 'purple',
    label: 'ChatGPT'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}66, 0 0 60px ${iconComponents[iconType]?.color}33`
            : undefined
        }}
      >
        <div className="w-full h-full p-1">
          <SkillIcon type={iconType} />
        </div>
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'cyan', delay: 0 },
    { radius: 180, glowColor: 'purple', delay: 1.5 }
  ];

  return (
    <main className="w-full flex items-center justify-center overflow-visible">
      <div 
        className="relative w-[min(90vw,550px)] h-[min(90vw,550px)] md:w-[550px] md:h-[550px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central "Brain" Icon with pink glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-pink-400/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
              <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
              <path d="M6 18a4 4 0 0 1-1.967-.516" />
              <path d="M19.967 17.484A4 4 0 0 1 18 18" />
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </main>
  );
}

