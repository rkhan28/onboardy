import type { Metadata } from "next";
import { Inter, Sora, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const siteUrl = "https://onboardy.example.com";
const siteTitle = "Onboardy — AI Automation for Service Businesses";
const siteDescription =
  "AI receptionists, booking funnels, and CRM automations that turn missed leads into booked customers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · Onboardy",
  },
  description: siteDescription,
  keywords: [
    "AI automation",
    "AI receptionist",
    "service business automation",
    "missed call recovery",
    "CRM automation",
    "booking automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Onboardy",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
