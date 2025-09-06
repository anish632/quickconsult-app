import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "QuickConsult - Modern Telemedicine Platform",
  description: "Connect with medical experts instantly. Secure, professional healthcare consultations at your fingertips.",
  keywords: "telemedicine, medical consultation, healthcare, doctors, online consultation",
  authors: [{ name: "QuickConsult" }],
  creator: "QuickConsult",
  publisher: "QuickConsult",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://app.quickconsult.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "QuickConsult - Modern Telemedicine Platform",
    description: "Connect with medical experts instantly",
    url: "https://app.quickconsult.com",
    siteName: "QuickConsult",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} antialiased bg-gray-50 text-gray-900`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
