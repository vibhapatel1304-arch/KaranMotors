import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium">
                  ✨ Premium Driving Education
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight text-balance">
                Master the Road with{' '}
                <span className="gradient-text">Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience professional driving training designed for safety,
                confidence, and skill. Our expert instructor guide you every
                step of the way.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-200"
              >
                Explore Courses
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/918866141405"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-200"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-accent">500+</div>
                <p className="text-sm text-muted-foreground">Students Trained</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">10+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">98%</div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side - Decorative Element */}
          <div className="hidden md:block relative h-96 md:h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>


    </section>
  );
}
