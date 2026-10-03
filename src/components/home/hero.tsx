import Image from "next/image";
import { Container } from "@/components/site/container";
import { ArrowBadge } from "@/components/ui/arrow-badge";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function Hero() {
  return (
    <section className="pb-8 pt-8 sm:pt-10">
      <Container>
        <Reveal trigger="mount">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-(--radius-card) sm:aspect-[16/9]">
            <ParallaxImage
              src="/images/stock-hero-pexels-36524789.jpg"
              alt="Three women presenting beauty products"
              sizes="100vw"
              preload
              className="photo-grade object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute right-6 top-6 max-w-[260px] text-right sm:right-10 sm:top-10 sm:max-w-xs">
              <p className="text-xs leading-relaxed text-white/90 sm:text-sm">
                Genuine skincare, dependable supply and a team that takes your growth seriously.
              </p>
              <div className="mt-4 flex flex-col items-end gap-1 sm:flex-row sm:items-center sm:justify-end sm:gap-2">
                <span className="text-sm font-medium text-white">Nigeria-wide</span>
                <span className="hidden h-px w-6 bg-white/50 sm:block" />
                <span className="text-xs uppercase tracking-[0.18em] text-white/75">Wholesale + retail</span>
              </div>
            </div>

            <h1 className="absolute bottom-6 left-6 max-w-[80%] text-left text-4xl font-medium leading-[1.02] tracking-tight text-white sm:bottom-10 sm:left-10 sm:text-6xl lg:text-7xl">
              Quality skincare
              <br />
              delivered with
              <br />
              excellence
            </h1>
          </div>

          <div className="relative z-10 -mt-14 ml-auto mr-6 w-36 overflow-hidden rounded-(--radius-card) bg-surface shadow-xl sm:-mt-16 sm:mr-10 sm:w-48">
            <div className="relative aspect-square">
              <Image
                src="/products/studio/salicylic-anti-acne-serum.png"
                alt="Salicylic Acid Anti-Acne Serum from the current Zanic product library"
                fill
                sizes="192px"
                className="photo-grade object-cover"
              />
              <ArrowBadge className="absolute right-2 top-2" />
            </div>
            <p className="px-3 py-3 text-xs font-medium text-ink sm:text-sm">Selected for quality, authenticity and demand</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
