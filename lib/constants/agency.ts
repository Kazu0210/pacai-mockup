import {
  Building2,
  FileSearch,
  Headphones,
  MapPin,
  MessageSquare,
  Scale,
  Shield,
  Users,
} from "lucide-react";

export const AGENCY = {
  name: "Philippine Agency",
  shortName: "PAG",
  tagline: "Transparency. Accountability. Service.",
  description:
    "The Philippine Agency is the national body dedicated to promoting good governance, protecting citizen rights, and ensuring responsive public service across the Republic of the Philippines.",
  email: "info@philippineagency.gov.ph",
  phone: "+63 (2) 8888-0000",
  hotline: "8888",
  address:
    "Philippine Agency Building, Commonwealth Avenue, Quezon City, Metro Manila 1121, Philippines",
  officeHours: "Monday – Friday, 8:00 AM – 5:00 PM (Philippine Standard Time)",
  facebook: "https://www.facebook.com/PhilippineAgency",
  twitter: "https://twitter.com/PhilippineAgency",
  youtube: "https://youtube.com/PhilippineAgency",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "File Complaint", href: "#complaint" },
  { label: "Inquiry", href: "#inquiry" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: 50000, suffix: "+", label: "Complaints Resolved" },
  { value: 100000, suffix: "+", label: "Citizen Inquiries" },
  { value: 98, suffix: "%", label: "Resolution Rate" },
  { value: 0, suffix: "", label: "Nationwide Coverage", text: "Nationwide" },
] as const;

export const CORE_VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every action and decision we make on behalf of the Filipino people.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description:
      "Every citizen receives equal treatment, impartial review, and due process regardless of background or status.",
  },
  {
    icon: Users,
    title: "Service",
    description:
      "We place citizens at the center of our work, delivering timely, courteous, and effective public service.",
  },
  {
    icon: Building2,
    title: "Transparency",
    description:
      "We operate with openness and accountability, ensuring the public can trust how government serves them.",
  },
] as const;

export const SERVICES = [
  {
    icon: MessageSquare,
    title: "Complaint Filing",
    description:
      "Submit formal complaints against government offices and officials through our secure online portal.",
    href: "#complaint",
  },
  {
    icon: Headphones,
    title: "Citizen Inquiry",
    description:
      "Ask questions about government programs, procedures, and services. Get clear answers from our team.",
    href: "#inquiry",
  },
  {
    icon: FileSearch,
    title: "Case Tracking",
    description:
      "Monitor the status of your submitted complaint or inquiry using your unique tracking number.",
    href: "#complaint",
  },
  {
    icon: Users,
    title: "Online Assistance",
    description:
      "Access live guidance and step-by-step support for navigating government processes and requirements.",
    href: "#inquiry",
  },
  {
    icon: Shield,
    title: "Document Verification",
    description:
      "Verify the authenticity of government-issued documents and certificates through our verification service.",
    href: "#services",
  },
  {
    icon: MapPin,
    title: "Public Information",
    description:
      "Browse agency reports, citizen charters, and public advisories to stay informed about your rights.",
    href: "#about",
  },
] as const;

export const TIMELINE_STEPS = [
  {
    step: 1,
    title: "Submit Complaint",
    description:
      "Complete the online form with your details, complaint information, and supporting evidence.",
  },
  {
    step: 2,
    title: "Receive Tracking Number",
    description:
      "Get a unique reference number to monitor your case status at any time through our portal.",
  },
  {
    step: 3,
    title: "Investigation",
    description:
      "Our team reviews your complaint, contacts relevant offices, and conducts a thorough assessment.",
  },
  {
    step: 4,
    title: "Resolution",
    description:
      "Receive a formal response with findings, recommended actions, and next steps for your case.",
  },
  {
    step: 5,
    title: "Feedback",
    description:
      "Share your experience to help us improve our services and better serve the Filipino people.",
  },
] as const;

export const FAQS = [
  {
    question: "How do I submit a complaint?",
    answer:
      "Navigate to the File Complaint section on this website and complete the multi-step form. Provide accurate personal information, describe your concern in detail, and attach any supporting documents. Upon submission, you will receive a tracking number via email.",
  },
  {
    question: "How long does processing take?",
    answer:
      "Standard complaints are acknowledged within 3 working days and resolved within 15–30 working days, depending on complexity. Urgent matters involving public safety may be expedited. You can track progress using your tracking number.",
  },
  {
    question: "Can I track my complaint?",
    answer:
      "Yes. After submitting your complaint, you will receive a unique tracking number (e.g., PAG-2026-000123). Use this number on our Case Tracking service to view real-time status updates on your case.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Absolutely. All personal information submitted through our portal is protected under the Data Privacy Act of 2012 (Republic Act No. 10173). Your data is used solely for processing your complaint or inquiry and is never shared without your consent.",
  },
  {
    question: "What types of complaints can I file?",
    answer:
      "You may file complaints related to government service delivery, red tape, corruption, abuse of authority, delayed transactions, and other concerns involving national government agencies and their personnel.",
  },
  {
    question: "Can I file a complaint on behalf of someone else?",
    answer:
      "Yes, with proper authorization. You may file on behalf of another person by providing a signed authorization letter and valid identification documents for both parties during the submission process.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Maria Santos",
    location: "Cebu City",
    comment:
      "I filed a complaint about delayed document processing and received a response within two weeks. The online system made everything transparent and easy to follow.",
    initials: "MS",
  },
  {
    name: "Juan Dela Cruz",
    location: "Davao City",
    comment:
      "The tracking number feature gave me peace of mind. I could check my case status anytime without visiting an office. Excellent public service.",
    initials: "JD",
  },
  {
    name: "Ana Reyes",
    location: "Quezon City",
    comment:
      "As a senior citizen, I appreciated how straightforward the inquiry form was. The team responded promptly and resolved my concern about pension benefits.",
    initials: "AR",
  },
  {
    name: "Roberto Garcia",
    location: "Iloilo City",
    comment:
      "Professional, respectful, and efficient. The Philippine Agency restored my faith that government can truly serve the people with integrity.",
    initials: "RG",
  },
] as const;

export const COMPLAINT_CATEGORIES = [
  "Delayed Service",
  "Red Tape / Bureaucracy",
  "Corruption / Bribery",
  "Abuse of Authority",
  "Discrimination",
  "Poor Customer Service",
  "Lost Documents",
  "Other",
] as const;

export const INQUIRY_CATEGORIES = [
  "General Information",
  "Programs & Services",
  "Document Requirements",
  "Case Status",
  "Technical Support",
  "Partnership Inquiry",
  "Other",
] as const;

export const GOVERNMENT_OFFICES = [
  "Department of Health (DOH)",
  "Department of Education (DepEd)",
  "Department of Social Welfare (DSWD)",
  "Bureau of Internal Revenue (BIR)",
  "Philippine National Police (PNP)",
  "Local Government Unit (LGU)",
  "Other National Agency",
] as const;

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
  "image/jpg",
] as const;

export const ALLOWED_FILE_EXTENSIONS = ".pdf, .doc, .docx, .png, .jpg, .jpeg";
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
