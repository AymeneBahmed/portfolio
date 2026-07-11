export default function AboutMeSection() {
  return (
    <section
      className="bg-muted/20 relative flex min-h-dvh items-center justify-center overflow-hidden"
      id="about-me"
    >
      {/* Ambient Aurora Glows - 100% static, zero performance cost */}
      <div className="pointer-events-none absolute -z-10 bg-red-200 select-none">
        {/* Soft Indigo/Primary glow drifting from the top left behind the card */}
        <div className="bg-primary/5 absolute -top-20 -left-20 size-125 rounded-full blur-[130px]" />

        {/* Soft Cyan glow escaping out of the bottom right */}
        <div className="bg-primary/5 absolute -right-20 -bottom-32 size-150 rounded-full blur-[130px]" />
      </div>
    </section>
  );
}
