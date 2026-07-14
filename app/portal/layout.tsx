"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  FileWarning,
  LayoutDashboard,
  LogOut,
  Menu,
  User,
  BadgeCheck,
  X,
} from "lucide-react";
import { useState } from "react";
import { AGENCY } from "@/lib/constants/agency";
import { PORTAL_MEMBER } from "@/lib/mock/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/status-badge";

const PORTAL_NAV = [
  { label: "Dashboard", href: "/portal", icon: LayoutDashboard },
  { label: "Profile", href: "/portal/profile", icon: User },
  { label: "Membership", href: "/portal/membership", icon: BadgeCheck },
  { label: "Complaints", href: "/portal/complaints", icon: FileWarning },
  { label: "Events", href: "/portal/events", icon: Calendar },
] as const;

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Portal navigation">
      {PORTAL_NAV.map((item) => {
        const active =
          item.href === "/portal" ? pathname === "/portal" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-ph-blue text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="flex min-h-full flex-col bg-slate-50 dark:bg-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
        <div className="flex h-14 items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle sidebar"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <span className="rounded-lg bg-ph-blue px-2 py-1 text-xs font-bold text-white">
                {AGENCY.shortName}
              </span>
              <span className="hidden text-sm font-semibold text-slate-900 dark:text-white sm:inline">
                Member Portal
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={PORTAL_MEMBER.status} />
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Exit</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1">
        <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:flex lg:flex-col">
          <div className="border-b border-slate-200 p-4 dark:border-slate-800">
            <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
              {PORTAL_MEMBER.companyName}
            </p>
            <p className="truncate text-xs text-slate-500">{PORTAL_MEMBER.contactPerson}</p>
          </div>
          {nav}
        </aside>

        {open && (
          <div className="fixed inset-0 top-14 z-30 flex lg:hidden">
            <div className="w-64 border-r border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <div className="border-b border-slate-200 p-4 dark:border-slate-800">
                <p className="truncate text-sm font-semibold">{PORTAL_MEMBER.companyName}</p>
                <p className="truncate text-xs text-slate-500">{PORTAL_MEMBER.contactPerson}</p>
              </div>
              {nav}
            </div>
            <button
              type="button"
              className="flex-1 bg-black/40"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
          </div>
        )}

        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
