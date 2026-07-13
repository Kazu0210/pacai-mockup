import Link from "next/link";
import { Shield } from "lucide-react";
import { SocialIcon } from "@/components/shared/social-icon";
import { AGENCY } from "@/lib/constants/agency";

const FOOTER_LINKS = {
  quick: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "File Complaint", href: "#complaint" },
    { label: "Send Inquiry", href: "#inquiry" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Citizen Charter", href: "#" },
    { label: "Accessibility Statement", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ph-blue to-ph-blue/80">
                <Shield className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-900 dark:text-white">
                  {AGENCY.name}
                </span>
                <span className="block text-xs text-slate-500">{AGENCY.tagline}</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Committed to transparent governance and responsive public service for every Filipino citizen.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={AGENCY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-600 transition-colors hover:bg-ph-blue hover:text-white dark:bg-slate-800 dark:text-slate-400"
                aria-label="Facebook"
              >
                <SocialIcon platform="facebook" />
              </a>
              <a
                href={AGENCY.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-600 transition-colors hover:bg-ph-blue hover:text-white dark:bg-slate-800 dark:text-slate-400"
                aria-label="Twitter"
              >
                <SocialIcon platform="twitter" />
              </a>
              <a
                href={AGENCY.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-600 transition-colors hover:bg-ph-blue hover:text-white dark:bg-slate-800 dark:text-slate-400"
                aria-label="YouTube"
              >
                <SocialIcon platform="youtube" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-ph-blue dark:text-slate-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Legal & Policies
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-ph-blue dark:text-slate-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Government Partners
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["GovPH", "FOI", "DPO", "8888"].map((logo) => (
                <div
                  key={logo}
                  className="flex h-12 w-20 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-400 dark:border-slate-700 dark:bg-slate-900"
                  aria-label={`${logo} logo`}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {AGENCY.name}. Republic of the Philippines. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-6 rounded-full bg-ph-blue" aria-hidden="true" />
            <span className="h-1.5 w-6 rounded-full bg-ph-red" aria-hidden="true" />
            <span className="h-1.5 w-6 rounded-full bg-ph-yellow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  );
}
