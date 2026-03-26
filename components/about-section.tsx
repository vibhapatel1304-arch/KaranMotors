import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const features = [
    'Certified Professional Instructor',
    'Personalized Training Programs',
    'Modern, Well-Maintained Vehicle',
    'Flexible Scheduling Options',
    'Comprehensive Theory & Practical',
    'Latest Driving Techniques',
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose{' '}
                <span className="text-accent">Karan Motor</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're committed to making you a confident, safe, and skilled
                driver. With years of experience and a proven track record, we
                deliver excellence in every lesson.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats & Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background/50 p-6 rounded-xl border border-border hover:border-accent transition-colors duration-200">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">Happy Students</p>
              </div>
              <div className="bg-background/50 p-6 rounded-xl border border-border hover:border-accent transition-colors duration-200">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <p className="text-muted-foreground">Years of Service</p>
              </div>
              <div className="bg-background/50 p-6 rounded-xl border border-border hover:border-accent transition-colors duration-200">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
              <div className="bg-background/50 p-6 rounded-xl border border-border hover:border-accent transition-colors duration-200">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 via-transparent to-transparent p-8 rounded-xl border border-accent/30">
              <h3 className="text-xl font-bold text-white mb-3">Our Promise</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just teach driving; we build confidence, safety
                awareness, and the skills needed to handle any road situation.
                Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
