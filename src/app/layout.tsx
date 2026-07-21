import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { MotionConfig } from "motion/react";
import { COLOR_THEMES } from "@/lib/constants";

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
  const lightThemes = JSON.stringify(
    COLOR_THEMES.filter((theme) => !theme.startsWith("dark")),
  );
  const darkThemes = JSON.stringify(
    COLOR_THEMES.filter((theme) => theme.startsWith("dark")),
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem("theme");
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (storedTheme?.startsWith("dark") || (!storedTheme && prefersDark)) {
                  document.documentElement.classList.add("dark");

                  const allowedDarkThemes = ${darkThemes};

                  if (allowedDarkThemes.includes(storedTheme)) {
                    document.documentElement.classList.add(storedTheme);
                  } else {
                    localStorage.setItem("theme", allowedDarkThemes[0]);
                    localStorage.setItem("last-used-dark-theme", allowedDarkThemes[0]);
                  }
                } else {
                  document.documentElement.classList.remove("dark");

                  const allowedLightThemes = ${lightThemes};

                  if (allowedLightThemes.includes(storedTheme)) {
                    document.documentElement.classList.add(storedTheme);
                  } else {
                    localStorage.setItem("theme", allowedLightThemes[0]);
                    localStorage.setItem("last-used-light-theme", allowedLightThemes[0]);
                  }
                }

                // Store default theme for each inactive color scheme if it's not in local storage
                console.log(true)
                const storedLightTheme = localStorage.getItem("last-used-light-theme");
                const storedDarkTheme = localStorage.getItem("last-used-dark-theme");

                if (!storedLightTheme) {
                  localStorage.setItem("last-used-light-theme", ${lightThemes}[0]);
                } 
                if (!storedDarkTheme) {
                  console.log(true)
                  localStorage.setItem("last-used-dark-theme", ${darkThemes}[0]);
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-dvh antialiased`}>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
