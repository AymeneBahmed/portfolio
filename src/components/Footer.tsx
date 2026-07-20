export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-primary flex h-14 items-center justify-center border-t-2 font-semibold tracking-wide">
      Copyright &copy; {currentYear} Aymene Bahmed
    </footer>
  );
}
