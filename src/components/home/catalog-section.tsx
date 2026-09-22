"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/site/container";
import { ProductCard } from "@/components/home/product-card";
import { Reveal } from "@/components/motion/reveal";
import { CATEGORIES, CATEGORY_DETAILS, PRODUCTS, type Category } from "@/lib/products";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function CatalogSection() {
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);
  const contentRef = useRef<HTMLDivElement>(null);
  const detail = CATEGORY_DETAILS[category];
  const visibleProducts = PRODUCTS.filter((product) => product.category === category);

  useGSAP(
    () => {
      if (!contentRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
        <Reveal className="grid gap-6 border-b border-line pb-10 lg:grid-cols-12">
          <p className="text-sm uppercase tracking-[0.18em] text-ink-faint lg:col-span-3">Product range</p>
          <div className="lg:col-span-9">
            <h2 className="text-h1">The products your customers already ask for</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
              Shop for personal use or build a reliable shelf for your store, salon, spa or online business.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={item === category}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-(--radius-pill) border px-4 py-2 text-sm font-medium transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5",
                item === category
                  ? "border-ink bg-ink text-on-dark shadow-sm"
                  : "border-line bg-transparent text-ink-muted hover:border-lime-deep hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div ref={contentRef} className="mt-8 grid gap-5 lg:grid-cols-12">
          <div
            data-category-content
            className="relative min-h-[420px] overflow-hidden rounded-(--radius-card) bg-dark lg:col-span-7"
          >
            <Image
              key={detail.image}
              src={detail.image}
              alt={detail.title}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="photo-grade object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
              <p className="text-xs uppercase tracking-[0.18em] text-lime">{detail.eyebrow}</p>
              <h3 className="mt-3 max-w-md text-3xl text-white sm:text-4xl">{detail.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">{detail.description}</p>
            </div>
          </div>

          <div data-category-content className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Looking for case quantities or a wider assortment? Request the current wholesale catalogue from our team.
            </p>
            <a href="https://wa.me/2349054593563" className="mt-5 inline-flex rounded-(--radius-pill) bg-lime px-5 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5">
              Request wholesale pricing
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
