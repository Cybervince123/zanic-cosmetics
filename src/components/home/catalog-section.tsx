"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/site/container";
import { ProductCard } from "@/components/home/product-card";
import { Reveal } from "@/components/motion/reveal";
import {
  CATEGORIES,
  CATEGORY_DETAILS,
  PRODUCTS,
  type Category,
} from "@/lib/products";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function CatalogSection() {
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);
  const contentRef = useRef<HTMLDivElement>(null);
  const detail = CATEGORY_DETAILS[category];
  const visibleProducts = PRODUCTS.filter(
    (product) => product.category === category,
  );

  useGSAP(
    () => {
      if (
        !contentRef.current ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      gsap.fromTo(
        contentRef.current.querySelectorAll("[data-category-content]"),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" },
      );
    },
    { scope: contentRef, dependencies: [category] },
  );

  return (
    <section id="products" className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.18em] text-ink-faint">
            Product range
          </p>
          <div>
            <h2 className="text-h1">
              Skincare supply that
              <br />
              helps businesses grow
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
              Genuine skincare and wellness products for retailers, resellers,
              salons, spas and everyday routines. Contact Zanic for verified
              availability, wholesale quantities and current pricing.
            </p>
          </div>
        </Reveal>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter products by category"
        >
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={item === category}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-(--radius-pill) border px-4 py-2 text-sm font-medium transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5",
                item === category
                  ? "border-ink bg-ink text-bg shadow-sm"
                  : "border-line bg-transparent text-ink-muted hover:border-lime-deep hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div ref={contentRef} className="mt-8">
          <div
            data-category-content
            className="relative grid overflow-hidden rounded-(--radius-card) min-h-[500px] bg-dark lg:grid-cols-[minmax(0,1fr)_minmax(320px,42%)]"
          >
            <Image
              key={detail.image}
              src={detail.image}
              alt={detail.title}
              fill
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 flex flex-col justify-end p-10 bg-black/20 w-full h-full">
              <p className="text-xs uppercase tracking-[0.18em] text-lime">
                {detail.eyebrow}
              </p>

              <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                <h3 className="max-w-md text-3xl text-white sm:text-4xl">
                  {detail.title}
                </h3>
                <span className="rounded-(--radius-pill) bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  {visibleProducts.length}{" "}
                  {visibleProducts.length === 1 ? "product" : "products"}
                </span>
              </div>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                {detail.description}
              </p>
            </div>
          </div>

          <div data-category-content className="mt-8">
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-(--radius-card) bg-surface-muted p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="max-w-xl text-sm leading-relaxed text-ink">
                Need larger quantities or a wider assortment? Speak with our
                team about availability, competitive pricing and delivery
                options.
              </p>
              <a
                href="https://wa.me/2349054593563"
                className="inline-flex shrink-0 rounded-(--radius-pill) bg-lime px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request wholesale pricing
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
