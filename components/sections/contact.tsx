"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SocialIcon } from "@/components/shared/social-icon";
import { AGENCY } from "@/lib/constants/agency";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection } from "@/components/shared/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Office Address", value: AGENCY.address },
  { icon: Phone, label: "Telephone", value: AGENCY.phone },
  { icon: Mail, label: "Email", value: AGENCY.email },
  { icon: Clock, label: "Office Hours", value: AGENCY.officeHours },
] as const;

export function ContactSection() {
  return (
    <MotionSection
      id="contact"
      className="bg-slate-50 py-20 dark:bg-slate-900/50 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact Us"
          title="Get in Touch"
          description="Visit our office, call our hotline, or connect with us on social media."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_ITEMS.map((item) => (
              <Card key={item.label}>
                <CardContent className="p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ph-blue/10">
                    <item.icon className="h-5 w-5 text-ph-blue" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.value}
                  </p>
                </CardContent>
              </Card>
            ))}

            <Card className="sm:col-span-2">
              <CardContent className="p-5">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Follow Us
                </h3>
                <div className="mt-3 flex gap-3">
                  <a
                    href={AGENCY.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-ph-blue text-white transition-colors hover:bg-ph-blue/90"
                    aria-label="Facebook"
                  >
                    <SocialIcon platform="facebook" className="h-5 w-5" />
                  </a>
                  <a
                    href={AGENCY.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-white transition-colors hover:bg-slate-700"
                    aria-label="Twitter"
                  >
                    <SocialIcon platform="twitter" className="h-5 w-5" />
                  </a>
                  <a
                    href={AGENCY.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-ph-red text-white transition-colors hover:bg-ph-red/90"
                    aria-label="YouTube"
                  >
                    <SocialIcon platform="youtube" className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800">
            <div
              className="flex h-full min-h-[320px] items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700"
              role="img"
              aria-label="Map showing PACAI office location in Quezon City, Metro Manila"
            >
              <div className="text-center p-8">
                <MapPin className="mx-auto h-12 w-12 text-ph-blue" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-200">
                  PACAI Office
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Commonwealth Avenue, Quezon City
                </p>
                <p className="mt-4 text-xs text-slate-400">
                  Google Maps embed placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
