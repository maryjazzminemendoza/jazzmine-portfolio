import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteBackground from "@/components/layout/SiteBackground";

export const metadata: Metadata = {
  title: "Jazzmine Mendoza | Frontend Developer & AI Automation Builder",
  description:
    "Portfolio showcasing web development, Shopify, AI automation, and frontend projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        <SiteBackground>
          <Navbar />

          {children}

          <Footer />
        </SiteBackground>
      </body>
    </html>
  );
}