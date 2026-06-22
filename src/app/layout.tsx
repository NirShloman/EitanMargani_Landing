import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Heebo } from "next/font/google";
import "./globals.css";
import { business, siteContent } from "@/lib/content";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.siteUrl),
  title: {
    default: siteContent.seo.title,
    template: `%s | ${business.shortName}`
  },
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  applicationName: business.shortName,
  authors: [{ name: business.shortName }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteContent.seo.siteUrl,
    siteName: business.shortName,
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [
      {
        url: "/images/sign.jpg",
        width: 1200,
        height: 630,
        alt: business.name
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9D915",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
