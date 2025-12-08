import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { exportToExcel, InvoiceFormData } from '@/lib/excelExport';
import { Download, FileText } from 'lucide-react';

const services = [
  'CCTV Installation',
  'Graphic Design',
  'Printing Services',
  'Passport Services',
  'Medical Services',
  'Air/Train Ticketing',
  'Itinerary Preparation',
  'Content Writing',
  'Other',
];

const paymentMethods = ['Cash', 'UPI', 'Bank Transfer', 'Credit/Debit Card', 'Cheque'];

const InvoiceForm = () => {
  const [formData, setFormData] = useState<InvoiceFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    amount: '',
    paymentMethod: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const invoiceNo = `INV-${Date.now().toString().slice(-8)}`;
    
    const exportData = [{
      'Invoice No': invoiceNo,
      'Date': new Date().toLocaleDateString(),
      'Customer Name': formData.name,
      'Email': formData.email,
      'Phone': formData.phone,
      'Company': formData.company || 'N/A',
      'Service Type': formData.serviceType,
      'Amount (₹)': formData.amount,
      'Payment Method': formData.paymentMethod,
      'Notes': formData.notes || 'N/A',
      'Status': 'Pending',
    }];

    try {
      exportToExcel(exportData, `invoice_${invoiceNo}`);
      toast.success(`Invoice ${invoiceNo} created! Excel file downloaded.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        amount: '',
        paymentMethod: '',
        notes: '',
      });
    } catch {
      toast.error('Failed to export. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Customer Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Customer full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="customer@email.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company (optional)"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceType">Service Type *</Label>
        <Select
          value={formData.serviceType}
          onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount (₹) *</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
            placeholder="Enter amount"
            min="0"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="paymentMethod">Payment Method *</Label>
          <Select
            value={formData.paymentMethod}
            onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              {paymentMethods.map((method) => (
                <SelectItem key={method} value={method}>
                  {method}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any additional notes or special instructions..."
          rows={3}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.serviceType || !formData.paymentMethod}
        className="w-full bg-terracotta hover:bg-terracotta-light font-display"
      >
        {isSubmitting ? (
          'Processing...'
        ) : (
          <>
            <FileText className="mr-2 h-4 w-4" />
            Generate Invoice & Download
            <Download className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default InvoiceForm;
