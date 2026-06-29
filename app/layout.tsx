import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fan Stride — For the Fan. Fueling the Runner.",
  description:
    "Bringing spectators, athletes, and race directors together through augmented reality. Point your camera at any runner to see their story, support their cause, and cheer them on in real-time.",
  keywords: [
    "running app",
    "race app",
    "AR running",
    "augmented reality racing",
    "race day app",
    "runner tracking",
    "spectator app",
    "marathon app",
    "5K app",
    "race technology",
    "Fan Stride",
    "FanStride",
  ],
  authors: [{ name: "Fan Stride LLC" }],
  creator: "Fan Stride LLC",
  publisher: "Fan Stride LLC",
  metadataBase: new URL("https://fanstride.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fanstride.com",
    title: "Fan Stride — For the Fan. Fueling the Runner.",
    description:
      "Bringing spectators, athletes, and race directors together through augmented reality. Point your camera at any runner to see their story, support their cause, and cheer them on in real-time.",
    siteName: "Fan Stride",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Fan Stride - Augmented Reality Race Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fan Stride — For the Fan. Fueling the Runner.",
    description:
      "Bringing spectators, athletes, and race directors together through augmented reality.",
    images: ["/Logo.png"],
    creator: "@fanstride",
  },
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
  verification: {
    // Add your Google Search Console verification code here when you get it
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
