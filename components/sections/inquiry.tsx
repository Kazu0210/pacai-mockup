"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { INQUIRY_CATEGORIES } from "@/lib/constants/agency";
import { inquirySchema, type InquiryFormData } from "@/lib/validations/inquiry";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function InquirySection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Inquiry submitted:", data);
    setIsSubmitted(true);
    toast.success("Inquiry submitted successfully!", {
      description: "We will respond to your inquiry within 3 working days.",
    });
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <MotionSection
      id="inquiry"
      className="bg-slate-50 py-20 dark:bg-slate-900/50 sm:py-28"
      aria-labelledby="inquiry-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Citizen Inquiry"
          title="Send Us Your Inquiry"
          description="Have a question about government services? Our team is ready to assist you."
        />

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/70 sm:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center py-12 text-center" role="status">
                <CheckCircle2 className="h-16 w-16 text-emerald-500" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                  Inquiry Submitted!
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. We will respond within 3 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-fullName">Full Name *</Label>
                    <Input
                      id="inquiry-fullName"
                      {...register("fullName")}
                      error={!!errors.fullName}
                      placeholder="Juan Dela Cruz"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "inquiry-fullName-error" : undefined}
                    />
                    {errors.fullName && (
                      <p id="inquiry-fullName-error" className="text-sm text-ph-red" role="alert">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-email">Email *</Label>
                    <Input
                      id="inquiry-email"
                      type="email"
                      {...register("email")}
                      error={!!errors.email}
                      placeholder="juan@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "inquiry-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="inquiry-email-error" className="text-sm text-ph-red" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-phone">Phone Number *</Label>
                    <Input
                      id="inquiry-phone"
                      type="tel"
                      {...register("phone")}
                      error={!!errors.phone}
                      placeholder="+63 9XX XXX XXXX"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "inquiry-phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="inquiry-phone-error" className="text-sm text-ph-red" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-category">Category *</Label>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger
                            id="inquiry-category"
                            error={!!errors.category}
                            aria-invalid={!!errors.category}
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {INQUIRY_CATEGORIES.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.category && (
                      <p className="text-sm text-ph-red" role="alert">
                        {errors.category.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-subject">Subject *</Label>
                  <Input
                    id="inquiry-subject"
                    {...register("subject")}
                    error={!!errors.subject}
                    placeholder="Brief subject of your inquiry"
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <p className="text-sm text-ph-red" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-message">Message *</Label>
                  <Textarea
                    id="inquiry-message"
                    {...register("message")}
                    error={!!errors.message}
                    placeholder="Please describe your inquiry in detail..."
                    rows={5}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-sm text-ph-red" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg" loading={isSubmitting}>
                  <Send className="h-4 w-4" />
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
