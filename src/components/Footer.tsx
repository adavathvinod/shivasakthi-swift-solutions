import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-slate text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Shivasakthi Solutions" className="h-14 w-auto rounded-lg bg-background p-2" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              All services at your doorstep. Your one-stop solution for CCTV, printing, travel, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Forms', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 hover:text-terracotta transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['CCTV Installation', 'Graphic Design', 'Printing', 'Passport Services', 'Travel Booking'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-terracotta transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  RTC Colony, LB Nagar,<br />Hyderabad - 500070
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-terracotta shrink-0" />
                <a href="tel:+919347635803" className="text-sm text-primary-foreground/80 hover:text-terracotta transition-colors">
                  +91 93476 35803
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-terracotta shrink-0" />
                <a href="mailto:info@shivasakthisolutions.com" className="text-sm text-primary-foreground/80 hover:text-terracotta transition-colors">
                  info@shivasakthisolutions.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-terracotta shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Mon - Sat: 9AM - 7PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Shivasakthi Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-terracotta transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-terracotta transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
