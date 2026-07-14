import { z } from "zod";
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from "@/lib/constants/agency";

const fileSchema = z
  .instanceof(File)
  .refine(
    (file) => ALLOWED_FILE_TYPES.includes(file.type as (typeof ALLOWED_FILE_TYPES)[number]),
    "File type not allowed. Use PDF, DOC, DOCX, PNG, JPG, or JPEG"
  )
  .refine(
    (file) => file.size <= MAX_FILE_SIZE,
    "File size must not exceed 10 MB"
  );

export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  contactNumber: z
    .string()
    .min(10, "Please enter a valid contact number")
    .max(15, "Contact number is too long")
    .regex(/^[\d\s+\-()]+$/, "Please enter a valid contact number"),
  address: z
    .string()
    .min(10, "Please enter your complete address")
    .max(300, "Address must not exceed 300 characters"),
});

export const complaintDetailsSchema = z.object({
  category: z.string().min(1, "Please select a complaint category"),
  officeConcerned: z.string().min(1, "Please select the agency or firm concerned"),
  complaintTitle: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(150, "Title must not exceed 150 characters"),
  complaintDescription: z
    .string()
    .min(50, "Please provide a detailed description (at least 50 characters)")
    .max(5000, "Description must not exceed 5000 characters"),
});

export const evidenceSchema = z.object({
  files: z.array(fileSchema).max(5, "Maximum 5 files allowed").optional(),
});

export const complaintSchema = personalInfoSchema
  .merge(complaintDetailsSchema)
  .merge(evidenceSchema);

export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
export type ComplaintDetailsData = z.infer<typeof complaintDetailsSchema>;
export type EvidenceData = z.infer<typeof evidenceSchema>;
export type ComplaintFormData = z.infer<typeof complaintSchema>;
