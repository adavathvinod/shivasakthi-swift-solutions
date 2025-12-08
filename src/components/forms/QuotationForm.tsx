import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { exportToExcel, QuotationFormData } from '@/lib/excelExport';
import { Download, Send } from 'lucide-react';

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

const QuotationForm = () => {
  const [formData, setFormData] = useState<QuotationFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    description: '',
    budget: '',
    deadline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Export to Excel
    const exportData = [{
      'Date': new Date().toLocaleDateString(),
      'Customer Name': formData.name,
      'Email': formData.email,
      'Phone': formData.phone,
      'Company': formData.company || 'N/A',
      'Service Type': formData.serviceType,
      'Description': formData.description,
      'Budget': formData.budget || 'Not specified',
      'Deadline': formData.deadline || 'Not specified',
      'Status': 'New Request',
    }];

    try {
      exportToExcel(exportData, 'quotation_request');
      toast.success('Quotation request submitted! Excel file downloaded.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        description: '',
        budget: '',
        deadline: '',
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
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
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
            placeholder="your@email.com"
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
            placeholder="Your company (optional)"
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

      <div className="space-y-2">
        <Label htmlFor="description">Project Description *</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Describe your requirements in detail..."
          rows={4}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Input
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g., ₹10,000 - ₹50,000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="deadline">Expected Deadline</Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.serviceType}
        className="w-full bg-primary hover:bg-primary/90 font-display"
      >
        {isSubmitting ? (
          'Processing...'
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit & Download Excel
            <Download className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default QuotationForm;
