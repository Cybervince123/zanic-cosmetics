import Image from "next/image";
import { ShieldCheckIcon, HandshakeIcon, TruckIcon } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";

const FEATURES = [
  { icon: ShieldCheckIcon, label: "Genuine products" },
  { icon: HandshakeIcon, label: "Partner-first service" },
  { icon: TruckIcon, label: "Reliable fulfilment" },
];

const IMAGE_FEATURES = [
  { image: "/images/authenticity.png", title: "Authenticity", credit: "Responsible sourcing" },
  { image: "/images/wholesale-partner.png", title: "Wholesale partnership", credit: "Built for business growth" },
  { image: "/images/distribution.png", title: "Dependable supply", credit: "Nigeria-wide delivery" },
];

export function IntroFeatures() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <p className="text-sm text-ink-faint lg:col-span-3">02</p>
          <p className="text-xl leading-snug text-ink sm:text-2xl lg:col-span-9 lg:text-3xl">
            Zanic makes quality skincare easier to access for retailers, resellers, beauty professionals and individual buyers.{" "}
            <span className="text-ink-muted">
              We source responsibly, price competitively and build the dependable supply relationships that growing businesses need.
            </span>
          </p>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-6">
          <ul className="divide-y divide-line lg:col-span-3">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 py-4 first:pt-0">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-lime-soft text-lime-ink">
                  <Icon className="size-4" weight="duotone" />
                </span>
                <span className="text-sm font-medium text-ink sm:text-base">{label}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:col-span-9">
            {IMAGE_FEATURES.map(({ image, title, credit }) => (
              <div key={title}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-(--radius-card)">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 260px, 30vw"
                    className="photo-grade object-cover"
                  />
                </div>
                <p className="mt-3 text-xs font-medium leading-tight text-ink sm:text-sm">{title}</p>
                <p className="text-xs leading-tight text-ink-faint">{credit}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
