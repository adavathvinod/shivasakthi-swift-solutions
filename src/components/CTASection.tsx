import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919347635803?text=Hello%20Shivasakthi%20Solutions!%20I%20would%20like%20to%20enquire%20about%20your%20services.',
      '_blank'
    );
  };

  return (
    <section className="relative overflow-hidden bg-terracotta py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Contact us today for a free consultation. We're here to help with all your service needs.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground font-display font-semibold text-base px-8 shadow-lg sm:w-auto"
            >
              Enquire on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-display font-semibold text-base px-8 sm:w-auto"
            >
              <Link to="/forms">
                Request a Quote
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
            <Phone className="h-5 w-5" />
            <span>Or call us directly at</span>
            <a href="tel:+919347635803" className="font-semibold text-primary-foreground underline underline-offset-2 hover:text-primary-foreground/90">
              +91 93476 35803
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
