'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Vibha Patel',
    review:
      'Great learning experience with Karan Motor Private Training. Gained confidence in driving. Highly recommended for serious learners.',
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    name: 'Yogesh Baviskar',
    review:
      'Excellent experience. Trainer is very professional, patient, and explains everything clearly. Helped me overcome fear of driving.',
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: 'Karan Furtado',
    review:
      'Amazing learning experience. Trainer guides from basics and monitors progress continuously. Very practical teaching style.',
    rating: 5,
    verified: true,
  },
  {
    id: 4,
    name: 'Arvind Singh Rajput',
    review:
      'Great experience. Trainer teaches in simple steps with easy understanding. Very professional approach.',
    rating: 5,
    verified: true,
  },
  {
    id: 5,
    name: 'Vasu Rathod',
    review:
      'One of the best places to learn driving. Personal attention and calm teaching style helped me gain confidence.',
    rating: 5,
    verified: true,
  },
  {
    id: 6,
    name: 'Tanmay Gupta',
    review:
      'Great experience. Instructors are patient, supportive, and professional. Learning process was very smooth.',
    rating: 5,
    verified: true,
  },
  {
    id: 7,
    name: 'Nidhi Jain',
    review:
      'Very skilled trainer. In just one week I gained a lot of confidence. Highly recommended.',
    rating: 5,
    verified: true,
  },
  {
    id: 8,
    name: 'Dipak Pujari',
    review:
      'Trainer explains even small details like turns, overtaking, and safety checks. Very helpful training.',
    rating: 5,
    verified: true,
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setAutoplay(false);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setAutoplay(false);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <section id="reviews" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium">
              ⭐ Google Verified Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our students who learned driving with confidence.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Review Card */}
          <div className="bg-background border border-border rounded-xl p-8 md:p-12 min-h-80 flex flex-col justify-between">

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={24} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-xl text-foreground leading-relaxed mb-6">
              "{reviews[currentIndex].review}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-lg">
                  {reviews[currentIndex].name}
                </p>
                {reviews[currentIndex].verified && (
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
              <div className="text-4xl">👤</div>
            </div>
          </div>

          {/* Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground rounded-full p-3"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground rounded-full p-3"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`h-3 rounded-full ${
                  index === currentIndex ? 'w-8 bg-accent' : 'w-3 bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-center">
          <div>
            <p className="text-3xl font-bold text-accent">4.9/5</p>
            <p className="text-muted-foreground">Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">500+</p>
            <p className="text-muted-foreground">Happy Students</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">Google</p>
            <p className="text-muted-foreground">Verified Reviews</p>
          </div>
        </div>

      </div>
    </section>
  );
}