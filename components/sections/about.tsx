"use client";

import { Eye, Target } from "lucide-react";
import { CORE_VALUES } from "@/lib/constants/agency";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection, MotionCard } from "@/components/shared/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <MotionSection
      id="about"
      className="py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Us"
          title="Championing Good Governance for Every Filipino"
          description="The Philippine Agency serves as the nation's dedicated body for accountability, citizen empowerment, and responsive public service."
        />

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <MotionCard delay={0.1}>
            <Card className="h-full border-l-4 border-l-ph-blue">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ph-blue/10">
                  <Target className="h-6 w-6 text-ph-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  To promote transparency, accountability, and integrity in government service by providing accessible channels for citizen complaints, inquiries, and public information — ensuring every Filipino receives fair and timely resolution.
                </p>
              </CardContent>
            </Card>
          </MotionCard>

          <MotionCard delay={0.2}>
            <Card className="h-full border-l-4 border-l-ph-red">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ph-red/10">
                  <Eye className="h-6 w-6 text-ph-red" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  A Philippines where every citizen trusts government institutions, where public service is efficient and corruption-free, and where digital innovation bridges the gap between the people and their government.
                </p>
              </CardContent>
            </Card>
          </MotionCard>
        </div>

        <h3 id="about-heading" className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white">
          Core Values
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, index) => (
            <MotionCard key={value.title} delay={0.1 * index}>
              <Card className="h-full text-center transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-ph-blue/10 to-ph-blue/5">
                    <value.icon className="h-7 w-7 text-ph-blue" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </MotionCard>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
