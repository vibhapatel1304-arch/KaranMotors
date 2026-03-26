'use client';

import { useState } from 'react';
import SplashScreen from '@/components/splash-screen';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import CoursesSection from '@/components/courses-section';
import GallerySection from '@/components/gallery-section';
import TipsSection from '@/components/tips-section';
import ReviewsSection from '@/components/reviews-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <GallerySection />
      <TipsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
