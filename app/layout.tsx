import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zentrapets.com"),

  title: {
    default: "ZENTRA Pets — Pet Wellness, Simplified",
    template: "%s | ZENTRA Pets",
  },
  description:
    "Reliable cannabinoid-based solutions designed for modern pet brands. Positioned for retail-ready integration. A brand by Heliora Group LLC, USA.",

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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://zentrapets.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
