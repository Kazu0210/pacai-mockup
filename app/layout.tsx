import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";
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
    default: `${AGENCY.name} | Official Government Portal`,
    template: `%s | ${AGENCY.name}`,
  },
  description: AGENCY.description,
  keywords: [
    "Philippine Agency",
    "government services",
    "file complaint",
    "citizen inquiry",
    "Philippines",
    "public service",
    "transparency",
    "accountability",
  ],
  authors: [{ name: AGENCY.name }],
  creator: AGENCY.name,
  metadataBase: new URL("https://philippineagency.gov.ph"),
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://philippineagency.gov.ph",
    siteName: AGENCY.name,
    title: `${AGENCY.name} | Official Government Portal`,
    description: AGENCY.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${AGENCY.name} - Official Government Portal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AGENCY.name} | Official Government Portal`,
    description: AGENCY.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: AGENCY.name,
  alternateName: AGENCY.shortName,
  url: "https://philippineagency.gov.ph",
  logo: "https://philippineagency.gov.ph/logo.png",
  description: AGENCY.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Philippine Agency Building, Commonwealth Avenue",
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
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              className: "rounded-xl",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
