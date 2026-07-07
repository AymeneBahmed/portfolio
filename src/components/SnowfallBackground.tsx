"use client";

import { useRef, useEffect } from "react";

export function SnowfallBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas size to match window
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Create snowballs
    const snowballs: {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];
    const snowballCount = 100;

    for (let i = 0; i < snowballCount; i++) {
      snowballs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Theme detection
    const themeRef = {
      current: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    };

    const observer = new MutationObserver(() => {
      themeRef.current = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowballs.forEach((ball) => {
        ball.x += ball.speedX;
        ball.y += ball.speedY;

        // Reset position if out of bounds
        if (ball.y > canvas.height) {
          ball.y = 0;
          ball.x = Math.random() * canvas.width;
        }
        if (ball.x > canvas.width || ball.x < 0) {
          ball.speedX *= -1;
        }

        // Draw snowball with theme-based color
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);

        // Use blue-tinged snow in light mode, pure white in dark mode
        if (themeRef.current === "light") {
          ctx.fillStyle = `rgba(100, 220, 255, ${ball.opacity})`; // Light blue snow
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${ball.opacity})`; // White snow
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="inset-0 h-full w-full" />
    </div>
  );
}
