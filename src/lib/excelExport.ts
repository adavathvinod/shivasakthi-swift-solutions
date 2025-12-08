import * as XLSX from 'xlsx';

export interface QuotationFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  description: string;
  budget?: string;
  deadline?: string;
}

export interface InvoiceFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  amount: string;
  paymentMethod: string;
  notes?: string;
}

export interface FeedbackFormData {
  name: string;
  email: string;
  rating: number;
  feedback: string;
}

export interface WhatsAppFormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message?: string;
}

export const exportToExcel = (data: Record<string, unknown>[], filename: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
  XLSX.writeFile(workbook, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
};

export const downloadExcelTemplate = (type: 'quotation' | 'invoice') => {
  const templates = {
    quotation: [
      {
        'Date': new Date().toLocaleDateString(),
        'Customer Name': '',
        'Email': '',
        'Phone': '',
        'Company': '',
        'Service Type': '',
        'Description': '',
        'Budget': '',
        'Deadline': '',
        'Status': 'Pending',
      },
    ],
    invoice: [
      {
        'Date': new Date().toLocaleDateString(),
        'Invoice No': `INV-${Date.now()}`,
        'Customer Name': '',
        'Email': '',
        'Phone': '',
        'Company': '',
        'Service Type': '',
        'Amount': '',
        'Payment Method': '',
        'Notes': '',
        'Status': 'Pending',
      },
    ],
  };

  exportToExcel(templates[type], `${type}_template`);
};
