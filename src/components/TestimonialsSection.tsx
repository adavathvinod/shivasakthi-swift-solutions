import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    rating: 5,
    review: 'Excellent CCTV installation service! The team was professional and completed the work on time. Highly recommend Shivasakthi Solutions for security needs.',
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Event Planner',
    rating: 5,
    review: 'Their printing quality is outstanding. Got all my event banners and brochures done perfectly. Quick turnaround and great prices!',
    avatar: 'PS',
  },
  {
    name: 'Mohammed Ali',
    role: 'Travel Enthusiast',
    rating: 5,
    review: 'Booked my family trip through them. The itinerary was well-planned and tickets were arranged smoothly. Very reliable service.',
    avatar: 'MA',
  },
  {
    name: 'Lakshmi Reddy',
    role: 'Entrepreneur',
    rating: 5,
    review: 'Got my passport renewed through their assistance. They handled all the documentation efficiently. Saved me so much time!',
    avatar: 'LR',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Don't just take our word for it – hear from our satisfied customers across Hyderabad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-terracotta text-terracotta" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
