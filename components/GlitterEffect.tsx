"use client";

import React, { useEffect, useMemo, useState } from "react";

type GlitterEffectProps = {
  count?: number;
  showForMs?: number;
};

type GlitterParticle = {
  id: number;
  leftPercent: number;
  sizePx: number;
  delayMs: number;
  durationMs: number;
  color: string;
};

export default function GlitterEffect({ count = 120, showForMs = 2400 }: GlitterEffectProps) {
  const [visible, setVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Respect reduced motion preferences
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    setIsMounted(true);
    if (prefersReducedMotion) return;
    const timeout = window.setTimeout(() => setVisible(false), showForMs);
    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion, showForMs]);

  const particles = useMemo<GlitterParticle[]>(() => {
    const colors = ["#FFD700", "#FFC107", "#FFECB3", "#FFF8E1", "#FFE082"];
    return Array.from({ length: count }).map((_, index) => {
      const leftPercent = Math.random() * 100;
      const sizePx = 3 + Math.random() * 5;
      const delayMs = Math.floor(Math.random() * 600);
      const durationMs = 1400 + Math.floor(Math.random() * 1400);
      const color = colors[Math.floor(Math.random() * colors.length)];
      return { id: index, leftPercent, sizePx, delayMs, durationMs, color };
    });
  }, [count]);

  // Avoid hydration mismatch: render nothing on server, first render on client only
  if (!isMounted || !visible || prefersReducedMotion) return null;

  return (
    <div className="td-glitter-container" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="td-glitter-wrapper"
          style={{
            left: `${p.leftPercent}%`,
            animation: `td-glitter-fall ${p.durationMs}ms ${p.delayMs}ms cubic-bezier(0.22, 1, 0.36, 1) both`,
          }}
        >
          <div
            className="td-glitter-particle"
            style={{
              width: p.sizePx,
              height: p.sizePx * 0.6,
              background: p.color,
              animation: `td-glitter-twirl ${Math.max(900, Math.floor(p.durationMs * 0.85))}ms ${p.delayMs}ms ease-in-out infinite alternate`,
            }}
          />
        </div>
      ))}
      <style jsx>{`
        .td-glitter-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 30;
        }
        .td-glitter-wrapper {
          position: absolute;
          top: -10%;
          will-change: transform, opacity;
          opacity: 0;
        }
        .td-glitter-particle {
          border-radius: 2px;
          filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.6));
        }
        @keyframes td-glitter-fall {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110%);
            opacity: 0;
          }
        }
        @keyframes td-glitter-twirl {
          0% {
            transform: translateX(0) rotate(0deg);
          }
          50% {
            transform: translateX(14px) rotate(180deg);
          }
          100% {
            transform: translateX(-14px) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}


