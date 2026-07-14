import Link from "next/link";
import { PORTAL_MEMBER } from "@/lib/mock/data";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortalMembershipPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Membership Status</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Current accreditation and validity details.
        </p>
      </div>

      <Card className="max-w-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">{PORTAL_MEMBER.companyName}</CardTitle>
          <StatusBadge status={PORTAL_MEMBER.status} />
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-slate-500">Membership ID</p>
              <p className="font-mono font-medium">{PORTAL_MEMBER.membershipId}</p>
            </div>
            <div>
              <p className="text-slate-500">Accreditation No.</p>
              <p className="font-mono font-medium">{PORTAL_MEMBER.accreditationNo}</p>
            </div>
            <div>
              <p className="text-slate-500">Valid From</p>
              <p className="font-medium">{PORTAL_MEMBER.validFrom}</p>
            </div>
            <div>
              <p className="text-slate-500">Valid Until</p>
              <p className="font-medium">{PORTAL_MEMBER.validUntil}</p>
            </div>
          </div>
          <Button asChild className="mt-2">
            <Link href="/membership/renew">Renew Membership</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
