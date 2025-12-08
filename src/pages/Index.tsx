import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Shivasakthi Solutions | All Services at Your Doorstep - Hyderabad</title>
        <meta name="description" content="Shivasakthi Solutions offers CCTV installation, graphic design, printing, passport services, travel booking, and more in Hyderabad. Quality services at your doorstep." />
        <meta name="keywords" content="CCTV Hyderabad, printing services, passport services, graphic design, travel booking, LB Nagar" />
        <link rel="canonical" href="https://shivasakthisolutions.com" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <ServicesSection />
          <CTASection />
          <MapSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
