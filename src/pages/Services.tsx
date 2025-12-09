import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import { Camera, Palette, Printer, FileText, Stethoscope, Plane, Map, PenTool, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV Installation',
    description: 'Professional security camera installation and monitoring solutions for homes, offices, and commercial spaces.',
    features: ['HD & 4K Camera Options', 'Night Vision Support', 'Remote Monitoring', '24/7 Recording', 'Mobile App Access', 'Professional Installation'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
  },
  {
    id: 'graphic-design',
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative design solutions for branding, marketing materials, and digital assets that make your business stand out.',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Packaging Design', 'UI/UX Design'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    id: 'printing',
    icon: Printer,
    title: 'Printing Services',
    description: 'High-quality printing solutions for all your business and personal needs with quick turnaround times.',
    features: ['Business Cards', 'Brochures & Flyers', 'Banners & Posters', 'Letterheads', 'Catalogs', 'Custom Packaging'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
  },
  {
    id: 'passport',
    icon: FileText,
    title: 'Passport Services',
    description: 'Complete passport application assistance including documentation, forms, and appointment booking.',
    features: ['New Passport', 'Passport Renewal', 'Tatkal Services', 'Document Verification', 'Photo Services', 'Appointment Booking'],
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=600&q=80',
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare Procedures',
    description: 'Professional healthcare services by trained personnel for various medical procedures and documentation needs.',
    features: ['Suture Removal', 'Catheterization', 'Advanced Wound Dressing', 'IV Cannulation', 'Medical Certificates', 'Home Healthcare Visits'],
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
  },
  {
    id: 'ticketing',
    icon: Plane,
    title: 'Air/Train Ticketing',
    description: 'Hassle-free booking services for domestic and international flights, trains, and buses at competitive rates.',
    features: ['Flight Booking', 'Train Reservations', 'Bus Tickets', 'Tatkal Booking', 'Group Bookings', 'Travel Insurance'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
  },
  {
    id: 'itinerary',
    icon: Map,
    title: 'Itinerary Preparation',
    description: 'Custom travel itineraries and complete trip planning for business or leisure travel.',
    features: ['Custom Trip Planning', 'Hotel Reservations', 'Tour Packages', 'Visa Assistance', 'Travel Consultation', 'Emergency Support'],
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
  },
  {
    id: 'content-writing',
    icon: PenTool,
    title: 'Content Writing',
    description: 'Professional content creation for websites, blogs, marketing copy, and business communications.',
    features: ['Website Content', 'Blog Articles', 'Marketing Copy', 'Product Descriptions', 'Social Media Content', 'Email Campaigns'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
  },
];

const ServicesPage = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919347635803?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20services.', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Shivasakthi Solutions - CCTV, Printing, Travel & More</title>
        <meta name="description" content="Explore our comprehensive services including CCTV installation, graphic design, printing, passport services, travel booking, and content writing in Hyderabad." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary via-primary to-forest-light py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
                  What We Offer
                </span>
                <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
                  Our Services
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  From security solutions to creative services, travel assistance to documentation – we provide comprehensive solutions tailored to your needs.
                </p>
              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="space-y-16 md:space-y-24">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`grid gap-8 items-center lg:grid-cols-2 lg:gap-16 ${
                      index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-6">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={handleWhatsApp}
                        className="bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground font-display"
                      >
                        Enquire Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted py-16">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Can't find exactly what you're looking for? Contact us for personalized service packages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BD5A] font-display"
                  >
                    Chat on WhatsApp
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="font-display"
                  >
                    <Link to="/forms">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ServicesPage;
