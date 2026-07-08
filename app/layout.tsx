import type { Metadata, Viewport } from "next";
import "./globals.css";

import TopBar from "@/components/layout/TopBar";
import MainHeader from "@/components/layout/MainHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://arikasoft.com"),

  title: {
    default:
      "ArikaSoft Private Limited | ERP, CRM, AI & Software Development Company",
    template: "%s | ArikaSoft Private Limited",
  },

  description:
    "ArikaSoft Private Limited is a leading Software Development Company providing ERP, CRM, HRMS, Mobile Apps, AI Solutions, Cloud Computing, Digital Transformation, e-Governance and Custom Software Development.",

  keywords: [
    "ArikaSoft",
    "ERP Software",
    "CRM Software",
    "HRMS",
    "Software Company",
    "Next.js",
    "Laravel",
    "AI Solutions",
    "Cloud Solutions",
    "Website Development",
    "Mobile App Development",
    "NGO ERP",
    "School ERP",
    "Hospital ERP",
  ],

  authors: [
    {
      name: "ArikaSoft Private Limited",
    },
  ],

  creator: "ArikaSoft Private Limited",

  publisher: "ArikaSoft Private Limited",

  applicationName: "ArikaSoft",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://arikasoft.com",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arikasoft.com",
    siteName: "ArikaSoft Private Limited",
    title: "ArikaSoft Private Limited",
    description:
      "Enterprise ERP, CRM, HRMS, AI, Cloud & Software Development Company.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ArikaSoft",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ArikaSoft Private Limited",
    description:
      "Enterprise ERP, CRM, AI & Software Development Company",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          min-h-screen
          bg-white
          text-slate-900
          antialiased
          selection:bg-cyan-500
          selection:text-white
        "
      >
        {/* Header */}

        <TopBar />

        <MainHeader />

        <Navbar />

        {/* Main Content */}

        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}

        <Footer />

        {/* Utilities */}

        <ScrollToTop />
      </body>
    </html>
  );
}