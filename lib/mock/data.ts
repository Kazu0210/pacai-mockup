export type AgencyStatus = "Accredited" | "Not Accredited" | "Pending";
export type MembershipStatus = "Active" | "Expired" | "Pending" | "Suspended";
export type ComplaintStatus = "Submitted" | "Under Review" | "Investigation" | "Resolved";

export interface MockAgency {
  id: string;
  name: string;
  accreditationNo: string;
  city: string;
  region: string;
  status: AgencyStatus;
  validUntil: string;
}

export interface MockEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  spots: number;
  registered: number;
}

export interface TrackingStep {
  label: ComplaintStatus;
  date: string;
  completed: boolean;
  description: string;
}

export interface MockTrackingCase {
  trackingId: string;
  complainant: string;
  agency: string;
  subject: string;
  currentStatus: ComplaintStatus;
  timeline: TrackingStep[];
}

export const MOCK_AGENCIES: MockAgency[] = [
  {
    id: "1",
    name: "Pacific Credit Solutions Inc.",
    accreditationNo: "PACAI-ACC-2024-0012",
    city: "Makati City",
    region: "NCR",
    status: "Accredited",
    validUntil: "2026-12-31",
  },
  {
    id: "2",
    name: "Isla Collection Services",
    accreditationNo: "PACAI-ACC-2023-0088",
    city: "Cebu City",
    region: "Central Visayas",
    status: "Accredited",
    validUntil: "2026-06-30",
  },
  {
    id: "3",
    name: "Metro Debt Recovery Corp.",
    accreditationNo: "PACAI-ACC-2022-0045",
    city: "Quezon City",
    region: "NCR",
    status: "Accredited",
    validUntil: "2027-03-15",
  },
  {
    id: "4",
    name: "Visayas Account Management",
    accreditationNo: "—",
    city: "Iloilo City",
    region: "Western Visayas",
    status: "Not Accredited",
    validUntil: "—",
  },
  {
    id: "5",
    name: "Northern Luzon Collectors",
    accreditationNo: "PACAI-ACC-2025-0101",
    city: "Baguio City",
    region: "CAR",
    status: "Pending",
    validUntil: "—",
  },
  {
    id: "6",
    name: "Mindanao Credit Partners",
    accreditationNo: "PACAI-ACC-2024-0156",
    city: "Davao City",
    region: "Davao Region",
    status: "Accredited",
    validUntil: "2026-09-20",
  },
  {
    id: "7",
    name: "QuickCash Recovery Agency",
    accreditationNo: "—",
    city: "Pasig City",
    region: "NCR",
    status: "Not Accredited",
    validUntil: "—",
  },
  {
    id: "8",
    name: "Bayanihan Collection Group",
    accreditationNo: "PACAI-ACC-2023-0220",
    city: "Taguig City",
    region: "NCR",
    status: "Accredited",
    validUntil: "2025-11-30",
  },
];

export const MOCK_EVENTS: MockEvent[] = [
  {
    id: "evt-1",
    title: "PACAI Annual General Membership Meeting 2026",
    date: "2026-08-15",
    time: "9:00 AM – 4:00 PM",
    location: "SMX Convention Center, Pasay City",
    type: "Membership",
    description:
      "Join fellow member agencies for the annual general meeting covering industry updates, policy changes, and the election of officers.",
    spots: 200,
    registered: 142,
  },
  {
    id: "evt-2",
    title: "Ethical Collection Practices Workshop",
    date: "2026-09-05",
    time: "1:00 PM – 5:00 PM",
    location: "PACAI Training Hall, Quezon City",
    type: "Training",
    description:
      "A hands-on workshop on compliant collection scripts, consumer rights, and handling difficult conversations professionally.",
    spots: 50,
    registered: 38,
  },
  {
    id: "evt-3",
    title: "Data Privacy Compliance Briefing",
    date: "2026-09-22",
    time: "10:00 AM – 12:00 PM",
    location: "Online (Zoom)",
    type: "Compliance",
    description:
      "Briefing on NPC guidelines relevant to debt collection agencies, including consent, retention, and breach reporting.",
    spots: 150,
    registered: 97,
  },
  {
    id: "evt-4",
    title: "Regional Networking Forum — Visayas",
    date: "2026-10-10",
    time: "8:30 AM – 3:00 PM",
    location: "Cebu City Marriott Hotel",
    type: "Networking",
    description:
      "Connect with Visayas-based member agencies, regulators, and industry partners in an informal networking setting.",
    spots: 80,
    registered: 45,
  },
];

