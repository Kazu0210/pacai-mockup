"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AGENCY } from "@/lib/constants/agency";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 pt-28 pb-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-ph-blue/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-ph-yellow/15 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-48 w-48 rounded-full bg-ph-red/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ph-blue/20 bg-ph-blue/5 px-4 py-1.5 text-sm font-medium text-ph-blue dark:bg-ph-blue/10">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Official PACAI Portal
            </span>

            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
            >
              Advancing Ethical Collection Practices Across the{" "}
              <span className="bg-gradient-to-r from-ph-blue via-ph-blue to-ph-red bg-clip-text text-transparent">
                Philippines.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {AGENCY.description} File complaints, send inquiries, and access association services — all in one trusted digital platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="#complaint" className="inline-flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  File a Complaint
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#inquiry" className="inline-flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Send an Inquiry
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
              Hotline: <strong className="text-slate-700 dark:text-slate-300">{AGENCY.hotline}</strong> · Available nationwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            aria-hidden="true"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative aspect-square max-h-[480px] w-full">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-4 rounded-3xl bg-gradient-to-br from-ph-blue/90 to-ph-blue shadow-2xl"
      >
        <div className="flex h-full flex-col items-center justify-center p-8 text-white">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <svg viewBox="0 0 80 80" className="h-12 w-12" fill="none" aria-hidden="true">
              <circle cx="40" cy="40" r="36" stroke="white" strokeWidth="2" opacity="0.3" />
              <path d="M40 16 L56 32 L40 48 L24 32 Z" fill="white" opacity="0.9" />
              <circle cx="40" cy="40" r="8" fill="#FCD116" />
            </svg>
          </div>
          <p className="text-center text-xl font-bold">{AGENCY.shortName}</p>
          <p className="mt-2 text-center text-sm text-white/80">
            Elevating industry standards
          </p>

          <div className="mt-8 grid w-full grid-cols-2 gap-3">
            {["Complaints", "Inquiries", "Tracking", "Reports"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/15 px-3 py-2.5 text-center text-xs font-medium backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-2 -right-2 rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-800"
      >
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">98% Resolved</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-2 -left-2 rounded-2xl bg-ph-yellow px-4 py-3 shadow-xl"
      >
        <span className="text-xs font-bold text-slate-900">50,000+ Cases Handled</span>
      </motion.div>

      <div className="absolute top-1/2 -right-6 h-12 w-12 rounded-full bg-ph-red/20 blur-sm" />
      <div className="absolute bottom-1/4 -left-4 h-8 w-8 rounded-full bg-ph-yellow/30 blur-sm" />
    </div>
  );
}
