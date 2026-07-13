"use client";

import { TIMELINE_STEPS } from "@/lib/constants/agency";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection } from "@/components/shared/motion-wrapper";
import { motion } from "framer-motion";

export function HowItWorksSection() {
  return (
    <MotionSection className="py-20 sm:py-28" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Your Complaint Journey"
          description="From submission to resolution — a transparent, step-by-step process designed to keep you informed every step of the way."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-ph-blue via-ph-blue/50 to-ph-yellow md:left-1/2 md:-ml-px md:block"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {TIMELINE_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div
                    className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
                      index % 2 === 0 ? "md:ml-12 md:text-left" : "md:mr-12 md:text-right"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-ph-blue">
                      Step {step.step}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-ph-blue text-sm font-bold text-white shadow-lg md:left-1/2 md:-ml-6">
                  {step.step}
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
