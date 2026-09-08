"use client";

import { useRef, type ElementType } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const WORD_Y = 24;
const WORD_DURATION = 0.8;
const WORD_EASE = "power3.out";
const WORD_STAGGER = 0.06;

interface HeadlineRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  trigger?: "scroll" | "mount";
  delay?: number;
}

/** Splits text into words and reveals them individually, rising into place. */
export function HeadlineReveal({
  text,
  as: Tag = "h1",
  className,
  trigger = "scroll",
  delay = 0,
}: HeadlineRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      if (!ref.current) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targets = ref.current.querySelectorAll("[data-word]");

      if (reduceMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: WORD_Y },
        {
          opacity: 1,
          y: 0,
          duration: WORD_DURATION,
          ease: WORD_EASE,
          delay,
          stagger: WORD_STAGGER,
          scrollTrigger:
            trigger === "scroll"
              ? { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" }
              : undefined,
        },
      );
    },
    { scope: ref, dependencies: [text, trigger, delay] },
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <span data-word className="inline-block will-change-transform">
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
