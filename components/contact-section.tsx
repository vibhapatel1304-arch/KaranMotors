import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98982 60034 / +91 88661 41405',
      href: 'tel:+919898260034',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'karanmotors1105@gmail.com',
      href: 'mailto:karanmotors1105@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Near FAG Company, Vallabh Nagar, Maneja, Vadodara 390013',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: ' href="https://facebook.com/karanmotors1105',
      color: 'hover:text-blue-400',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: '"https://instagram.com/karanmotors1105',
      color: 'hover:text-pink-400',
    },
  
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/918866141405',
      color: 'hover:text-green-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium">
              📞 Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your driving journey? Reach out to us anytime. We're
            here to answer all your questions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                className="group bg-card border border-border rounded-xl p-8 text-center hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                    <IconComponent className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {info.label}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {info.value}
                </p>
              </a>
            );
          })}
        </div>

       

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-card border border-border rounded-full text-foreground transition-all duration-200 hover:border-accent hover:shadow-lg hover:shadow-accent/20 ${social.color}`}
                  aria-label={social.label}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
