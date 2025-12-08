import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Forms', path: '/forms' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleWhatsApp = () => {
    window.open('https://wa.me/919347635803?text=Hello%20Shivasakthi%20Solutions!%20I%20would%20like%20to%20enquire%20about%20your%20services.', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Shivasakthi Solutions" className="h-10 w-auto md:h-12" loading="eager" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+919347635803" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" />
            +91 93476 35803
          </a>
          <Button onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground font-display font-semibold shadow-md">
            Enquire on WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-display text-base font-medium transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-border" />
            <a href="tel:+919347635803" className="flex items-center gap-2 font-medium text-foreground/80">
              <Phone className="h-4 w-4" />
              +91 93476 35803
            </a>
            <Button onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground font-display font-semibold">
              Enquire on WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
