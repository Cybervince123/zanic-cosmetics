"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Container } from "@/components/site/container";
import { ArrowBadge } from "@/components/ui/arrow-badge";
import { ProductCard } from "@/components/home/product-card";
import { Reveal } from "@/components/motion/reveal";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { themedImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export function CatalogSection() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
          <Reveal className="flex flex-col">
            <h2 className="text-h1">Refresh Your Skin And Renew Your Natural Glow</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={cn(
                    "rounded-(--radius-pill) border px-4 py-2 text-sm font-medium transition-colors",
                    c === category
                      ? "border-surface bg-surface text-ink shadow-sm"
                      : "border-line text-ink-muted hover:border-ink/30 hover:text-ink",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-(--radius-card)">
                <Image
                  src={themedImage("skincare,bottle", 640, 800, 1)}
                  alt="Skincare model applying formula"
                  fill
                  sizes="(min-width: 1024px) 320px, 45vw"
                  className="photo-grade object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <p className="text-sm font-medium leading-snug text-white">
                    Only 15 Products
                    <br />
                    Left This Month
                  </p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/30">
                    <div className="h-full w-3/5 rounded-full bg-lime" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-medium text-ink sm:text-xl">Skincare Serum</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Lightweight formula delivering deep hydration while enhancing your skin&rsquo;s natural, healthy
                    glow
                  </p>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-(--radius-card)">
                  <Image
                    src={themedImage("skincare,serum", 480, 480, 2)}
                    alt="Serum dropper applied to skin"
                    fill
                    sizes="(min-width: 1024px) 240px, 45vw"
                    className="photo-grade object-cover"
                  />
                  <ArrowBadge className="absolute inset-0 m-auto" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="relative hidden aspect-[4/5] overflow-hidden rounded-(--radius-card) lg:block">
            <Image
              src={themedImage("dropper", 640, 800, 1)}
              alt="Close-up detail of skincare application"
              fill
              sizes="500px"
              className="photo-grade object-cover"
            />
          </Reveal>
        </div>

        <Reveal className="mt-10 flex items-center justify-between">
          <p className="text-sm text-ink-faint">Best sellers</p>
          <div className="flex gap-2">
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
        </Reveal>

        <div ref={scrollerRef} className="mt-6 flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none]">
          {PRODUCTS.slice(0, 3).map((product) => (
            <div key={product.slug} className="w-[260px] shrink-0 snap-start sm:w-[280px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
