"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/shared/page-header";
import { StepIndicator } from "@/components/shared/step-indicator";
import { FileUploadMock } from "@/components/shared/file-upload-mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { generateTrackingNumber } from "@/lib/utils";

const STEPS = [
  { id: 1, title: "Company" },
  { id: 2, title: "Contact" },
  { id: 3, title: "Documents" },
  { id: 4, title: "Review" },
];

export default function MembershipPage() {
  const [step, setStep] = useState(1);
  const [successOpen, setSuccessOpen] = useState(false);
  const [refNo, setRefNo] = useState("");
  const [form, setForm] = useState({
    companyName: "",
    tradeName: "",
    secNumber: "",
    address: "",
    contactName: "",
    email: "",
    phone: "",
    position: "",
    notes: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = () => {
    setRefNo(generateTrackingNumber().replace("PACAI", "MEM"));
    setSuccessOpen(true);
    toast.success("Membership application submitted (mock)");
  };

  return (
    <>
      <PageHeader
        badge="Membership"
        title="Membership Application"
        description="Apply for PACAI membership through this guided form. This is a frontend mockup — no data is sent to a server."
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <StepIndicator steps={STEPS} current={step} />

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    placeholder="Pacific Credit Solutions Inc."
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="tradeName">Trade Name</Label>
                  <Input
                    id="tradeName"
                    value={form.tradeName}
                    onChange={(e) => update("tradeName", e.target.value)}
                    placeholder="Optional DBA / brand name"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="secNumber">SEC Registration Number *</Label>
                  <Input
                    id="secNumber"
                    value={form.secNumber}
                    onChange={(e) => update("secNumber", e.target.value)}
                    placeholder="CS2024XXXXXX"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Business Address *</Label>
                  <Textarea
                    id="address"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    placeholder="Complete business address"
                    className="mt-1.5"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contactName">Primary Contact *</Label>
                  <Input
                    id="contactName"
                    value={form.contactName}
                    onChange={(e) => update("contactName", e.target.value)}
                    placeholder="Full name"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position / Title *</Label>
                  <Input
                    id="position"
                    value={form.position}
                    onChange={(e) => update("position", e.target.value)}
                    placeholder="Compliance Officer"
                    className="mt-1.5"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="contact@company.ph"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+63 9XX XXX XXXX"
                      className="mt-1.5"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <FileUploadMock label="Required Documents" />
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Any additional information for reviewers"
                    className="mt-1.5"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-3 rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-900/60">
                <p>
                  <span className="font-medium text-slate-500">Company:</span>{" "}
                  {form.companyName || "—"}
                </p>
                <p>
                  <span className="font-medium text-slate-500">SEC No.:</span> {form.secNumber || "—"}
                </p>
                <p>
                  <span className="font-medium text-slate-500">Address:</span> {form.address || "—"}
                </p>
                <p>
                  <span className="font-medium text-slate-500">Contact:</span>{" "}
                  {form.contactName || "—"} ({form.position || "—"})
                </p>
                <p>
                  <span className="font-medium text-slate-500">Email:</span> {form.email || "—"}
                </p>
                <p>
                  <span className="font-medium text-slate-500">Phone:</span> {form.phone || "—"}
                </p>
                <p className="pt-2 text-xs text-slate-500">
                  Review your details, then submit. This mockup does not store or transmit your data.
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-between gap-3">
              <Button type="button" variant="outline" onClick={back} disabled={step === 1}>
                Back
              </Button>
              {step < 4 ? (
                <Button type="button" onClick={next}>
                  Continue
                </Button>
              ) : (
                <Button type="button" onClick={submit}>
                  Submit Application
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <DialogTitle className="text-center">Application Submitted</DialogTitle>
            <DialogDescription className="text-center">
              Your membership application has been received (mock). Reference number:
            </DialogDescription>
          </DialogHeader>
          <p className="text-center font-mono text-lg font-semibold text-ph-blue">{refNo}</p>
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
