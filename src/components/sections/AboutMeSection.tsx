"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion, stagger, Variants } from "motion/react";

const cardsText = [
  {
    header: "Prioritize accessibility",
    content: [
      "When I build user interfaces, I ensure they are fully accessible by",
      "implementing robust semantic HTML, comprehensive ARIA attributes for",
      "screen readers, and maintaining high-contrast color palettes.",
    ].join(" "),
  },
  {
    header: "Evaluate trade-offs",
    content: [
      "Before adopting any tool or architecture, I evaluate it objectively by",
      "analyzing its advantages and inherent drawbacks. No engineering tool is",
      "perfect, and making informed compromises is key.",
    ].join(" "),
  },
  {
    header: "Optimize performance",
    content: [
      "I monitor runtime metrics like memory consumption and CPU utilization.",
      "By leveraging browser developer tools, I catch bottlenecks early to",
      "guarantee a fluid and responsive user experience.",
    ].join(" "),
  },
  {
    header: "Enforce security & integrity",
    content: [
      "Security isn't an afterthought when I write code. I focus on building",
      "baseline defenses directly into the application, ensuring proper input",
      "handling to block XSS and SQL injections, and correctly configuring CORS",
      "policies to keep data secure.",
    ].join(" "),
  },
  {
    header: "Design for extensibility & scalability",
    content: [
      "I build software with team collaboration in mind. I prioritize clean,",
      "self-documenting code and architectural simplicity so that scaling up",
      "systems and introducing new features remains straightforward.",
    ].join(" "),
  },
];

export default function AboutMeSection() {
  const gridContainerVariants: Variants = {
    hidden: {},
    animate: {
      transition: { delayChildren: stagger(0.15) },
    },
  };
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section
      className="bg-muted/20 text-foreground relative flex min-h-[82dvh] flex-col items-center justify-center gap-8 overflow-hidden p-12 md:px-16 [@media(min-height:62.5rem)_and_(min-width:31.25rem)]:h-auto [@media(min-height:62.5rem)_and_(min-width:31.25rem)]:min-h-190"
      id="about-me"
    >
      {/* Ambient Aurora Glows - 100% static, zero performance cost */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        {/* Soft Indigo/Primary glow drifting from the top left behind the card */}
        <div className="bg-primary/5 absolute -top-20 -left-20 size-125 rounded-full blur-[130px]" />

        {/* Soft Cyan/Secondary glow escaping out of the bottom right */}
        <div className="bg-primary/5 absolute -right-20 -bottom-32 size-150 rounded-full blur-[130px]" />
      </div>

      <motion.h1
        className="text-primary text-shadow-primary text-center text-5xl font-bold tracking-wide text-shadow-[0_0_5px] min-[33.125rem]:text-6xl"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        As a Software Engineer, I...
      </motion.h1>

      {/* Grid Layout: Optimized 2-column layout for an odd number of items (5) */}
      <motion.div
        className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {cardsText.map((text, i) => (
          <motion.div
            key={i}
            className="hover:border-primary/50 flex-col border transition-colors duration-300"
            variants={cardVariants}
          >
            <Card className="h-full border-none">
              <CardHeader className="text-muted-foreground block font-mono text-lg font-semibold tracking-tight">
                {">"}{" "}
                <span className="text-primary decoration-primary/40 mt-1 underline underline-offset-8 sm:mt-0 sm:inline">
                  {text.header}
                </span>
              </CardHeader>
              <CardContent className="text-muted-foreground/90 grow text-sm leading-relaxed">
                {text.content}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
