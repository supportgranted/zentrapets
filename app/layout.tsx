import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleTranslate from "@/components/GoogleTranslate";
import CookieBanner from "@/components/CookieBanner";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://zentrapets.com"),

  title: {
    default: "ZENTRA Pets — Pet Wellness, Simplified",
    template: "%s | ZENTRA Pets",
  },
  description:
    "Reliable cannabinoid-based solutions designed for modern pet brands. Positioned for retail-ready integration. A brand by Heliora Group LLC, USA.",
  category: "Pet Wellness",
  classification: "B2B Pet Products",
  alternates: { canonical: "https://zentrapets.com" },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
  },
  keywords: [
    "ZENTRA pets",
    "CBD pet wellness",
    "cannabinoid pet products",
    "B2B pet brand",
    "private label pet CBD",
    "bulk pet supplements",
    "Heliora Group LLC",
    "pet wellness USA",
    "THC compliant pet products",
    "third-party tested CBD pets",
  ],

  authors: [{ name: "Heliora Group LLC", url: "https://zentrapets.com" }],
  creator: "Heliora Group LLC",
  publisher: "Heliora Group LLC",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zentrapets.com",
    siteName: "ZENTRA Pets",
    title: "ZENTRA Pets — Pet Wellness, Simplified",
    description:
      "Reliable cannabinoid-based solutions designed for modern pet brands. B2B | Private Label | Bulk Supply.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "ZENTRA Pets — Pet Wellness by Heliora Group LLC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZENTRA Pets — Pet Wellness, Simplified",
    description:
      "Reliable cannabinoid-based solutions designed for modern pet brands.",
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#7A9E7E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZENTRA Pets",
  url: "https://zentrapets.com",
  description:
    "Reliable cannabinoid-based pet wellness solutions by Heliora Group LLC, USA.",
  brand: {
    "@type": "Brand",
    name: "ZENTRA Pets",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Heliora Group LLC",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@zentrapets.com",
    contactType: "B2B Sales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <CookieBanner />
        <GoogleTranslate />
      </body>
    </html>
  );
}
