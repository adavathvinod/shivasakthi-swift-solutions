import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QuotationForm from '@/components/forms/QuotationForm';
import InvoiceForm from '@/components/forms/InvoiceForm';
import FeedbackForm from '@/components/forms/FeedbackForm';
import WhatsAppEnquiryForm from '@/components/forms/WhatsAppEnquiryForm';
import { FileText, Receipt, MessageSquare, MessageCircle, QrCode } from 'lucide-react';

const Forms = () => {
  return (
    <>
      <Helmet>
        <title>Forms & Enquiry | Shivasakthi Solutions - Get a Quote</title>
        <meta name="description" content="Submit enquiries, request quotations, generate invoices, or share feedback with Shivasakthi Solutions. Easy online forms for all your service needs." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-br from-primary via-primary to-forest-light py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">
                  Get Started
                </span>
                <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
                  Forms & Enquiry
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  Choose the appropriate form below to get in touch with us. We'll respond promptly to your request.
                </p>
              </div>
            </div>
          </section>

          {/* Forms Section */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl">
                <Tabs defaultValue="whatsapp" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 mb-8">
                    <TabsTrigger value="whatsapp" className="flex flex-col gap-1 py-3 data-[state=active]:bg-[#25D366] data-[state=active]:text-primary-foreground">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-xs">WhatsApp</span>
                    </TabsTrigger>
                    <TabsTrigger value="quotation" className="flex flex-col gap-1 py-3">
                      <FileText className="h-5 w-5" />
                      <span className="text-xs">Quotation</span>
                    </TabsTrigger>
                    <TabsTrigger value="invoice" className="flex flex-col gap-1 py-3">
                      <Receipt className="h-5 w-5" />
                      <span className="text-xs">Invoice</span>
                    </TabsTrigger>
                    <TabsTrigger value="feedback" className="flex flex-col gap-1 py-3">
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-xs">Feedback</span>
                    </TabsTrigger>
                  </TabsList>

                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
                    <TabsContent value="whatsapp" className="mt-0">
                      <div className="mb-6">
                        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                          WhatsApp Enquiry
                        </h2>
                        <p className="text-muted-foreground">
                          Fill in your details and we'll start a WhatsApp conversation with you instantly.
                        </p>
                      </div>
                      <WhatsAppEnquiryForm />
                    </TabsContent>

                    <TabsContent value="quotation" className="mt-0">
                      <div className="mb-6">
                        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                          Request a Quotation
                        </h2>
                        <p className="text-muted-foreground">
                          Submit your requirements and download the quotation request in Excel format.
                        </p>
                      </div>
                      <QuotationForm />
                    </TabsContent>

                    <TabsContent value="invoice" className="mt-0">
                      <div className="mb-6">
                        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                          Cash Bill / Invoice Request
                        </h2>
                        <p className="text-muted-foreground">
                          Generate an invoice request that exports directly to Excel for easy processing.
                        </p>
                      </div>
                      <InvoiceForm />
                    </TabsContent>

                    <TabsContent value="feedback" className="mt-0">
                      <div className="mb-6">
                        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                          Share Your Feedback
                        </h2>
                        <p className="text-muted-foreground">
                          Your feedback helps us improve. Let us know about your experience.
                        </p>
                      </div>
                      <FeedbackForm />
                    </TabsContent>
                  </div>
                </Tabs>

                {/* QR Code Section */}
                <div className="mt-12 rounded-2xl border border-border bg-muted p-6 md:p-8 text-center">
                  <QrCode className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Quick Contact via QR Code
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Scan the QR code below for instant WhatsApp contact or payment options.
                  </p>
                  <div className="inline-flex items-center justify-center w-48 h-48 bg-background rounded-xl border border-border">
                    <div className="text-center text-muted-foreground text-sm p-4">
                      <QrCode className="h-16 w-16 mx-auto mb-2 opacity-30" />
                      <p>QR Code placeholder</p>
                      <p className="text-xs">(Contact for custom QR)</p>
                    </div>
                  </div>
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

export default Forms;
