"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AGENCY, NAV_LINKS } from "@/lib/constants/agency";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const solid = !isHome || isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/95 py-2 shadow-md backdrop-blur-md dark:bg-slate-950/95"
          : "bg-transparent py-4"
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ph-blue focus-visible:ring-offset-2"
          aria-label={`${AGENCY.fullName} - Home`}
        >
          <div className="flex h-10 items-center justify-center rounded-xl bg-gradient-to-br from-ph-blue to-ph-blue/80 px-2.5 shadow-md">
            <span className="text-sm font-bold tracking-wide text-white">{AGENCY.shortName}</span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-bold leading-tight text-slate-900 dark:text-white">
              {AGENCY.name}
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{AGENCY.tagline}</span>
          </div>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ph-blue",
                  active
                    ? "bg-ph-blue/10 text-ph-blue"
                    : "text-slate-600 hover:text-ph-blue dark:text-slate-300 dark:hover:text-ph-blue"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex" size="sm">
            <Link href="/complaints">File Complaint</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[60px] z-40 bg-white/95 backdrop-blur-md dark:bg-slate-950/95 lg:hidden"
        >
          <div className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-ph-blue dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link href="/complaints" onClick={() => setIsMobileOpen(false)}>
                File Complaint
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
