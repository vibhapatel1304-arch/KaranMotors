import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo.png"
                  alt="Karan Motor"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-white text-lg">Karan Motor</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional driving training for a safer, more confident you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">20 Day Course</span>
              </li>
              <li>
                <span className="text-muted-foreground">1 Week Intensive</span>
              </li>
              <li>
                <span className="text-muted-foreground">Advanced Training</span>
              </li>
              <li>
                <span className="text-muted-foreground">Expert Coaching</span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Phone:</strong>
                <br />
                +91 98982 60034
                <br />
                +91 88661 41405
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong>
                <br />
                karanmotors1105@gmail.com
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Hours:</strong>
                <br />
                Mon-Sun, 6 AM - 8 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="my-8">
          <h3 className="font-bold text-white mb-4 text-lg">Visit Us</h3>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-border">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.096240418002!2d73.17834307506736!3d22.2364269797326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc51b26877a43%3A0x9e3913cfad3cd3e2!2sKARAN%20MOTOR%20PRIVATE%20TRAINING!5e0!3m2!1sen!2sin!4v1774515497040!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Karan Motor Location"
/>
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            📍 Near FAG Company, Vallabh Nagar, Maneja, Vadodara 390013
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Karan Motor Private Training. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
