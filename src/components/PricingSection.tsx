import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const pricingData = [
  {
    category: 'Healthcare Procedures',
    highlight: true,
    services: [
      { name: 'Suture Removal', price: '₹300', note: 'per session' },
      { name: 'Catheterization', price: '₹500', note: 'per procedure' },
      { name: 'Advanced Wound Dressing', price: '₹400', note: 'per session' },
      { name: 'IV Cannulation', price: '₹350', note: 'per procedure' },
      { name: 'Home Visit', price: '₹200', note: 'additional' },
    ],
  },
  {
    category: 'CCTV Installation',
    services: [
      { name: '2 Camera Setup', price: '₹8,000', note: 'installation included' },
      { name: '4 Camera Setup', price: '₹15,000', note: 'installation included' },
      { name: '8 Camera Setup', price: '₹28,000', note: 'installation included' },
      { name: 'DVR/NVR Setup', price: '₹3,000', note: 'starting from' },
      { name: 'Annual Maintenance', price: '₹2,500', note: 'per year' },
    ],
  },
  {
    category: 'Printing Services',
    services: [
      { name: 'Business Cards (100)', price: '₹250', note: 'premium quality' },
      { name: 'Brochures (100)', price: '₹1,200', note: 'full color' },
      { name: 'Banners (per sq ft)', price: '₹35', note: 'flex/vinyl' },
      { name: 'ID Cards (10)', price: '₹500', note: 'with lamination' },
      { name: 'Letterheads (100)', price: '₹400', note: 'A4 size' },
    ],
  },
  {
    category: 'Travel & Ticketing',
    services: [
      { name: 'Domestic Flight', price: '₹200', note: 'service charge' },
      { name: 'International Flight', price: '₹500', note: 'service charge' },
      { name: 'Train Booking', price: '₹50', note: 'service charge' },
      { name: 'Tatkal Booking', price: '₹150', note: 'service charge' },
      { name: 'Itinerary Planning', price: '₹1,000', note: 'starting from' },
    ],
  },
];

const PricingSection = () => {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919347635803?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20pricing.',
      '_blank'
    );
  };

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
            Transparent Pricing
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Service <span className="text-primary">Pricing Guide</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Clear, competitive pricing for all our services. Contact us for custom quotes on larger projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((category) => (
            <Card
              key={category.category}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                category.highlight
                  ? 'border-terracotta/50 bg-gradient-to-br from-terracotta/5 to-transparent'
                  : ''
              }`}
            >
              {category.highlight && (
                <div className="absolute top-0 right-0 bg-terracotta text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="font-display text-lg">{category.category}</CardTitle>
                <CardDescription>Professional services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-start justify-between gap-2 text-sm"
                  >
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground">{service.name}</span>
                        <span className="block text-xs text-muted-foreground">{service.note}</span>
                      </div>
                    </div>
                    <span className="font-semibold text-primary whitespace-nowrap">{service.price}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleWhatsApp}
                  variant={category.highlight ? 'default' : 'outline'}
                  className={`w-full font-display ${category.highlight ? 'bg-terracotta hover:bg-terracotta-light' : ''}`}
                  size="sm"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Prices are indicative and may vary based on requirements. Contact us for accurate quotations.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
