import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
}

interface StepIndicatorProps {
  steps: Step[];
  current: number;
}

export function StepIndicator({ steps, current }: StepIndicatorProps) {
  return (
    <nav aria-label="Form progress" className="mb-8">
      <ol className="flex items-center justify-between gap-2">
        {steps.map((step, index) => {
          const done = current > step.id;
          const active = current === step.id;
          return (
            <li key={step.id} className="flex flex-1 items-center">
              <div className="flex w-full flex-col items-center">
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                    done && "bg-ph-blue text-white",
                    active && "bg-ph-blue text-white ring-4 ring-ph-blue/20",
                    !done && !active && "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                  )}
                >
                  {done ? <Check className="h-4 w-4" aria-hidden="true" /> : step.id}
                </div>
                <span
                  className={cn(
                    "mt-2 hidden text-center text-xs font-medium sm:block",
                    active ? "text-ph-blue" : "text-slate-500"
                  )}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mx-1 hidden h-0.5 flex-1 sm:block",
                    done ? "bg-ph-blue" : "bg-slate-200 dark:bg-slate-700"
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
