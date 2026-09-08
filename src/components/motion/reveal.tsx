"use client";

import { useRef, type ReactNode, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const REVEAL_Y = 20;
const REVEAL_DURATION = 0.7;
const REVEAL_EASE = "power2.out";
const STAGGER = 0.08;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: boolean;
  as?: "div" | "section" | "ul";
  /** "scroll" (default) reveals when scrolled into view; "mount" plays once on load — use for above-the-fold content. */
  trigger?: "scroll" | "mount";
  /** Delay in seconds before a "mount" trigger plays. Ignored for "scroll". */
  delay?: number;
  /** "up" (default) rises into place from below; "down" settles in from above — used for small badges/pills. */
  direction?: "up" | "down";
}

export function Reveal({
  children,
  className,
  stagger = false,
  as = "div",
  trigger = "scroll",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targets = stagger ? Array.from(ref.current.children) : ref.current;
      const offset = direction === "down" ? -REVEAL_Y : REVEAL_Y;

      if (reduceMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: offset },
        {
          opacity: 1,
          y: 0,
          duration: REVEAL_DURATION,
          ease: REVEAL_EASE,
          delay,
          stagger: stagger ? STAGGER : 0,
          scrollTrigger:
            trigger === "scroll"
              ? {
                  trigger: ref.current,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                }
              : undefined,
        },
      );
    },
    { scope: ref, dependencies: [stagger, trigger, delay, direction] },
  );

  if (as === "ul") {
    return (
      <ul ref={ref as RefObject<HTMLUListElement | null>} className={className}>
        {children}
      </ul>
    );
  }

  if (as === "section") {
    return (
      <section ref={ref as RefObject<HTMLElement | null>} className={className}>
        {children}
      </section>
    );
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement | null>} className={className}>
      {children}
    </div>
  );
}
