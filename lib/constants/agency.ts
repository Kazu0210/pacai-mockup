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
  name: "PACAI",
  fullName: "Philippine Association of Collection Agencies, Inc.",
  shortName: "PACAI",
  tagline: "Professional. Ethical. Accountable.",
  description:
    "PACAI is the Philippine Association of Collection Agencies, Inc., dedicated to promoting ethical standards, professionalism, and accountability across the collection industry in the Philippines.",
  email: "info@pacai.org.ph",
  phone: "+63 (2) 8888-0000",
  hotline: "8888",
  address:
    "PACAI Office, Commonwealth Avenue, Quezon City, Metro Manila 1121, Philippines",
  officeHours: "Monday – Friday, 8:00 AM – 5:00 PM (Philippine Standard Time)",
  facebook: "https://www.facebook.com/PACAI",
  twitter: "https://twitter.com/PACAI",
  youtube: "https://youtube.com/PACAI",
  website: "https://pacai.org.ph",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "Complaints", href: "/complaints" },
  { label: "Verify", href: "/verify" },
  { label: "Events", href: "/events" },
  { label: "Portal", href: "/portal" },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Apply Membership", href: "/membership" },
    { label: "Renew Membership", href: "/membership/renew" },
    { label: "File Complaint", href: "/complaints" },
    { label: "Track Complaint", href: "/complaints/track" },
    { label: "Verify Agency", href: "/verify" },
    { label: "Events", href: "/events" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Code of Ethics", href: "#" },
    { label: "Accessibility Statement", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
} as const;

export const STATS = [
  { value: 50000, suffix: "+", label: "Complaints Resolved" },
  { value: 100000, suffix: "+", label: "Member Inquiries" },
  { value: 98, suffix: "%", label: "Resolution Rate" },
  { value: 0, suffix: "", label: "Nationwide Coverage", text: "Nationwide" },
] as const;

export const CORE_VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every action and decision we make on behalf of our members and the public.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description:
      "Every concern receives equal treatment, impartial review, and due process regardless of background or status.",
  },
  {
    icon: Users,
    title: "Service",
    description:
      "We place members and stakeholders at the center of our work, delivering timely, courteous, and effective support.",
  },
  {
    icon: Building2,
    title: "Transparency",
    description:
      "We operate with openness and accountability, ensuring trust in how our association serves the collection industry.",
  },
] as const;

export const SERVICES = [
  {
    icon: MessageSquare,
    title: "Complaint Filing",
    description:
      "Submit formal complaints related to collection practices through our secure online portal.",
    href: "#complaint",
  },
  {
    icon: Headphones,
    title: "Member Inquiry",
    description:
      "Ask questions about PACAI membership, standards, procedures, and industry guidelines. Get clear answers from our team.",
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
      "Access live guidance and step-by-step support for navigating PACAI processes and requirements.",
    href: "#inquiry",
  },
  {
    icon: Shield,
    title: "Accreditation Support",
    description:
      "Verify member credentials and access guidance on accreditation and ethical compliance standards.",
    href: "#services",
  },
  {
    icon: MapPin,
    title: "Public Information",
    description:
      "Browse association reports, industry advisories, and public resources to stay informed about your rights.",
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
      "Our team reviews your complaint, contacts relevant parties, and conducts a thorough assessment.",
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
      "Share your experience to help us improve our services and better serve the collection industry.",
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
      "Standard complaints are acknowledged within 3 working days and resolved within 15–30 working days, depending on complexity. Urgent matters may be expedited. You can track progress using your tracking number.",
  },
  {
    question: "Can I track my complaint?",
    answer:
      "Yes. After submitting your complaint, you will receive a unique tracking number (e.g., PACAI-2026-000123). Use this number on our Case Tracking service to view real-time status updates on your case.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Absolutely. All personal information submitted through our portal is protected under the Data Privacy Act of 2012 (Republic Act No. 10173). Your data is used solely for processing your complaint or inquiry and is never shared without your consent.",
  },
  {
    question: "What types of complaints can I file?",
    answer:
      "You may file complaints related to collection practices, unethical conduct, harassment, member agency misconduct, and other concerns involving PACAI member agencies and their personnel.",
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
      "I filed a complaint about improper collection practices and received a response within two weeks. The online system made everything transparent and easy to follow.",
    initials: "MS",
  },
  {
    name: "Juan Dela Cruz",
    location: "Davao City",
    comment:
      "The tracking number feature gave me peace of mind. I could check my case status anytime without visiting an office. Excellent service from PACAI.",
    initials: "JD",
  },
  {
    name: "Ana Reyes",
    location: "Quezon City",
    comment:
      "As a member agency representative, I appreciated how straightforward the inquiry form was. The team responded promptly and clarified our accreditation requirements.",
    initials: "AR",
  },
  {
    name: "Roberto Garcia",
    location: "Iloilo City",
    comment:
      "Professional, respectful, and efficient. PACAI restored my faith that the collection industry can serve the public with integrity.",
    initials: "RG",
  },
] as const;

export const COMPLAINT_CATEGORIES = [
  "Unethical Collection Practices",
  "Harassment / Abuse",
  "Misrepresentation",
  "Breach of Confidentiality",
  "Discrimination",
  "Poor Customer Service",
  "Non-Compliance with Standards",
  "Other",
] as const;

export const INQUIRY_CATEGORIES = [
  "General Information",
  "Membership & Accreditation",
  "Industry Standards",
  "Case Status",
  "Technical Support",
  "Partnership Inquiry",
  "Other",
] as const;

export const GOVERNMENT_OFFICES = [
  "PACAI Member Agency",
  "Collection Firm (Non-Member)",
  "Creditor / Client Company",
  "Third-Party Collection Service",
  "Call Center / Contact Center",
  "Other Related Entity",
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