export const MOCK_TRACKING_CASES: Record<string, MockTrackingCase> = {
  "PACAI-2026-000123": {
    trackingId: "PACAI-2026-000123",
    complainant: "Maria Santos",
    agency: "Pacific Credit Solutions Inc.",
    subject: "Harassment during collection calls",
    currentStatus: "Under Review",
    timeline: [
      {
        label: "Submitted",
        date: "2026-06-02",
        completed: true,
        description: "Complaint received and logged in the PACAI system.",
      },
      {
        label: "Under Review",
        date: "2026-06-05",
        completed: true,
        description: "Case assigned to compliance officer for initial assessment.",
      },
      {
        label: "Investigation",
        date: "—",
        completed: false,
        description: "Agency response and evidence under examination.",
      },
      {
        label: "Resolved",
        date: "—",
        completed: false,
        description: "Formal resolution and notification to parties.",
      },
    ],
  },
  "PACAI-2026-000456": {
    trackingId: "PACAI-2026-000456",
    complainant: "Juan Dela Cruz",
    agency: "Isla Collection Services",
    subject: "Misrepresentation of debt amount",
    currentStatus: "Resolved",
    timeline: [
      {
        label: "Submitted",
        date: "2026-04-10",
        completed: true,
        description: "Complaint received and logged.",
      },
      {
        label: "Under Review",
        date: "2026-04-12",
        completed: true,
        description: "Initial review completed.",
      },
      {
        label: "Investigation",
        date: "2026-04-20",
        completed: true,
        description: "Investigation concluded with findings report.",
      },
      {
        label: "Resolved",
        date: "2026-05-02",
        completed: true,
        description: "Corrective action issued; complainant notified.",
      },
    ],
  },
};

export const PORTAL_MEMBER = {
  companyName: "Pacific Credit Solutions Inc.",
  contactPerson: "Ana Reyes",
  email: "ana.reyes@pacificcredit.ph",
  phone: "+63 917 555 0123",
  membershipId: "PACAI-MEM-2024-0012",
  status: "Active" as MembershipStatus,
  validFrom: "2025-01-01",
  validUntil: "2026-12-31",
  accreditationNo: "PACAI-ACC-2024-0012",
  address: "12th Floor, Ayala Tower, Makati City",
};

export const PORTAL_COMPLAINTS = [
  {
    id: "PACAI-2026-000123",
    subject: "Harassment during collection calls",
    status: "Under Review" as ComplaintStatus,
    filedOn: "2026-06-02",
  },
  {
    id: "PACAI-2025-000891",
    subject: "Unauthorized disclosure of debtor info",
    status: "Resolved" as ComplaintStatus,
    filedOn: "2025-11-18",
  },
];

export const PLATFORM_SERVICES = [
  {
    title: "Membership Application",
    description: "Apply for PACAI membership and accreditation through our guided digital process.",
    href: "/membership",
    icon: "ClipboardList",
  },
  {
    title: "Membership Renewal",
    description: "Renew your membership, check status, and keep your accreditation up to date.",
    href: "/membership/renew",
    icon: "RefreshCw",
  },
  {
    title: "File a Complaint",
    description: "Submit concerns about collection practices securely with document attachments.",
    href: "/complaints",
    icon: "FileWarning",
  },
  {
    title: "Track Complaint",
    description: "Monitor your case using your tracking ID — from submission to resolution.",
    href: "/complaints/track",
    icon: "Search",
  },
  {
    title: "Verify Agency",
    description: "Confirm whether a collection agency is accredited by PACAI before engaging.",
    href: "/verify",
    icon: "ShieldCheck",
  },
  {
    title: "Events & Training",
    description: "Browse upcoming workshops, briefings, and industry networking events.",
    href: "/events",
    icon: "Calendar",
  },
] as const;
