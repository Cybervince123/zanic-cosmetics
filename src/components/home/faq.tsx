import { Container } from "@/components/site/container";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { FAQS } from "@/lib/products";

export function Faq() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal as="div" className="text-center">
          <h2 className="mx-auto max-w-xl text-h1">Find Answers to All Your Questions</h2>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible defaultValue={FAQS[0].question}>
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
