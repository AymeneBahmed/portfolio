import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="neon-green"
      themes={[
        "neon-green",
        "cyan",
        "sky",
        "blue",
        "purple",
        "caffeine",
        "orange",
        "yellow",
        "tomato",
        "fuchsia",
        "indigo",
        "green",
        "teal",
      ]}
    >
      {children}
    </NextThemesProvider>
  );
}
