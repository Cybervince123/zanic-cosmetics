import { Hero } from "@/components/home/hero";
import { IntroFeatures } from "@/components/home/intro-features";
import { CatalogSection } from "@/components/home/catalog-section";
import { Testimonials } from "@/components/home/testimonials";
import { ProductShowcase } from "@/components/home/product-showcase";
import { Faq } from "@/components/home/faq";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroFeatures />
      <CatalogSection />
      <Testimonials />
      <ProductShowcase />
      <Faq />
      <CtaSection />
    </>
  );
}
