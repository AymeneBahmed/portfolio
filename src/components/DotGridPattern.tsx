export function DotGridPattern() {
  return (
    <div
      className="text-primary absolute inset-0 -z-10 opacity-30 sm:hidden pointer-fine:hidden"
      style={{
        backgroundImage: `
            radial-gradient(circle at 10px 10px, currentColor 2px, transparent 0),
            radial-gradient(circle at 10px 10px, currentColor 2px, transparent 0)
          `,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 20px 20px",
      }}
    />
  );
}
