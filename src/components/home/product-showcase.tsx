"use client";

import { useRef } from "react";
import Image from "next/image";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Container } from "@/components/site/container";
import { ArrowBadge } from "@/components/ui/arrow-badge";
import { ProductCard } from "@/components/home/product-card";
import { Reveal } from "@/components/motion/reveal";
import { PRODUCTS } from "@/lib/products";
import { themedImage } from "@/lib/images";

export function ProductShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => scrollerRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-(--radius-card)">
            <Image
              src={themedImage("citrus,fruit", 640, 800, 1)}
              alt="Citrus Foam cleanser styled on a bathroom shelf"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="photo-grade object-cover"
            />
            <ArrowBadge className="absolute right-4 top-4" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
              <p className="text-lg font-medium text-white sm:text-xl">Citrus Foam</p>
              <p className="mt-1 max-w-xs text-sm leading-relaxed text-white/80">
                A simple, effective formula for a smooth and balanced experience. Perfect for your everyday skincare
                essentials.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-h1">Clean, Clinically Proven, Consciously Crafted</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
              Formulated with safe ingredients backed by science to support healthier skin, body, and well-being
              with clean, trusted formulations.
            </p>

            <div className="mt-6 flex gap-2">
              <button
                type="button"
                aria-label="Previous products"
                onClick={() => scrollBy(-1)}
                className="flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <CaretLeftIcon className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next products"
                onClick={() => scrollBy(1)}
                className="flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <CaretRightIcon className="size-4" />
              </button>
            </div>

            <div ref={scrollerRef} className="mt-8 flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none]">
              {PRODUCTS.slice(3).map((product) => (
                <div key={product.slug} className="w-[220px] shrink-0 snap-start">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
