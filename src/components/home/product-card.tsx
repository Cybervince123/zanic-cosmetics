"use client";

import Image from "next/image";
import type { Product } from "@/lib/products";

// 4:5 is the site-wide ratio for content photography (product shots, portraits,
// feature imagery) — the only exceptions are square accent badges and the hero/CTA
// banners, which step from 4:5 on mobile to 16:9 at sm+.
export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const enquiryHref = `https://wa.me/2349054593563?text=${encodeURIComponent(`Hello Zanic, I would like to enquire about ${product.name}.`)}`;

  if (compact) {
    return (
      <div className="group flex h-32 overflow-hidden rounded-(--radius-card) bg-surface shadow-sm ring-1 ring-line/70 transition-transform duration-300 hover:-translate-y-0.5">
        <div className="relative w-28 shrink-0 bg-muted sm:w-32">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="128px"
            className="photo-grade object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
          <span className="self-start rounded-(--radius-pill) bg-lime-soft px-2.5 py-1 text-[11px] font-semibold text-lime-ink">
            Ask for price
          </span>
          <div className="flex items-end justify-between gap-3">
            <p className="min-w-0 text-sm font-medium leading-snug text-ink">{product.name}</p>
            <a
              href={enquiryHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`Enquire about ${product.name}`}
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-bg transition-colors hover:bg-lime hover:text-black"
            >
              <span aria-hidden="true" className="text-base leading-none">↗</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative aspect-[4/5] shrink-0 overflow-hidden rounded-(--radius-card) bg-muted">
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(min-width: 1024px) 280px, 60vw"
        className="photo-grade object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
      <span className="absolute left-4 top-4 rounded-(--radius-pill) bg-surface px-3 py-1.5 text-xs font-medium text-ink">Ask for price</span>
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
        <p className="max-w-[80%] text-sm font-medium text-white">{product.name}</p>
        <a
          href={enquiryHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Enquire about ${product.name}`}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-lime"
        >
          <span aria-hidden="true" className="text-lg leading-none">↗</span>
        </a>
      </div>
    </div>
  );
}
