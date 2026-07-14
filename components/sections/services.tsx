"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants/agency";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection, MotionCard } from "@/components/shared/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <MotionSection
      id="services"
      className="bg-slate-50 py-20 dark:bg-slate-900/50 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Digital Services for Members and the Public"
          description="Access PACAI services online — fast, secure, and available wherever you are in the Philippines."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <MotionCard key={service.title} delay={0.05 * index}>
              <Card className="group h-full transition-all duration-300 hover:border-ph-blue/30 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ph-blue text-white shadow-md transition-transform group-hover:scale-105">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ph-blue transition-colors hover:text-ph-blue/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ph-blue rounded"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </MotionCard>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
