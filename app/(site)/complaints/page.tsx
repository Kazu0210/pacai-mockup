"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/shared/page-header";
import { FileUploadMock } from "@/components/shared/file-upload-mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
import { COMPLAINT_CATEGORIES } from "@/lib/constants/agency";
import { generateTrackingNumber } from "@/lib/utils";

export default function ComplaintsPage() {
  const [open, setOpen] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [category, setCategory] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    agencyName: "",
    subject: "",
    details: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackingId(generateTrackingNumber());
    setOpen(true);
    toast.success("Complaint submitted (mock)");
  };

  return (
    <>
      <PageHeader
        badge="Complaints"
        title="File a Complaint"
        description="Report concerns about collection practices. All fields are mock-only and stay in your browser."
      />

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
          Already filed?{" "}
          <Link href="/complaints/track" className="font-medium text-ph-blue hover:underline">
            Track your complaint
          </Link>
        </p>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <fieldset className="space-y-4">
                <legend className="text-sm font-semibold text-slate-900 dark:text-white">
                  Complainant Information
                </legend>
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    className="mt-1.5"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="mt-1.5"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="mt-1.5"
                      placeholder="+63 9XX XXX XXXX"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-4">
                <legend className="text-sm font-semibold text-slate-900 dark:text-white">
                  Complaint Details
                </legend>
                <div>
                  <Label htmlFor="agencyName">Agency Name *</Label>
                  <Input
                    id="agencyName"
                    required
                    value={form.agencyName}
                    onChange={(e) => update("agencyName", e.target.value)}
                    className="mt-1.5"
                    placeholder="Name of collection agency"
                  />
                </div>
                <div>
                  <Label>Category *</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {COMPLAINT_CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className="mt-1.5"
                    placeholder="Brief subject of your complaint"
                  />
                </div>
                <div>
                  <Label htmlFor="details">Details *</Label>
                  <Textarea
                    id="details"
                    required
                    value={form.details}
                    onChange={(e) => update("details", e.target.value)}
                    className="mt-1.5"
                    placeholder="Describe what happened, including dates and relevant details..."
                  />
                </div>
              </fieldset>

              <FileUploadMock />

              <Button type="submit" className="w-full" size="lg">
                Submit Complaint
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <DialogTitle className="text-center">Complaint Submitted</DialogTitle>
            <DialogDescription className="text-center">
              Your complaint has been logged (mock). Keep this tracking ID for status updates.
            </DialogDescription>
          </DialogHeader>
          <p className="text-center font-mono text-lg font-semibold text-ph-blue">{trackingId}</p>
          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button asChild className="w-full">
              <Link href={`/complaints/track?id=${trackingId}`}>Track Complaint</Link>
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
