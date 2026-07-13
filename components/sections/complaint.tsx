"use client";

import { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  FileText,
  Upload,
  X,
} from "lucide-react";
import { toast } from "sonner";
import {
  ALLOWED_FILE_EXTENSIONS,
  COMPLAINT_CATEGORIES,
  GOVERNMENT_OFFICES,
  MAX_FILE_SIZE,
} from "@/lib/constants/agency";
import { complaintSchema, type ComplaintFormData } from "@/lib/validations/complaint";
import { ALLOWED_FILE_TYPES } from "@/lib/constants/agency";
import { cn, formatFileSize, generateTrackingNumber } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const STEPS = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Complaint Details" },
  { id: 3, title: "Evidence" },
  { id: 4, title: "Review" },
] as const;

export function ComplaintSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ComplaintFormData>({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      address: "",
      category: "",
      officeConcerned: "",
      complaintTitle: "",
      complaintDescription: "",
      files: [],
    },
    mode: "onChange",
  });

  const { register, control, handleSubmit, trigger, getValues, formState: { errors }, reset } = form;

  const validateStep = async (step: number): Promise<boolean> => {
    switch (step) {
      case 1:
        return trigger(["fullName", "email", "contactNumber", "address"]);
      case 2:
        return trigger(["category", "officeConcerned", "complaintTitle", "complaintDescription"]);
      case 3:
        return true;
      default:
        return true;
    }
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 4) {
      setCurrentStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleFiles = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const validFiles: File[] = [];
    const rejected: string[] = [];

    fileArray.forEach((file) => {
      if (uploadedFiles.length + validFiles.length >= 5) {
        rejected.push(`${file.name} (max 5 files)`);
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        rejected.push(`${file.name} (exceeds 10 MB)`);
        return;
      }
      if (!ALLOWED_FILE_TYPES.includes(file.type as (typeof ALLOWED_FILE_TYPES)[number])) {
        rejected.push(`${file.name} (invalid type)`);
        return;
      }
      validFiles.push(file);
    });

    if (rejected.length > 0) {
      toast.error("Some files were rejected", { description: rejected.join(", ") });
    }

    if (validFiles.length > 0) {
      setUploadedFiles((prev) => {
        const updated = [...prev, ...validFiles].slice(0, 5);
        form.setValue("files", updated);
        return updated;
      });
    }
  }, [uploadedFiles.length, form]);

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      form.setValue("files", updated);
      return updated;
    });
  };

  const onSubmit = async (data: ComplaintFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const tracking = generateTrackingNumber();
    setTrackingNumber(tracking);
    console.log("Complaint submitted:", { ...data, trackingNumber: tracking });
    setIsSubmitting(false);
    setShowSuccessDialog(true);
    toast.success("Complaint filed successfully!");
    reset();
    setUploadedFiles([]);
    setCurrentStep(1);
  };

  const copyTrackingNumber = () => {
    navigator.clipboard.writeText(trackingNumber);
    toast.success("Tracking number copied!");
  };

  const values = getValues();

  return (
    <MotionSection
      id="complaint"
      className="py-20 sm:py-28"
      aria-labelledby="complaint-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="File a Complaint"
          title="Submit Your Complaint Online"
          description="Report concerns about government services securely. All submissions are confidential and protected under the Data Privacy Act."
        />

        <div className="mx-auto max-w-3xl">
          {/* Step Indicator */}
          <nav aria-label="Complaint form progress" className="mb-8">
            <ol className="flex items-center justify-between">
              {STEPS.map((step, index) => (
                <li key={step.id} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors",
                        currentStep > step.id
                          ? "bg-emerald-500 text-white"
                          : currentStep === step.id
                          ? "bg-ph-blue text-white"
                          : "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                      )}
                      aria-current={currentStep === step.id ? "step" : undefined}
                    >
                      {currentStep > step.id ? (
                        <Check className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <span className="mt-2 hidden text-xs font-medium text-slate-600 dark:text-slate-400 sm:block">
                      {step.title}
                    </span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={cn(
                        "mx-2 h-0.5 flex-1",
                        currentStep > step.id ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-700"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-5" role="group" aria-label="Personal Information">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Step 1: Personal Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="complaint-fullName">Full Name *</Label>
                    <Input
                      id="complaint-fullName"
                      {...register("fullName")}
                      error={!!errors.fullName}
                      placeholder="Juan Dela Cruz"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-ph-red" role="alert">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="complaint-email">Email *</Label>
                      <Input
                        id="complaint-email"
                        type="email"
                        {...register("email")}
                        error={!!errors.email}
                        placeholder="juan@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-ph-red" role="alert">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="complaint-contact">Contact Number *</Label>
                      <Input
                        id="complaint-contact"
                        type="tel"
                        {...register("contactNumber")}
                        error={!!errors.contactNumber}
                        placeholder="+63 9XX XXX XXXX"
                      />
                      {errors.contactNumber && (
                        <p className="text-sm text-ph-red" role="alert">{errors.contactNumber.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="complaint-address">Address *</Label>
                    <Textarea
                      id="complaint-address"
                      {...register("address")}
                      error={!!errors.address}
                      placeholder="Complete address including city and province"
                      rows={3}
                    />
                    {errors.address && (
                      <p className="text-sm text-ph-red" role="alert">{errors.address.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Complaint Details */}
              {currentStep === 2 && (
                <div className="space-y-5" role="group" aria-label="Complaint Details">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Step 2: Complaint Details
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="complaint-category">Category *</Label>
                      <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger id="complaint-category" error={!!errors.category}>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {COMPLAINT_CATEGORIES.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.category && (
                        <p className="text-sm text-ph-red" role="alert">{errors.category.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="complaint-office">Office Concerned *</Label>
                      <Controller
                        name="officeConcerned"
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger id="complaint-office" error={!!errors.officeConcerned}>
                              <SelectValue placeholder="Select office" />
                            </SelectTrigger>
                            <SelectContent>
                              {GOVERNMENT_OFFICES.map((office) => (
                                <SelectItem key={office} value={office}>{office}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.officeConcerned && (
                        <p className="text-sm text-ph-red" role="alert">{errors.officeConcerned.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="complaint-title">Complaint Title *</Label>
                    <Input
                      id="complaint-title"
                      {...register("complaintTitle")}
                      error={!!errors.complaintTitle}
                      placeholder="Brief title describing your complaint"
                    />
                    {errors.complaintTitle && (
                      <p className="text-sm text-ph-red" role="alert">{errors.complaintTitle.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="complaint-description">Complaint Description *</Label>
                    <Textarea
                      id="complaint-description"
                      {...register("complaintDescription")}
                      error={!!errors.complaintDescription}
                      placeholder="Provide a detailed description of your complaint, including dates, names, and specific incidents..."
                      rows={6}
                    />
                    {errors.complaintDescription && (
                      <p className="text-sm text-ph-red" role="alert">{errors.complaintDescription.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Evidence Upload */}
              {currentStep === 3 && (
                <div className="space-y-5" role="group" aria-label="Evidence Upload">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Step 3: Evidence Upload
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Attach supporting documents (optional). Allowed: {ALLOWED_FILE_EXTENSIONS}. Max 10 MB per file, up to 5 files.
                  </p>

                  <div
                    className={cn(
                      "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-colors",
                      isDragOver
                        ? "border-ph-blue bg-ph-blue/5"
                        : "border-slate-300 dark:border-slate-600"
                    )}
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragOver(false);
                      handleFiles(e.dataTransfer.files);
                    }}
                  >
                    <Upload className="h-10 w-10 text-slate-400" aria-hidden="true" />
                    <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                      Drag and drop files here, or
                    </p>
                    <label className="mt-2">
                      <span className="cursor-pointer text-sm font-medium text-ph-blue hover:underline">
                        browse to upload
                      </span>
                      <input
                        type="file"
                        className="sr-only"
                        multiple
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        onChange={(e) => e.target.files && handleFiles(e.target.files)}
                        aria-label="Upload evidence files"
                      />
                    </label>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <ul className="space-y-2" aria-label="Uploaded files">
                      {uploadedFiles.map((file, index) => (
                        <li
                          key={`${file.name}-${index}`}
                          className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <FileText className="h-5 w-5 shrink-0 text-ph-blue" aria-hidden="true" />
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                                {file.name}
                              </p>
                              <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFile(index)}
                            aria-label={`Remove ${file.name}`}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div className="space-y-5" role="group" aria-label="Review and Submit">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Step 4: Review & Submit
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Please review your information before submitting.
                  </p>

                  <div className="space-y-4 rounded-xl bg-slate-50 p-5 dark:bg-slate-800/50">
                    <ReviewGroup title="Personal Information">
                      <ReviewItem label="Full Name" value={values.fullName} />
                      <ReviewItem label="Email" value={values.email} />
                      <ReviewItem label="Contact" value={values.contactNumber} />
                      <ReviewItem label="Address" value={values.address} />
                    </ReviewGroup>

                    <ReviewGroup title="Complaint Details">
                      <ReviewItem label="Category" value={values.category} />
                      <ReviewItem label="Office" value={values.officeConcerned} />
                      <ReviewItem label="Title" value={values.complaintTitle} />
                      <ReviewItem label="Description" value={values.complaintDescription} />
                    </ReviewGroup>

                    <ReviewGroup title="Evidence">
                      {uploadedFiles.length > 0 ? (
                        uploadedFiles.map((f, i) => (
                          <ReviewItem key={i} label={`File ${i + 1}`} value={f.name} />
                        ))
                      ) : (
                        <p className="text-sm text-slate-500">No files attached</p>
                      )}
                    </ReviewGroup>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit" loading={isSubmitting}>
                    Submit Complaint
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Complaint Submitted Successfully!</DialogTitle>
            <DialogDescription className="text-center">
              Your complaint has been received and is now being processed. Please save your tracking number.
            </DialogDescription>
          </DialogHeader>

          <div className="my-4 rounded-xl bg-ph-blue/5 p-6 text-center dark:bg-ph-blue/10">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Tracking Number</p>
            <p className="mt-2 text-2xl font-bold tracking-wider text-ph-blue">{trackingNumber}</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3"
              onClick={copyTrackingNumber}
            >
              <Copy className="h-4 w-4" />
              Copy Number
            </Button>
          </div>

          <Badge variant="success" className="mx-auto w-fit">
            Confirmation sent to your email
          </Badge>

          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)} className="w-full">
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MotionSection>
  );
}

function ReviewGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold text-ph-blue">{title}</h4>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
      <span className="shrink-0 text-xs font-medium text-slate-500 sm:w-28">{label}</span>
      <span className="text-sm text-slate-900 dark:text-slate-200">{value || "—"}</span>
    </div>
  );
}
