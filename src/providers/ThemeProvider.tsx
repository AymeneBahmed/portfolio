import { COLOR_THEMES } from "@/lib/constants";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="neon-green"
      themes={COLOR_THEMES}
    >
      {children}
    </NextThemesProvider>
  );
}
