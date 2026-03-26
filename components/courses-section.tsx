'use client';

import { Clock, BookOpen, MapPin, Trophy } from 'lucide-react';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    title: '1 Week Intensive Course',
    duration: '7 Days',
    price: '',
    description:
      'Fast-track intensive program with unlimited kilometers for comprehensive road experience.',
    features: [
      'Duration: 7 Days',
      'Unlimited Kilometers',
      'Daily practical training',
      'All road types covered',
      'Emergency handling techniques',
      'Defensive driving skills',
    
    ],
    highlights: ['Best for Quick Learning', 'Unlimited KMs'],
    icon: Clock,
  },
  {
    id: 2,
    title: '20 Day Standard Course',
    duration: '20 Days',
    price: '',
    description:
      'Comprehensive driving training with structured daily practice covering all fundamentals.',
    features: [
      'Duration: 20 Days',
      '6 KM per day',
      'Comprehensive curriculum',
      'Vehicle handling techniques',
      'Road safety & traffic rules',
      'Defensive driving skills',
   
    ],
    highlights: ['Most Thorough', 'Flexible Pace'],
    icon: BookOpen,
  },
];

export default function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium">
              📚 Our Courses
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer carefully designed programs that suit your schedule and
            learning pace.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className={`relative group rounded-xl border transition-all duration-300 cursor-pointer ${
                  selectedCourse === course.id
                    ? 'border-accent bg-card shadow-xl shadow-accent/20'
                    : 'border-border bg-card/50 hover:border-accent hover:bg-card'
                }`}
                onClick={() =>
                  setSelectedCourse(
                    selectedCourse === course.id ? null : course.id
                  )
                }
              >
                {/* Top Badge */}
                <div className="absolute -top-4 left-6 flex gap-2">
                  {course.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="p-8 pt-12">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <IconComponent className="text-accent mb-3" size={32} />
                      <h3 className="text-2xl font-bold text-white">
                        {course.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-accent font-semibold">
                        {course.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {course.description}
                  </p>

                  {/* Features */}
                  <div
                    className={`space-y-3 mb-8 transition-all duration-300 overflow-hidden ${
                      selectedCourse === course.id
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Trophy className="text-accent flex-shrink-0" size={18} />
                        <span className="text-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/918866141405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block py-3 px-4 bg-accent text-accent-foreground font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-accent/50 transition-all duration-200"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <MapPin className="mx-auto mb-4 text-accent" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">
            Training Location
          </h3>
          <p className="text-muted-foreground">
            Near FAG Company, Vallabh Nagar, Maneja, Vadodara 390013
          </p>
        </div>
      </div>
    </section>
  );
}
