import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  threshold = 0.1 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: threshold
      }
    );
    
    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [threshold]);
  
  return (
    <div ref={sectionRef} className="reveal-container">
      {children}
    </div>
  );
};

export default ScrollReveal;