import { cn } from "@/lib/utils";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ badge, title, description, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {badge && (
          <span className="mb-3 inline-block rounded-full bg-ph-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ph-blue">
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
