import { AlertCircle, Lightbulb, Shield } from 'lucide-react';

export default function TipsSection() {
  const tips = [
    {
      icon: AlertCircle,
      title: 'Always Check Blind Spots',
      description:
        'Before changing lanes, turning, or merging, always check your mirrors and look over your shoulder to ensure no vehicles are in your blind spot.',
      category: 'Safety',
    },
    {
      icon: Lightbulb,
      title: 'Maintain Safe Following Distance',
      description:
        'Keep at least 3 seconds of distance from the vehicle in front of you. In bad weather or at high speeds, increase this to 5 seconds.',
      category: 'Driving',
    },
    {
      icon: Shield,
      title: 'Practice Defensive Driving',
      description:
        'Always assume other drivers might make mistakes. Stay alert, reduce speed near intersections, and anticipate possible hazards.',
      category: 'Safety',
    },
    {
      icon: AlertCircle,
      title: 'Never Drive While Distracted',
      description:
        'Put away your phone, avoid eating while driving, and keep your focus entirely on the road. Distractions can be fatal.',
      category: 'Safety',
    },
    {
      icon: Lightbulb,
      title: 'Use Proper Hand Position',
      description:
        "Keep your hands at 9 and 3 o'clock positions on the steering wheel for better control and faster reaction times.",
      category: 'Technique',
    },
    {
      icon: Shield,
      title: 'Check Weather Conditions',
      description:
        'Adjust your driving style based on weather. Reduce speed during rain, fog, or snow. Increase following distance and brake gently.',
      category: 'Safety',
    },
  ];

  return (
    <section id="tips" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium">
              💡 Driving Tips
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expert Driving Tips & Advice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn essential driving techniques and safety tips from our
            experienced instructors to become a better driver.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {tip.category}
                  </span>
                </div>

                {/* Icon */}
                <IconComponent
                  className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>

                {/* Bottom Border */}
                <div className="mt-4 h-1 w-8 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}