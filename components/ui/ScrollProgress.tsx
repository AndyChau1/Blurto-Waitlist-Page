import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero' },
  { id: 'features' },
  { id: 'founder' },
  { id: 'faq' },
  { id: 'join' },
];

export const ScrollProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const center = window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
            const rect = element.getBoundingClientRect();
            // Check if the middle of the viewport is within this section
            // rect.top is relative to viewport top. 
            if (rect.top <= center && rect.bottom >= center) {
                setActiveSection(section.id);
                break;
            }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 items-center">
      {sections.map(({ id }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className="group relative flex items-center justify-center w-4 h-4 outline-none"
          aria-label={`Scroll to section ${id}`}
        >
            {/* The Dot */}
            <div className={`rounded-full transition-all duration-200 border border-transparent
                ${activeSection === id 
                    ? 'w-3 h-3 bg-orange-600 shadow-[0_0_0_4px_rgba(234,88,12,0.2)] scale-110' 
                    : 'w-2 h-2 bg-stone-300 group-hover:bg-stone-400 group-hover:scale-125'}
            `} />
            
            {/* Extended Hit Area for easier clicking */}
            <div className="absolute -inset-4 bg-transparent" />
        </a>
      ))}
    </div>
  );
};