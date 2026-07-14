"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Circle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MOCK_TRACKING_CASES, type MockTrackingCase } from "@/lib/mock/data";

function TrackForm() {
  const searchParams = useSearchParams();
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<MockTrackingCase | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setTrackingId(id);
      const match = MOCK_TRACKING_CASES[id];
      if (match) {
        setResult(match);
        setError("");
      }
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const key = trackingId.trim().toUpperCase();
    const match = MOCK_TRACKING_CASES[key] ?? MOCK_TRACKING_CASES[trackingId.trim()];
    if (match) {
      setResult(match);
      setError("");
    } else {
      setResult(null);
      setError(
        "No case found. Try mock IDs: PACAI-2026-000123 or PACAI-2026-000456"
      );
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Enter Tracking ID</CardTitle>
          <CardDescription>
            Demo cases: PACAI-2026-000123 (under review) or PACAI-2026-000456 (resolved)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <Label htmlFor="trackingId" className="sr-only">
                Tracking ID
              </Label>
              <Input
                id="trackingId"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="PACAI-2026-000123"
                required
              />
            </div>
            <Button type="submit">Track</Button>
          </form>

          {error && (
            <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
              {error}
            </p>
          )}

          {result && (
            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-sm font-semibold text-ph-blue">{result.trackingId}</p>
                  <StatusBadge status={result.currentStatus} />
                </div>
                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-slate-500">Complainant</dt>
                    <dd className="font-medium">{result.complainant}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Agency</dt>
                    <dd className="font-medium">{result.agency}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-slate-500">Subject</dt>
                    <dd className="font-medium">{result.subject}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
                  Case Timeline
                </h3>
                <ol className="relative space-y-0 border-l-2 border-slate-200 pl-6 dark:border-slate-700">
                  {result.timeline.map((step) => (
                    <li key={step.label} className="pb-8 last:pb-0">
                      <span
                        className={cn(
                          "absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full",
                          step.completed ? "bg-ph-blue text-white" : "bg-slate-200 dark:bg-slate-700"
                        )}
                      >
                        {step.completed ? (
                          <Check className="h-2.5 w-2.5" aria-hidden="true" />
                        ) : (
                          <Circle className="h-2 w-2 text-slate-400" aria-hidden="true" />
                        )}
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <p
                          className={cn(
                            "font-semibold",
                            step.completed
                              ? "text-slate-900 dark:text-white"
                              : "text-slate-400"
                          )}
                        >
                          {step.label}
                        </p>
                        {step.date !== "—" && (
                          <span className="text-xs text-slate-500">{step.date}</span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function ComplaintTrackPage() {
  return (
    <>
      <PageHeader
        badge="Complaints"
        title="Track Your Complaint"
        description="Enter your tracking ID to view case status and timeline."
      />
      <Suspense fallback={<div className="mx-auto max-w-2xl px-4 py-10">Loading…</div>}>
        <TrackForm />
      </Suspense>
    </>
  );
}
