"use client";

import { submitConsultation } from "@/lib/api";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  fullName: string;
  email: string;
  organizationName: string;
  serviceName: string;
  projectDescription: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  organizationName?: string;
  serviceName?: string;
  projectDescription?: string;
}

const inputClass = (error?: string) =>
  `w-full px-4 py-3 h-12 border rounded bg-neutral-100 font-dm-sans text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
    error
      ? "border-semantic-error-500 bg-red-50 focus:ring-semantic-error-500"
      : "border-neutral-300 focus:ring-primary-700"
  }`;

export function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    organizationName: "",
    serviceName: "",
    projectDescription: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const validationErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!formData.organizationName.trim()) {
      validationErrors.organizationName = "Organization name is required.";
    }

    if (!formData.serviceName) {
      validationErrors.serviceName = "Please select a service.";
    }

    if (!formData.projectDescription.trim()) {
      validationErrors.projectDescription = "Project description is required.";
    } else if (formData.projectDescription.trim().length < 20) {
      validationErrors.projectDescription =
        "Please provide at least 20 characters.";
    }

    return validationErrors;
  };

  const clearFieldError = (name: keyof FormErrors) => {
    if (!errors[name]) {
      return;
    }

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    clearFieldError(fieldName);
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceName: value,
    }));
    clearFieldError("serviceName");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setApiError(null);

    try {
      await submitConsultation(formData);
      setSubmitted(true);
      setErrors({});
      setFormData({
        fullName: "",
        email: "",
        organizationName: "",
        serviceName: "",
        projectDescription: "",
      });
    } catch {
      setApiError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-semantic-success-500">
          <svg
            aria-hidden="true"
            className="size-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-fraunces text-2xl font-semibold text-text-header">
          Request Sent
        </h3>
        <p className="max-w-sm font-dm-sans text-[15px] text-text-body">
          Thank you for reaching out. We&apos;ll review your consultancy request
          and get back to you within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 font-dm-sans text-[15px] font-semibold text-primary-500 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="consultation-full-name"
              className="mb-3 block font-dm-sans text-[10px] font-bold uppercase tracking-wider text-text-label"
            >
              FULL NAME
            </label>
            <Input
              id="consultation-full-name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Sarah Chen"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? "consultation-full-name-error" : undefined
              }
              className={inputClass(errors.fullName)}
            />
            {errors.fullName ? (
              <p
                id="consultation-full-name-error"
                className="mt-1.5 font-dm-sans text-xs text-semantic-error-500"
              >
                {errors.fullName}
              </p>
            ) : null}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="consultation-email"
              className="mb-3 block font-dm-sans text-[10px] font-bold uppercase tracking-wider text-text-label"
            >
              EMAIL ADDRESS
            </label>
            <Input
              id="consultation-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "consultation-email-error" : undefined
              }
              className={inputClass(errors.email)}
            />
            {errors.email ? (
              <p
                id="consultation-email-error"
                className="mt-1.5 font-dm-sans text-xs text-semantic-error-500"
              >
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        {/* Organization Name */}
        <div>
          <label
            htmlFor="consultation-organization"
            className="mb-3 block font-dm-sans text-[10px] font-bold uppercase tracking-wider text-text-label"
          >
            ORGANIZATION NAME
          </label>
          <Input
            id="consultation-organization"
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Kainos Edge"
            aria-invalid={Boolean(errors.organizationName)}
            aria-describedby={
              errors.organizationName
                ? "consultation-organization-error"
                : undefined
            }
            className={inputClass(errors.organizationName)}
          />
          {errors.organizationName ? (
            <p
              id="consultation-organization-error"
              className="mt-1.5 font-dm-sans text-xs text-semantic-error-500"
            >
              {errors.organizationName}
            </p>
          ) : null}
        </div>

        {/* Service Name */}
        <div>
          <label className="mb-3 block font-dm-sans text-[10px] font-bold uppercase tracking-wider text-text-label">
            SERVICE NAME
          </label>
          <Select
            value={formData.serviceName}
            onValueChange={handleServiceChange}
          >
            <SelectTrigger
              aria-invalid={Boolean(errors.serviceName)}
              aria-describedby={
                errors.serviceName ? "consultation-service-error" : undefined
              }
              className={`w-full rounded px-4 py-3 font-dm-sans text-[15px] shadow-none transition-colors h-auto! ${
                errors.serviceName
                  ? "border-semantic-error-500 bg-red-50 text-neutral-500 focus:ring-semantic-error-500"
                  : "border border-neutral-300 bg-neutral-100 text-neutral-500 focus:ring-primary-700"
              }`}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="policy-analysis">
                Policy Analysis & Advisory
              </SelectItem>
              <SelectItem value="data-solutions">
                Custom Data Solutions
              </SelectItem>
              <SelectItem value="research-reporting">
                Research & Reporting
              </SelectItem>
              <SelectItem value="capacity-building">
                Capacity Building
              </SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceName ? (
            <p
              id="consultation-service-error"
              className="mt-1.5 font-dm-sans text-xs text-semantic-error-500"
            >
              {errors.serviceName}
            </p>
          ) : null}
        </div>

        {/* Project Description */}
        <div>
          <label
            htmlFor="consultation-description"
            className="mb-3 block font-dm-sans text-[10px] font-bold uppercase tracking-wider text-text-label"
          >
            PROJECT DESCRIPTION
          </label>
          <textarea
            id="consultation-description"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Please describe your project needs, timeline, and any specific requirements."
            aria-invalid={Boolean(errors.projectDescription)}
            aria-describedby={
              errors.projectDescription
                ? "consultation-description-error"
                : undefined
            }
            className={`min-h-40 w-full resize-none rounded px-4 py-4 font-dm-sans text-[15px] placeholder:text-neutral-500 transition-colors focus:outline-none focus:ring-1 ${
              errors.projectDescription
                ? "border border-semantic-error-500 bg-red-50 focus:ring-semantic-error-500"
                : "border border-neutral-300 bg-neutral-100 focus:ring-primary-700"
            }`}
          />
          {errors.projectDescription ? (
            <p
              id="consultation-description-error"
              className="mt-1.5 font-dm-sans text-xs text-semantic-error-500"
            >
              {errors.projectDescription}
            </p>
          ) : null}
        </div>

        {apiError && (
          <p className="font-dm-sans text-sm text-semantic-error-500 text-center">
            {apiError}
          </p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-auto w-full rounded-3xl bg-primary-500 px-6 py-4 font-dm-sans text-[15px] font-bold text-white transition-colors hover:bg-primary-700 disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}
