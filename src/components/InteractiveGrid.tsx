"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
}

interface Mouse {
  x: number | null;
  y: number | null;
  radius: number;
}

interface Wave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
}

export function InteractiveGrid(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let waves: Wave[] = [];
    const mouse: Mouse = { x: null, y: null, radius: 10000 }; // Slightly larger hover area for smoothness

    const interpolateColor = (
      color1: string,
      color2: string,
      factor: number,
    ): string => {
      const r1 = parseInt(color1.substring(1, 3), 16);
      const g1 = parseInt(color1.substring(3, 5), 16);
      const b1 = parseInt(color1.substring(5, 7), 16);

      const r2 = parseInt(color2.substring(1, 3), 16);
      const g2 = parseInt(color2.substring(3, 5), 16);
      const b2 = parseInt(color2.substring(5, 7), 16);

      const r = Math.round(r1 + factor * (r2 - r1));
      const g = Math.round(g1 + factor * (g2 - g1));
      const b = Math.round(b1 + factor * (b2 - b1));

      const opacity = 0.5;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const getAnimatedColor = (time: number): string => {
      const palette = ["#818cf8", "#ff4b91", "#00f5ff", "#818cf8"];
      const totalSteps = palette.length - 1;
      const cycle = (time / 12000) % 1;
      const step = cycle * totalSteps;
      const index = Math.floor(step);
      const factor = step - index;

      return interpolateColor(palette[index], palette[index + 1], factor);
    };

    const initGrid = (): void => {
      // Get the parent element (the <section> tag) to read its actual layout size
      const parent = canvas.parentElement;
      const targetWidth = parent ? parent.clientWidth : window.innerWidth;
      const targetHeight = parent ? parent.clientHeight : window.innerHeight;

      // Set the internal canvas resolution to match the container perfectly
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      particles = [];

      const gap = 40;

      for (let x = 10; x < canvas.width; x += gap) {
        for (let y = 10; y < canvas.height; y += gap) {
          particles.push({ x, y, baseX: x, baseY: y });
        }
      }
      for (let x = 30; x < canvas.width; x += gap) {
        for (let y = 30; y < canvas.height; y += gap) {
          particles.push({ x, y, baseX: x, baseY: y });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = (): void => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleMouseClick = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      waves.push({
        x: clickX,
        y: clickY,
        radius: 0,
        maxRadius: 700, // Let the wave travel further across the screen
        speed: 4.5, // REDUCED: Travels smoothly like a real-world liquid ripple
      });
    };

    window.addEventListener("resize", initGrid);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleMouseClick);

    initGrid();

    const animate = (timestamp: number): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = getAnimatedColor(timestamp);

      // Advance expanding waves
      for (let i = waves.length - 1; i >= 0; i--) {
        waves[i].radius += waves[i].speed;
        if (waves[i].radius > waves[i].maxRadius) {
          waves.splice(i, 1);
        }
      }

      // Physics loop
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        let targetX = p.baseX;
        let targetY = p.baseY;
        let isUnderForce = false;

        // --- HOVER FORCE (Smoothed Out) ---
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.baseX - mouse.x;
          const dy = p.baseY - mouse.y;
          const distFromMouse = Math.sqrt(dx * dx + dy * dy);

          if (distFromMouse < mouse.radius) {
            const force = (mouse.radius - distFromMouse) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const pushDist = force * 25;

            targetX += Math.cos(angle) * pushDist;
            targetY += Math.sin(angle) * pushDist;
            isUnderForce = true;
          }
        }

        // --- CLICK BLAST SHOCKWAVE (Cinematic Tuning) ---
        for (let j = 0; j < waves.length; j++) {
          const wave = waves[j];
          const dx = p.baseX - wave.x;
          const dy = p.baseY - wave.y;
          const distFromWaveCenter = Math.sqrt(dx * dx + dy * dy);

          const waveThickness = 200; // INCREASED: A wider crest means a smoother rolling wave motion

          if (
            distFromWaveCenter < wave.radius &&
            distFromWaveCenter > wave.radius - waveThickness
          ) {
            // High-precision sine-wave smoothing so dots ease into the peak of the wave
            const progress =
              (distFromWaveCenter - (wave.radius - waveThickness)) /
              waveThickness;
            const smoothForce = Math.sin(progress * Math.PI); // Peak force is perfectly in the middle of the wave thickness

            const angle = Math.atan2(dy, dx);
            const waveLifeFactor = 1 - wave.radius / wave.maxRadius;
            const blastStrength = smoothForce * 90 * waveLifeFactor; // REDUCED: Soft, elegant push instead of a hard snap

            targetX += Math.cos(angle) * blastStrength;
            targetY += Math.sin(angle) * blastStrength;
            isUnderForce = true;
          }
        }

        // --- VISCOUS FLUID EASING ---
        if (isUnderForce) {
          // REDUCED to 0.12: The dots drift outward fluidly rather than teleporting instantly
          p.x += (targetX - p.x) * 0.9;
          p.y += (targetY - p.y) * 0.9;
        } else {
          // REDUCED to 0.035: Gives the dots "weight" so they slowly float back like they are floating in space
          p.x += (p.baseX - p.x) * 0.035;
          p.y += (p.baseY - p.y) * 0.035;
        }

        // Render dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", initGrid);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleMouseClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    />
  );
}
