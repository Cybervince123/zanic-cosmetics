import { Container } from "@/components/site/container";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function CtaSection() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-(--radius-card) sm:aspect-[16/9]">
          <ParallaxImage
            src="/images/distribution.png"
            alt="Skincare order prepared for reliable delivery"
            sizes="100vw"
            className="photo-grade object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
          <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10 sm:max-w-lg">
            <h2 className="text-h1 text-white">Ready to stock smarter?</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              Tell us what you need. We will help with current availability, competitive bulk pricing and delivery
              options across Nigeria.
            </p>
            <PillButton href="https://wa.me/2349054593563" className="mt-6">
              Talk to Zanic
            </PillButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
