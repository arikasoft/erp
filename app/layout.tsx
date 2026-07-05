import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arikasoft.com"),

  title: {
    default: "ArikaSoft Private Limited | ERP, CRM, AI & Software Development Company",
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
    "Next.js Development",
    "Laravel Development",
    "AI Solutions",
    "Cloud Solutions",
    "Website Development",
    "Mobile App Development",
    "Digital Transformation",
    "NGO ERP",
    "School ERP",
    "Hospital ERP",
    "Business Software",
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
    nocache: false,
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
    locale: "en_IN",
    url: "https://arikasoft.com",
    siteName: "ArikaSoft Private Limited",
    title:
      "ArikaSoft Private Limited | Enterprise Software & Digital Transformation",
    description:
      "Enterprise ERP, CRM, HRMS, AI, Mobile Apps, Cloud Solutions and Custom Software Development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ArikaSoft Private Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ArikaSoft Private Limited",
    description:
      "Enterprise Software Development Company",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://arikasoft.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {children}
      </body>
    </html>
  );
}