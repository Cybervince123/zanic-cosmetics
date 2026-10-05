"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
}

export function ParallaxImage({
  src,
  alt,
  sizes,
  preload = false,
  fetchPriority,
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const image = ref.current?.querySelector("img");
      if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        image,
        { scale: 1.08, yPercent: -2 },
        {
          scale: 1.02,
          yPercent: 3,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        fetchPriority={fetchPriority}
        className={className}
      />
    </div>
  );
}
