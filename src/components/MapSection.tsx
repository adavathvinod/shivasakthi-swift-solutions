import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  const openDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=RTC+Colony,+LB+Nagar,+Hyderabad,+Telangana+500070',
      '_blank'
    );
  };

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
            Find Us
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Visit Our Office
          </h2>
          <p className="mt-4 text-muted-foreground">
            We're conveniently located in LB Nagar, Hyderabad. Stop by to discuss your requirements in person.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Address</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    RTC Colony, LB Nagar,<br />
                    Hyderabad, Telangana - 500070
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Phone</h3>
                  <a href="tel:+919347635803" className="mt-1 block text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 93476 35803
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Business Hours</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Monday - Saturday<br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={openDirections} className="w-full bg-primary hover:bg-primary/90 font-display">
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </Button>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 overflow-hidden rounded-xl border border-border shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.546543892949!2d78.5507!3d17.3557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98c2d4d3b6af%3A0x6b0f5ed8e1d8c6e8!2sRTC%20Colony%2C%20LB%20Nagar%2C%20Hyderabad%2C%20Telangana%20500070!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shivasakthi Solutions Location"
              className="w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
