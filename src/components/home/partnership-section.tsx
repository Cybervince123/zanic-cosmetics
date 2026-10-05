import Image from "next/image";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";

const VALUE_PROPS = [
  { title: "Authenticity", description: "Responsible sourcing and genuine products you can confidently place on your shelves." },
  { title: "Competitive pricing", description: "Wholesale pricing designed to help retailers and resellers stay competitive." },
  { title: "Reliable supply", description: "A dependable supply approach that helps you plan stock and serve customers consistently." },
  { title: "Business partnership", description: "Product information, responsive communication and support built around your growth." },
];

export function PartnershipSection() {
  return (
    <section id="partners" className="py-16 sm:py-24">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <p className="text-7xl font-light leading-none tracking-[-0.05em] text-ink-faint sm:text-8xl lg:col-span-3">03</p>
          <div className="lg:col-span-9">
            <p className="text-sm uppercase tracking-[0.18em] text-ink-faint">Why partner with Zanic</p>
            <h2 className="mt-3 max-w-3xl text-h1">A dependable partner for the next order and the next stage of growth.</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal className="relative overflow-hidden rounded-(--radius-card) bg-dark">
            <Image
              src="/images/partner-zanic.jpg"
              alt="Woman applying skincare to her face"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="photo-grade object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
              <p className="max-w-sm text-xl leading-snug text-white sm:text-2xl">“Zanic grows when its customers grow.”</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/65">The Zanic partnership promise</p>
            </div>
          </Reveal>

          <Reveal stagger className="grid gap-px overflow-hidden rounded-(--radius-card) bg-line sm:grid-cols-2">
            {VALUE_PROPS.map((item, index) => (
              <article key={item.title} className="bg-surface p-6 sm:p-8">
                <span className="text-4xl font-light leading-none tracking-[-0.04em] text-lime-deep">0{index + 1}</span>
                <h3 className="mt-12 text-xl">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </article>
            ))}
          </Reveal>
        </div>
        </Container>
    </section>
  );
}
