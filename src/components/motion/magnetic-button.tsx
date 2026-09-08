"use client";

import { useRef, type ButtonHTMLAttributes } from "react";
import { useGSAP } from "@gsap/react";
import { Slot } from "radix-ui";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as the child element (e.g. a Link) instead of a <button>, keeping the same styling and magnetic behavior. */
  asChild?: boolean;
}

const HOVER_SCALE = 1.02;
const HOVER_DURATION = 0.3;

export function MagneticButton({ className, children, asChild = false, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      // Subtle by default — a slight pull toward the cursor, not a dramatic yank.
      const strength = 0.18;

      const handleMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const relX = event.clientX - (rect.left + rect.width / 2);
        const relY = event.clientY - (rect.top + rect.height / 2);
        gsap.to(el, {
          x: relX * strength,
          y: relY * strength,
          scale: HOVER_SCALE,
          duration: HOVER_DURATION,
          ease: "power3.out",
        });
      };

      const handleLeave = () => {
        gsap.to(el, { x: 0, y: 0, scale: 1, duration: HOVER_DURATION, ease: "power3.out" });
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: ref },
  );

  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      ref={ref}
      className={cn("inline-flex items-center justify-center will-change-transform", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
