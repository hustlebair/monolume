import React, { useState, useEffect, useRef } from 'react';
import './ImprovedStickyTabs.css';

export interface TabCategory {
  id: string;
  label: string;
}

const categories: TabCategory[] = [
  
  { id: 'llm', label: 'LLM' },
  { id: 'coding', label: 'AI CODING' },
  { id: 'image', label: 'IMAGE GENERATION' },
  { id: 'video', label: 'VIDEO GENERATION' },
  { id: 'audio', label: 'AUDIO/MUSIC AI' }
  
];

export default function ImprovedStickyTabs() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const heroElement = document.getElementById('hero-section');
    if (!heroElement || !navRef.current) return;

    // Store the nav height for placeholder
    setNavHeight(navRef.current.offsetHeight);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle tab switching and filtering
  useEffect(() => {
    const aiToolCards = document.querySelectorAll('.ai-tool-card');
    
    aiToolCards.forEach(card => {
      const cardElement = card as HTMLElement;
      const cardCategory = cardElement.getAttribute('data-category');
      
      if (activeTab === 'all' || cardCategory === activeTab) {
        cardElement.style.display = 'block';
        cardElement.style.animation = 'fadeInUp 0.3s ease';
      } else {
        cardElement.style.display = 'none';
      }
    });

    // Update URL hash for bookmarking
    if (activeTab !== 'all') {
      window.history.replaceState(null, '', `#${activeTab}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [activeTab]);

  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const validCategories = categories.map(c => c.id);
    if (hash && validCategories.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabClick = (categoryId: string) => {
    setActiveTab(categoryId);
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

