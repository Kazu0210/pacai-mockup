import { cn } from "@/lib/utils";

const VARIANTS: Record<string, string> = {
  Accredited: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Active: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Resolved: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  "Not Accredited": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  Expired: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  Pending: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  Submitted: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  "Under Review": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Investigation: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  Suspended: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        VARIANTS[status] ?? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
        className
      )}
    >
      {status}
    </span>
  );
}
