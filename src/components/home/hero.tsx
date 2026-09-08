import Image from "next/image";
import { Container } from "@/components/site/container";
import { ArrowBadge } from "@/components/ui/arrow-badge";
import { Reveal } from "@/components/motion/reveal";
import { themedImage } from "@/lib/images";

const AVATARS = [
  themedImage("portrait,face", 100, 100, 1),
  themedImage("portrait,face", 100, 100, 2),
  themedImage("portrait,face", 100, 100, 3),
];

export function Hero() {
  return (
    <section className="pb-8 pt-8 sm:pt-10">
      <Container>
        <Reveal trigger="mount">
          {/* Banner ratio: the site's one exception to the 4:5 portrait rhythm — a
              statement image that goes from a tall 4:5 crop on mobile to a wide 16:9
              crop at sm+. The source is requested square so both crops read cleanly. */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-(--radius-card) sm:aspect-[16/9]">
            <Image
              src={themedImage("portrait,woman", 1400, 1400)}
              alt="Model with soft natural light, embodying calm skincare rituals"
              fill
              sizes="100vw"
              preload
              className="photo-grade object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

            <div className="absolute right-6 top-6 max-w-[220px] text-right sm:right-10 sm:top-10 sm:max-w-xs">
              <p className="text-xs leading-relaxed text-white/90 sm:text-sm">
                Start your day with gentle care and nourishing ingredients designed to awaken your skin naturally.
              </p>
              <div className="mt-4 flex items-center justify-end gap-2">
                <span className="text-sm font-medium text-white">5k+</span>
                <span className="h-px w-6 bg-white/50" />
                <span className="flex -space-x-2">
                  {AVATARS.map((src, i) => (
                    <span key={i} className="relative size-7 overflow-hidden rounded-full ring-2 ring-black/40">
                      <Image src={src} alt="" fill sizes="28px" className="object-cover" />
                    </span>
                  ))}
                </span>
              </div>
            </div>

            <h1 className="absolute inset-x-6 bottom-6 text-right text-3xl font-medium uppercase leading-[1.05] tracking-tight text-white sm:inset-x-10 sm:bottom-10 sm:text-5xl lg:text-6xl">
              Naturally Pure
              <br />
              Skincare Essentials
            </h1>
          </div>

          <div className="relative z-10 -mt-14 ml-6 w-36 overflow-hidden rounded-(--radius-card) bg-surface shadow-xl sm:-mt-16 sm:ml-10 sm:w-48">
            {/* Square badge — the site's other exception, reserved for small accent images. */}
            <div className="relative aspect-square">
              <Image
                src={themedImage("skincare,serum", 480, 480, 1)}
                alt="Hydration Boost Formula"
                fill
                sizes="192px"
                className="photo-grade object-cover"
              />
              <ArrowBadge className="absolute right-2 top-2" />
            </div>
            <p className="px-3 py-3 text-xs font-medium text-ink sm:text-sm">Hydration Boost Formula</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
