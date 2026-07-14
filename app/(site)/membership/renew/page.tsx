"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { MembershipStatus } from "@/lib/mock/data";

const LOOKUP: Record<string, { company: string; status: MembershipStatus; validUntil: string }> = {
  "PACAI-MEM-2024-0012": {
    company: "Pacific Credit Solutions Inc.",
    status: "Active",
    validUntil: "2026-12-31",
  },
  "PACAI-MEM-2023-0088": {
    company: "Isla Collection Services",
    status: "Expired",
    validUntil: "2025-06-30",
  },
};

export default function MembershipRenewPage() {
  const [membershipId, setMembershipId] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<(typeof LOOKUP)[string] | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const lookup = (e: React.FormEvent) => {
    e.preventDefault();
    const match = LOOKUP[membershipId.trim().toUpperCase()];
    if (match) {
      setResult(match);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  const renew = () => {
    setSuccessOpen(true);
    toast.success("Renewal request submitted (mock)");
  };

  return (
    <>
      <PageHeader
        badge="Membership"
        title="Membership Renewal"
        description="Look up your membership details and submit a renewal request. Try PACAI-MEM-2024-0012 or PACAI-MEM-2023-0088."
      />

      <div className="mx-auto max-w-xl px-4 py-10 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Find Your Membership</CardTitle>
            <CardDescription>Enter your membership ID to view status and renew.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={lookup} className="space-y-4">
              <div>
                <Label htmlFor="membershipId">Membership ID *</Label>
                <Input
                  id="membershipId"
                  value={membershipId}
                  onChange={(e) => setMembershipId(e.target.value)}
                  placeholder="PACAI-MEM-2024-0012"
                  className="mt-1.5"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Registered Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.ph"
                  className="mt-1.5"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Check Status
              </Button>
            </form>

            {notFound && (
              <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                No membership found for that ID. Use a mock ID listed above.
              </p>
            )}

            {result && (
              <div className="mt-6 space-y-4 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500">Company</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{result.company}</p>
                  </div>
                  <StatusBadge status={result.status} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Valid Until</p>
                  <p className="font-medium text-slate-800 dark:text-slate-200">{result.validUntil}</p>
                </div>
                <Button
                  type="button"
                  className="w-full"
                  onClick={renew}
                  disabled={result.status === "Active"}
                >
                  {result.status === "Active" ? "Already Active — No Renewal Needed" : "Renew Membership"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <DialogTitle className="text-center">Renewal Submitted</DialogTitle>
            <DialogDescription className="text-center">
              Your renewal request has been recorded (mock). You would normally receive email
              confirmation with payment instructions.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="w-full" onClick={() => setSuccessOpen(false)}>
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
