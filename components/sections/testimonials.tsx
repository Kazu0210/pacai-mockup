"use client";

import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants/agency";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection, MotionCard } from "@/components/shared/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <MotionSection className="py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Citizen Feedback"
          title="What Filipinos Are Saying"
          description="Real experiences from citizens who have used our digital public service platform."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <MotionCard key={testimonial.name} delay={0.1 * index}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <Quote className="h-8 w-8 text-ph-blue/30" aria-hidden="true" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ph-blue to-ph-blue/70 text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionCard>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
