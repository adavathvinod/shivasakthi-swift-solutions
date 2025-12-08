import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MapSection from '@/components/MapSection';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919347635803?text=Hello!%20I%20would%20like%20to%20get%20in%20touch.', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Shivasakthi Solutions - LB Nagar, Hyderabad</title>
        <meta name="description" content="Contact Shivasakthi Solutions in LB Nagar, Hyderabad. Call +91 93476 35803 or visit our office at RTC Colony for all your service needs." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-br from-primary via-primary to-forest-light py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
                  Get in Touch
                </span>
                <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
                  Contact Us
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  We're here to help! Reach out to us through any of the channels below.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BD5A] font-display"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-display"
                  >
                    <a href="tel:+919347635803">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-display"
                  >
                    <a href="mailto:info@shivasakthisolutions.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <MapSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Contact;
