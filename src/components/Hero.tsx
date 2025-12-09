import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919347635803?text=Hello%20Shivasakthi%20Solutions!%20I%20would%20like%20to%20enquire%20about%20your%20services.',
      '_blank'
    );
  };

  const benefits = [
    'Professional Service',
    'Affordable Pricing',
    'Quick Turnaround',
    'Doorstep Delivery',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-forest-light py-20 md:py-28 lg:py-36">
      {/* Dynamic Light Rays Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-spin-slow">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 h-1 origin-left"
              style={{
                width: '50%',
                transform: `rotate(${i * 30}deg)`,
                background: `linear-gradient(90deg, transparent 0%, hsla(24, 65%, 47%, 0.15) 50%, transparent 100%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-terracotta/40 animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-terracotta blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      {/* Logo Watermark with Breathing Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary-foreground/5 blur-xl animate-logo-glow" />
          <img
            src={logo}
            alt=""
            className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain opacity-20 animate-logo-breathe"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm border border-primary-foreground/10">
            <span className="h-2 w-2 rounded-full bg-terracotta animate-pulse" />
            Trusted by 1000+ customers
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            All Services at{' '}
            <span className="relative">
              <span className="text-terracotta">Your Doorstep</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 8" stroke="hsl(24 65% 47%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 md:text-xl drop-shadow">
            Your one-stop solution for CCTV installation, graphic design, printing, passport services, travel booking, and more. Quality you can trust, right at your doorstep.
          </p>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-primary-foreground/90 bg-primary-foreground/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-terracotta" />
                {benefit}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground font-display font-semibold text-base px-8 py-6 shadow-lg sm:w-auto transition-transform hover:scale-105"
            >
              Enquire on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 font-display font-semibold text-base px-8 py-6 sm:w-auto backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
