import React, { useState, useEffect, useRef } from 'react';
import './ImprovedStickyTabs.css';

export interface TabCategory {
  id: string;
  label: string;
  title: string;
  description: string;
}

const categories: TabCategory[] = [
  { 
    id: 'llm', 
    label: 'LLM',
    title: 'Large Language Models',
    description: 'Advanced language models for general day-to-day tasks, analysis, and creative work'
  },
  { 
    id: 'coding', 
    label: 'AI CODING',
    title: 'AI Coding Assistants',
    description: 'AI-powered coding assistants and development tools to boost your productivity'
  },
  { 
    id: 'image', 
    label: 'IMAGE GENERATION',
    title: 'AI Image Generation',
    description: 'Create stunning visuals and artwork with AI-powered image generators'
  },
  { 
    id: 'video', 
    label: 'VIDEO GENERATION',
    title: 'AI Video Generation',
    description: 'AI tools for video creation, editing, and visual storytelling'
  },
  { 
    id: 'audio', 
    label: 'AUDIO/MUSIC AI',
    title: 'AI Audio & Music',
    description: 'Generate music, audio effects, and voice synthesis with AI'
  },
  { 
    id: 'writing', 
    label: 'AI WRITING',
    title: 'AI Writing Assistants',
    description: 'Enhance your writing with AI-powered tools for content creation'
  }
];

export { categories };

export default function ImprovedStickyTabs() {
  const [activeTab, setActiveTab] = useState<string>('llm');
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up sticky behavior for the nav bar
  useEffect(() => {
    const heroElement = document.getElementById('hero-section');
    if (!heroElement || !navRef.current) return;

    // Function to update nav height
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    // Store the nav height for placeholder
    updateNavHeight();

    // Create intersection observer for the hero section
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is out of view (not intersecting), fix the nav
        setIsFixed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    observer.observe(heroElement);

    // Handle window resize
    window.addEventListener('resize', updateNavHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  // Track which section is currently visible
  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const options = {
      root: null,
      rootMargin: `-${navHeight + 20}px 0px -70% 0px`,
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace('-section', '');
          setActiveTab(sectionId);
          // Update URL hash
          window.history.replaceState(null, '', `#${sectionId}`);
        }
      });
    }, options);

    // Observe all category sections
    categories.forEach((category) => {
      const section = document.getElementById(`${category.id}-section`);
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [navHeight]);

  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const validCategories = categories.map(c => c.id);
    if (hash && validCategories.includes(hash)) {
      // Wait for sections to render, then scroll
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  const scrollToSection = (categoryId: string) => {
    const section = document.getElementById(`${categoryId}-section`);
    if (!section || !navRef.current) return;

    const navHeight = navRef.current.offsetHeight;
    const sectionTop = section.offsetTop;
    const offsetPosition = sectionTop - navHeight; // Position headline right below sticky nav

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setActiveTab(categoryId);
    window.history.replaceState(null, '', `#${categoryId}`);
  };

  const handleTabClick = (categoryId: string) => {
    scrollToSection(categoryId);
  };

  return (
    <>
      {/* Placeholder to prevent layout shift when nav becomes fixed */}
      {isFixed && (
        <div 
          ref={placeholderRef}
          style={{ height: navHeight }}
          aria-hidden="true"
        />
      )}
      
      <nav
        ref={navRef}
        className={`sticky-nav-wrapper ${isFixed ? 'is-fixed' : ''}`}
        role="navigation"
        aria-label="AI Tools Categories"
      >
        <div className="nav-scroll-container">
          <div className="nav-tabs-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`nav-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => handleTabClick(category.id)}
                role="tab"
                aria-selected={activeTab === category.id}
                aria-controls={`panel-${category.id}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

