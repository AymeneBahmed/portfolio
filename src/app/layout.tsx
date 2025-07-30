import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SnowfallBackground } from "@/components/SnowfallBackground";

const inter = Inter({ subsets: ["latin"] });

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <SnowfallBackground />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
