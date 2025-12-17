import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(255),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(255),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  projectType: z.string().min(1, "Please select a project type"),
  areaSize: z.string().optional().refine(
    (val) => !val || !isNaN(parseFloat(val)),
    "Area size must be a valid number"
  ),
  location: z.string().min(2, "Location must be at least 2 characters").max(255),
  notes: z.string().max(5000).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuoteFormData = z.infer<typeof quoteFormSchema>;
