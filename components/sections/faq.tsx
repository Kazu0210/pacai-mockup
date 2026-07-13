"use client";

import { FAQS } from "@/lib/constants/agency";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection } from "@/components/shared/motion-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <MotionSection
      id="faqs"
      className="bg-slate-50 py-20 dark:bg-slate-900/50 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, complaint process, and data privacy."
        />

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MotionSection>
  );
}
