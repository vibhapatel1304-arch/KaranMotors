'use client';

import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-30 p-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-xl hover:shadow-accent/50 transition-all duration-200 animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
