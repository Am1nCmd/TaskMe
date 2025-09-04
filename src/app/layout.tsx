import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@/providers/heroui-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TaskMe — Your Tasks, Simplified.",
  description: "From digital services to creative solutions, TaskMe handles it all. A sub-brand of ams1gn.id",
  keywords: ["tasks", "digital services", "creative solutions", "web development", "virtual assistance"],
  authors: [{ name: "ams1gn.id" }],
  metadataBase: new URL('https://taskme.com'),
  openGraph: {
    title: "TaskMe — Your Tasks, Simplified.",
    description: "From digital services to creative solutions, TaskMe handles it all. A sub-brand of ams1gn.id",
    url: "https://taskme.com",
    siteName: "TaskMe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TaskMe - Your Tasks, Simplified",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskMe — Your Tasks, Simplified.",
    description: "From digital services to creative solutions, TaskMe handles it all. A sub-brand of ams1gn.id",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: '/taskme-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
