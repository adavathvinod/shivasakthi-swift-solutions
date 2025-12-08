import { Camera, Palette, Printer, FileText, Stethoscope, Plane, Map, PenTool } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Camera,
    title: 'CCTV Installation',
    description: 'Professional CCTV setup and security solutions for homes and businesses. 24/7 monitoring available.',
    link: '/services/cctv',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative designs for logos, branding, marketing materials, and digital assets.',
    link: '/services/graphic-design',
  },
  {
    icon: Printer,
    title: 'Printing Services',
    description: 'High-quality printing for business cards, banners, brochures, and all your printing needs.',
    link: '/services/printing',
  },
  {
    icon: FileText,
    title: 'Passport Services',
    description: 'Complete passport application assistance including documentation, forms, and appointment booking.',
    link: '/services/passport',
  },
  {
    icon: Stethoscope,
    title: 'Medical Services',
    description: 'Healthcare documentation, medical certificate assistance, and related administrative support.',
    link: '/services/medical',
  },
  {
    icon: Plane,
    title: 'Air/Train Ticketing',
    description: 'Hassle-free booking for domestic and international flights, trains, and buses.',
    link: '/services/ticketing',
  },
  {
    icon: Map,
    title: 'Itinerary Preparation',
    description: 'Custom travel itineraries and complete trip planning for business or leisure travel.',
    link: '/services/itinerary',
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Professional content for websites, blogs, marketing copy, and business communications.',
    link: '/services/content-writing',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Comprehensive Solutions for{' '}
            <span className="text-primary">Every Need</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From security to travel, design to documentation – we've got you covered with professional, affordable services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
