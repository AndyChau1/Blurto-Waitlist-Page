import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Helper hook for reduced motion preference
function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check if running in browser
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const onChange = () => {
      setShouldReduceMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return shouldReduceMotion;
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  duration = 0.6,
  yOffset = 12
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  // If reduced motion is enabled, we fade opacity only, no Y movement.
  const initial = { opacity: 0, y: shouldReduceMotion ? 0 : yOffset };
  const whileInView = { opacity: 1, y: 0 };
  
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};