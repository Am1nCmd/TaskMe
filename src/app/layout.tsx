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
