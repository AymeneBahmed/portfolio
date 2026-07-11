export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex h-14 items-center justify-center border-t font-semibold tracking-wide">
      Copyright &copy; {currentYear} Aymene Bahmed
    </footer>
  );
}
