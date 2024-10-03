import Link from "next/link";
import ThemeTogglerButton from "./ThemeTogglerButton";

export default function Navbar() {
  const navLinks = ["about me", "projects", "experience", "skills", "contact"];

  return (
    <nav className="relative flex h-[4.5rem] items-center justify-center border-b bg-muted/40">
      <div className="flex w-[40%] cursor-pointer justify-between">
        {navLinks.map((link) => (
          <Link
            key={link}
            className="group relative font-semibold capitalize underline-offset-8 transition-colors duration-300 hover:text-primary"
            href="/"
          >
            <div className="absolute bottom-[-3px] left-0 h-0.5 w-0 rounded-full bg-primary transition-[width] group-hover:w-full"></div>
            {link}
          </Link>
        ))}
      </div>

      <ThemeTogglerButton className="absolute right-10" />
    </nav>
  );
}
