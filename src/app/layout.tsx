import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Husni Alfarisal | Frontend Developer",
  description: "I don't just write code — I craft experiences that feel alive. Frontend Developer specializing in React, Next.js, and Tailwind CSS.",
  keywords: ["Frontend Developer", "React", "Next.js", "Tailwind CSS", "TypeScript", "Husni Alfarisal"],
  authors: [{ name: "Husni Alfarisal" }],
  openGraph: {
    title: "Husni Alfarisal | Frontend Developer",
    description: "I don't just write code — I craft experiences that feel alive.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husni Alfarisal | Frontend Developer",
    description: "I don't just write code — I craft experiences that feel alive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
