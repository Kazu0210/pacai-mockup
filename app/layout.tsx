import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { AGENCY } from "@/lib/constants/agency";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${AGENCY.name} | ${AGENCY.fullName}`,
    template: `%s | ${AGENCY.name}`,
  },
  description: AGENCY.description,
  keywords: [
    "PACAI",
    "Philippine Association of Collection Agencies",
    "collection agencies Philippines",
    "ethical collection practices",
    "file complaint",
    "member inquiry",
    "Philippines",
    "industry association",
  ],
  authors: [{ name: AGENCY.fullName }],
  creator: AGENCY.name,
  metadataBase: new URL(AGENCY.website),
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: AGENCY.website,
    siteName: AGENCY.name,
    title: `${AGENCY.name} | ${AGENCY.fullName}`,
    description: AGENCY.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${AGENCY.name} — ${AGENCY.fullName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AGENCY.name} | ${AGENCY.fullName}`,
    description: AGENCY.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: AGENCY.fullName,
  alternateName: AGENCY.shortName,
  url: AGENCY.website,
  logo: `${AGENCY.website}/logo.png`,
  description: AGENCY.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "PACAI Office, Commonwealth Avenue",
    addressLocality: "Quezon City",
    addressRegion: "Metro Manila",
    postalCode: "1121",
    addressCountry: "PH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: AGENCY.phone,
    email: AGENCY.email,
    contactType: "customer service",
    availableLanguage: ["English", "Filipino"],
  },
  sameAs: [AGENCY.facebook, AGENCY.twitter, AGENCY.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            className: "rounded-xl",
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
