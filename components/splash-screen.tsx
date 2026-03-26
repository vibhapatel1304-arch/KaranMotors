'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-background via-background to-card transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <div className="relative h-32 w-32 md:h-40 md:w-40">
          <Image
            src="/logo.png"
            alt="Karan Motor Logo"
            fill
            className="object-contain animate-fade-in"
            priority
          />
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Karan Motor
          </h1>
          <p className="text-accent text-lg md:text-xl font-medium">
            Private Training
          </p>
          <p className="text-muted-foreground text-sm md:text-base mt-4">
            Master the Road with Excellence
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex gap-2">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse animation-delay-100"></div>
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse animation-delay-200"></div>
        </div>
      </div>
    </div>
  );
}
