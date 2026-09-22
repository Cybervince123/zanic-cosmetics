"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { StarIcon, CaretLeftIcon, CaretRightIcon, QuotesIcon } from "@phosphor-icons/react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { TESTIMONIALS } from "@/lib/products";
import { gsap } from "@/lib/gsap";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const testimonial = TESTIMONIALS[index];

  useGSAP(
    () => {
      if (!contentRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        contentRef.current.querySelectorAll("[data-testimonial-piece]"),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.05, ease: "power3.out" },
      );
    },
    { scope: contentRef, dependencies: [index] },
  );

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal as="div" className="text-center">
          <h2 className="mx-auto max-w-2xl text-h1">Trusted By Our Happy And Loyal Customers</h2>
        </Reveal>

        <Reveal className="mt-12">
          <div ref={contentRef} className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <div data-testimonial-piece className="flex items-center gap-4 text-sm text-ink-faint">
              <span>0{index + 1}</span>
              <span className="flex items-center gap-1 text-ink">
                {testimonial.rating.toFixed(1)}
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    weight="fill"
                    className={i < Math.round(testimonial.rating) ? "size-4 text-lime-deep" : "size-4 text-line"}
                  />
                ))}
              </span>
            </div>

            <QuotesIcon data-testimonial-piece className="mt-6 size-6 text-lime-deep" weight="fill" />
            <p data-testimonial-piece className="mt-4 text-xl leading-relaxed text-ink sm:text-2xl">{testimonial.quote}</p>

            <div data-testimonial-piece className="mt-6">
              <p className="text-sm font-medium text-ink">{testimonial.name}</p>
              <p className="text-sm text-ink-muted">{testimonial.role}</p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
                >
                  <CaretLeftIcon className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
                >
                  <CaretRightIcon className="size-4" />
                </button>
              </div>
              <p className="text-sm text-ink-faint">
                Slide {index + 1} of {TESTIMONIALS.length}
              </p>
            </div>
          </div>

          <div data-testimonial-piece className="order-1 aspect-[4/5] overflow-hidden rounded-(--radius-card) lg:order-2">
            <Image
              key={testimonial.image}
              src={testimonial.image}
              alt={testimonial.name}
              width={640}
              height={800}
              sizes="(min-width: 1024px) 500px, 90vw"
              className="photo-grade size-full object-cover"
            />
          </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
