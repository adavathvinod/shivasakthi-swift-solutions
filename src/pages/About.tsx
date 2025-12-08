import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Award, Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const values = [
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'Every service we provide is tailored to meet your specific needs and exceed expectations.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our skilled professionals bring years of experience across diverse service domains.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'We maintain the highest standards in every service, ensuring consistent quality delivery.',
  },
  {
    icon: Heart,
    title: 'Trusted Partner',
    description: 'Building long-term relationships through reliable service and transparent communication.',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Shivasakthi Solutions - Your Trusted Service Partner</title>
        <meta name="description" content="Learn about Shivasakthi Solutions, your one-stop service hub in Hyderabad for CCTV, printing, travel, and more. All services at your doorstep." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-br from-primary via-primary to-forest-light py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
                  Who We Are
                </span>
                <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
                  About Shivasakthi Solutions
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  Your trusted partner for comprehensive services in Hyderabad
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <img
                    src={logo}
                    alt="Shivasakthi Solutions"
                    className="mx-auto w-48 md:w-64 rounded-2xl bg-muted p-8 shadow-lg"
                  />
                </div>
                <div>
                  <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
                    Our Story
                  </span>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    All Services at Your Doorstep
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Shivasakthi Solutions was founded with a simple yet powerful vision: to bring essential services right to your doorstep, eliminating the hassle of running from place to place for different needs.
                    </p>
                    <p>
                      Based in LB Nagar, Hyderabad, we've grown from a small service center to a comprehensive solutions hub, serving thousands of satisfied customers across the city.
                    </p>
                    <p>
                      Our team of dedicated professionals ensures that every service we provide meets the highest standards of quality, timeliness, and affordability. From security installations to travel bookings, design services to documentation – we've got you covered.
                    </p>
                    <p className="font-medium text-foreground">
                      We believe that your time is valuable, and our mission is to save it while delivering excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center mb-12">
                <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
                  Our Values
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  What Drives Us
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm text-center"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 md:py-20 bg-primary">
            <div className="container">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
                {[
                  { number: '1000+', label: 'Happy Customers' },
                  { number: '8+', label: 'Services Offered' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '100%', label: 'Satisfaction Rate' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl font-bold text-terracotta md:text-5xl">
                      {stat.number}
                    </div>
                    <div className="mt-2 text-primary-foreground/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
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

export default About;
