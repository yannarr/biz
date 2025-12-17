export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export interface QuoteFormPayload {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  areaSize?: string;
  location: string;
  notes?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export const SERVICES = [
  "Epoxy Flooring",
  "Countertop Epoxy",
  "Wall Coating",
  "Commercial Flooring",
  "Residential Flooring",
  "Industrial Coating",
  "Other",
] as const;

export const PROJECT_TYPES = [
  "New Installation",
  "Repair & Maintenance",
  "Upgrade",
  "Consultation",
  "Other",
] as const;
