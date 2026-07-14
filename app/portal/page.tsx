import Link from "next/link";
import { ArrowRight, BadgeCheck, Calendar, FileWarning, User } from "lucide-react";
import { PORTAL_COMPLAINTS, PORTAL_MEMBER, MOCK_EVENTS } from "@/lib/mock/data";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortalDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Welcome back, {PORTAL_MEMBER.contactPerson}. Here&apos;s an overview of your account.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Membership",
            value: PORTAL_MEMBER.status,
            href: "/portal/membership",
            icon: BadgeCheck,
          },
          {
            label: "Open Complaints",
            value: String(PORTAL_COMPLAINTS.filter((c) => c.status !== "Resolved").length),
            href: "/portal/complaints",
            icon: FileWarning,
          },
          {
            label: "Upcoming Events",
            value: String(MOCK_EVENTS.length),
            href: "/portal/events",
            icon: Calendar,
          },
          {
            label: "Profile",
            value: "Complete",
            href: "/portal/profile",
            icon: User,
          },
        ].map((stat) => (
          <Link key={stat.href} href={stat.href}>
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ph-blue/10 text-ph-blue">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Membership Status</CardTitle>
            <StatusBadge status={PORTAL_MEMBER.status} />
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="text-slate-500">ID:</span> {PORTAL_MEMBER.membershipId}
            </p>
            <p>
              <span className="text-slate-500">Valid until:</span> {PORTAL_MEMBER.validUntil}
            </p>
            <p>
              <span className="text-slate-500">Accreditation:</span>{" "}
              {PORTAL_MEMBER.accreditationNo}
            </p>
            <Button asChild variant="outline" size="sm" className="mt-2">
              <Link href="/portal/membership">
                View details <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Complaints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {PORTAL_COMPLAINTS.map((c) => (
              <div
                key={c.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
              >
                <div>
                  <p className="font-mono text-xs text-ph-blue">{c.id}</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {c.subject}
                  </p>
                </div>
                <StatusBadge status={c.status} />
              </div>
            ))}
            <Button asChild variant="outline" size="sm">
              <Link href="/portal/complaints">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
