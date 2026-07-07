import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["Arial"],
});

export const metadata: Metadata = {
  title: "Aymene Bahmed | Full-Stack Web Developer",
  description: "Aymene Bahmed's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-dvh antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
