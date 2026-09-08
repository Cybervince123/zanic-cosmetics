import Image from "next/image";
import { PlusIcon } from "@phosphor-icons/react/ssr";
import type { Product } from "@/lib/products";

// 4:5 is the site-wide ratio for content photography (product shots, portraits,
// feature imagery) — the only exceptions are square accent badges and the hero/CTA
// banners, which step from 4:5 on mobile to 16:9 at sm+.
export function ProductCard({ product }: { product: Product }) {
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
      <span className="absolute left-4 top-4 rounded-(--radius-pill) bg-surface px-3 py-1.5 text-xs font-medium text-ink">
        $ {product.price.toFixed(2)} USD
      </span>
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
        <p className="text-sm font-medium text-white">{product.name}</p>
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-lime"
        >
          <PlusIcon className="size-4" weight="bold" />
        </button>
      </div>
    </div>
  );
}
