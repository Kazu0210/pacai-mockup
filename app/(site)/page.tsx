"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ClipboardList,
  FileWarning,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";
import { AGENCY } from "@/lib/constants/agency";
import { PLATFORM_SERVICES } from "@/lib/mock/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";

const ICONS = {
  ClipboardList,
  RefreshCw,
  FileWarning,
  Search,
  ShieldCheck,
  Calendar,
} as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 pb-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:pb-24 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-ph-blue/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-ph-yellow/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ph-blue/20 bg-ph-blue/5 px-4 py-1.5 text-sm font-medium text-ph-blue">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Integrated Digital Platform
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
                Championing{" "}
                <span className="bg-gradient-to-r from-ph-blue to-ph-red bg-clip-text text-transparent">
                  Ethical Debt Collection
                </span>{" "}
                in the Philippines
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {AGENCY.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/membership">
                    Apply Membership
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/complaints">File Complaint</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/verify">
                    <ShieldCheck className="h-4 w-4" />
                    Verify Agency
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Platform Services"
            title="Everything you need in one place"
            description="Membership, complaints, verification, and events — a unified digital system for PACAI members and the public."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_SERVICES.map((service, index) => {
              const Icon = ICONS[service.icon];
              return (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link href={service.href} className="block h-full">
                    <Card className="group h-full transition-all duration-300 hover:border-ph-blue/30 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col p-6">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ph-blue text-white shadow-md transition-transform group-hover:scale-105">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {service.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ph-blue">
                          Open
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-ph-blue to-ph-blue/90 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Already a PACAI member?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            Access your profile, membership status, complaints, and registered events in the member
            portal.
          </p>
          <Button asChild variant="yellow" size="lg" className="mt-6">
            <Link href="/portal">Enter Member Portal</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
