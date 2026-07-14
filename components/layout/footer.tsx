import Link from "next/link";
import { SocialIcon } from "@/components/shared/social-icon";
import { AGENCY, FOOTER_LINKS } from "@/lib/constants/agency";

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
              <div className="flex h-10 items-center justify-center rounded-xl bg-gradient-to-br from-ph-blue to-ph-blue/80 px-2.5">
                <span className="text-sm font-bold tracking-wide text-white">{AGENCY.shortName}</span>
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-900 dark:text-white">
                  {AGENCY.name}
                </span>
                <span className="block text-xs text-slate-500">{AGENCY.tagline}</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {AGENCY.fullName}. Advancing ethical standards and professionalism among collection
              agencies nationwide.
            </p>
            <div className="mt-4 flex gap-3">
              {(["facebook", "twitter", "youtube"] as const).map((platform) => (
                <a
                  key={platform}
                  href={AGENCY[platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-600 transition-colors hover:bg-ph-blue hover:text-white dark:bg-slate-800 dark:text-slate-400"
                  aria-label={platform}
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Platform</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
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
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Legal & Policies</h3>
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
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>{AGENCY.address}</li>
              <li>{AGENCY.phone}</li>
              <li>{AGENCY.email}</li>
              <li>{AGENCY.officeHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {AGENCY.name}. {AGENCY.fullName}. All rights reserved.
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
