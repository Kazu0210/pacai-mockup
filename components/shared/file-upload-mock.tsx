"use client";

import { useRef, useState } from "react";
import { FileUp, Trash2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatFileSize } from "@/lib/utils";

interface MockFile {
  name: string;
  size: number;
}

interface FileUploadMockProps {
  label?: string;
  hint?: string;
  className?: string;
}

export function FileUploadMock({
  label = "Supporting Documents",
  hint = "PDF, DOC, DOCX, PNG, or JPG — max 10 MB (mock upload only)",
  className,
}: FileUploadMockProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<MockFile[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []).map((f) => ({
      name: f.name,
      size: f.size,
    }));
    setFiles((prev) => [...prev, ...selected].slice(0, 5));
    e.target.value = "";
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div>
        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{label}</p>
        <p className="mt-0.5 text-xs text-slate-500">{hint}</p>
      </div>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 transition-colors hover:border-ph-blue/50 hover:bg-ph-blue/5 dark:border-slate-700 dark:bg-slate-900/50"
      >
        <FileUp className="h-8 w-8 text-ph-blue" aria-hidden="true" />
        <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Click to select files
        </span>
        <span className="mt-1 text-xs text-slate-500">UI mock — files stay in the browser only</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
        className="sr-only"
        onChange={handleChange}
        aria-label={label}
      />

      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((file) => (
            <li
              key={file.name + file.size}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex min-w-0 items-center gap-2">
                <FileText className="h-4 w-4 shrink-0 text-ph-blue" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                    {file.name}
                  </p>
                  <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0"
                onClick={() => setFiles((prev) => prev.filter((f) => f.name !== file.name))}
                aria-label={`Remove ${file.name}`}
              >
                <Trash2 className="h-4 w-4 text-slate-500" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
