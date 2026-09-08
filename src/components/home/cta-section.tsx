import Image from "next/image";
import { Container } from "@/components/site/container";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/motion/reveal";
import { themedImage } from "@/lib/images";

export function CtaSection() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-(--radius-card) sm:aspect-[16/9]">
          <Image
            src={themedImage("meadow,flowers", 1400, 1400, 1)}
            alt="Skincare model surrounded by fresh flowers, evoking renewal"
            fill
            sizes="100vw"
            className="photo-grade object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
          <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10 sm:max-w-lg">
            <h2 className="text-h1 text-white">Skincare Evolves. Adjust Your Formula Any time</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              Easily modify your formula as your skin, seasons, and lifestyle change for consistently better
              results.
            </p>
            <PillButton href="/shop" className="mt-6">
              Start Shopping
            </PillButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
