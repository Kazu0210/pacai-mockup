"use client";

import { STATS } from "@/lib/constants/agency";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { MotionSection } from "@/components/shared/motion-wrapper";

export function StatisticsSection() {
  return (
    <MotionSection className="relative bg-ph-blue py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-ph-blue via-ph-blue to-ph-blue/90" aria-hidden="true" />
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-ph-yellow blur-2xl" />
        <div className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-ph-red blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  text={"text" in stat ? stat.text : undefined}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-blue-100 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
