import Link from "next/link";
import { PORTAL_COMPLAINTS } from "@/lib/mock/data";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortalComplaintsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Complaints</h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Cases linked to your member account (mock data).
          </p>
        </div>
        <Button asChild size="sm">
          <Link href="/complaints">File New Complaint</Link>
        </Button>
      </div>

      <div className="space-y-3">
        {PORTAL_COMPLAINTS.map((c) => (
          <Card key={c.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div>
                <p className="font-mono text-xs text-ph-blue">{c.id}</p>
                <CardTitle className="mt-1 text-base">{c.subject}</CardTitle>
              </div>
              <StatusBadge status={c.status} />
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <p className="text-sm text-slate-500">Filed on {c.filedOn}</p>
              <Button asChild variant="outline" size="sm">
                <Link href={`/complaints/track?id=${c.id}`}>Track</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
