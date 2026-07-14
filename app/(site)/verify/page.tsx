"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_AGENCIES } from "@/lib/mock/data";

export default function VerifyPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK_AGENCIES;
    return MOCK_AGENCIES.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.accreditationNo.toLowerCase().includes(q) ||
        a.city.toLowerCase().includes(q) ||
        a.region.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <PageHeader
        badge="Verification"
        title="Verify Accredited Agencies"
        description="Search the PACAI registry to confirm whether a collection agency is accredited."
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative mb-8 max-w-xl">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by agency name, accreditation number, or city…"
            className="pl-10"
            aria-label="Search agencies"
          />
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3 font-semibold">Agency</th>
                <th className="px-4 py-3 font-semibold">Accreditation No.</th>
                <th className="px-4 py-3 font-semibold">Location</th>
                <th className="px-4 py-3 font-semibold">Valid Until</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-950">
              {filtered.map((agency) => (
                <tr key={agency.id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                    {agency.name}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-400">
                    {agency.accreditationNo}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {agency.city}, {agency.region}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{agency.validUntil}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={agency.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="bg-white px-4 py-8 text-center text-sm text-slate-500 dark:bg-slate-950">
              No agencies match your search.
            </p>
          )}
        </div>

        {/* Mobile cards */}
        <div className="grid gap-4 md:hidden">
          {filtered.map((agency) => (
            <Card key={agency.id}>
              <CardContent className="space-y-2 p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{agency.name}</h3>
                  <StatusBadge status={agency.status} />
                </div>
                <p className="font-mono text-xs text-slate-500">{agency.accreditationNo}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {agency.city}, {agency.region}
                </p>
                <p className="text-sm text-slate-500">Valid until: {agency.validUntil}</p>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-slate-500">No agencies match your search.</p>
          )}
        </div>
      </div>
    </>
  );
}
