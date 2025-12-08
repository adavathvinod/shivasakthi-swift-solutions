import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of services including CCTV installation, graphic design, printing (business cards, banners, brochures), passport assistance, medical documentation, air/train ticketing, itinerary preparation, and content writing.',
  },
  {
    question: 'What are your working hours?',
    answer: 'We are open Monday to Saturday, from 9:00 AM to 7:00 PM. For urgent queries, you can reach us via WhatsApp anytime.',
  },
  {
    question: 'How long does printing take?',
    answer: 'Standard printing orders are completed within 24-48 hours. For bulk orders or custom designs, it may take 3-5 business days. Express/urgent printing is also available at additional charges.',
  },
  {
    question: 'What are your pricing options?',
    answer: 'Our pricing varies based on the service and requirements. We offer competitive rates with no hidden charges. Contact us for a free quotation tailored to your specific needs.',
  },
  {
    question: 'Do you provide doorstep delivery?',
    answer: 'Yes! True to our tagline "All services at your doorstep," we offer doorstep delivery for printed materials and provide on-site installation for CCTV systems within Hyderabad.',
  },
  {
    question: 'How can I track my passport application?',
    answer: 'Once we submit your passport application, we provide you with the application reference number. You can track it on the official passport portal, or simply contact us and we will provide status updates.',
  },
  {
    question: 'Do you handle visa applications?',
    answer: 'Yes, we assist with visa documentation and application processes for various countries. Our team helps with form filling, document verification, and appointment scheduling.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash, UPI (GPay, PhonePe, Paytm), Bank Transfers, and Credit/Debit Cards. Payment terms are discussed based on the service type.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find answers to common questions about our services, pricing, and processes.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
