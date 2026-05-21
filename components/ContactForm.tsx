"use client";

import { sendEmail } from "@/lib/emailjs";
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
      ? "border-semantic-error-500 focus:ring-semantic-error-500 bg-red-50"
      : "border-neutral-300 focus:ring-primary-700"
  }`;

export function ContactForm() {
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
    const e: FormErrors = {};

    if (!formData.fullName.trim()) {
      e.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Please enter a valid email address.";
    }

    if (!formData.organizationName.trim()) {
      e.organizationName = "Organization name is required.";
    }

    if (!formData.serviceName) {
      e.serviceName = "Please select a service.";
    }

    if (!formData.projectDescription.trim()) {
      e.projectDescription = "Project description is required.";
    } else if (formData.projectDescription.trim().length < 20) {
      e.projectDescription = "Please provide at least 20 characters.";
    }

    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceName: value }));
    if (errors.serviceName) {
      setErrors((prev) => ({ ...prev, serviceName: undefined }));
    }
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
      await sendEmail({
        payload: formData,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
      });
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        organizationName: "",
        serviceName: "",
        projectDescription: "",
      });
      setErrors({});
    } catch {
      setApiError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-semantic-success-500 flex items-center justify-center">
          <svg
            className="w-7 h-7 text-white"
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
          Message Sent!
        </h3>
        <p className="font-dm-sans text-[15px] text-text-body max-w-sm">
          Thank you for reaching out. We&apos;ll get back to you within 24
          business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 font-dm-sans text-[15px] font-semibold text-primary-500 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      {/* Full Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-[10px] font-bold tracking-wider uppercase text-text-label font-dm-sans mb-3"
          >
            FULL NAME
          </label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Sarah Chen"
            className={inputClass(errors.fullName)}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs font-dm-sans text-semantic-error-500">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[10px] font-bold tracking-wider uppercase text-text-label font-dm-sans mb-3"
          >
            EMAIL ADDRESS
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah@example.com"
            className={inputClass(errors.email)}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs font-dm-sans text-semantic-error-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Organization Name */}
      <div>
        <label
          htmlFor="organizationName"
          className="block text-[10px] font-bold tracking-wider uppercase text-text-label font-dm-sans mb-3"
        >
          ORGANIZATION NAME
        </label>
        <Input
          id="organizationName"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          placeholder="Kainos Edge"
          className={inputClass(errors.organizationName)}
        />
        {errors.organizationName && (
          <p className="mt-1.5 text-xs font-dm-sans text-semantic-error-500">
            {errors.organizationName}
          </p>
        )}
      </div>

      {/* Service Name */}
      <div>
        <label className="block text-[10px] font-bold tracking-wider uppercase text-text-label font-dm-sans mb-3">
          SERVICE NAME
        </label>
        <Select value={formData.serviceName} onValueChange={handleServiceChange}>
          <SelectTrigger
            className={`w-full px-4 py-3 h-auto! rounded font-dm-sans text-[15px] shadow-none transition-colors ${
              errors.serviceName
                ? "border-semantic-error-500 bg-red-50 text-neutral-500"
                : "border border-neutral-300 bg-neutral-100 text-neutral-500"
            }`}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="policy-analysis">Policy Analysis & Advisory</SelectItem>
            <SelectItem value="data-solutions">Custom Data Solutions</SelectItem>
            <SelectItem value="research-reporting">Research & Reporting</SelectItem>
            <SelectItem value="capacity-building">Capacity Building</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.serviceName && (
          <p className="mt-1.5 text-xs font-dm-sans text-semantic-error-500">
            {errors.serviceName}
          </p>
        )}
      </div>

      {/* Project Description */}
      <div>
        <label
          htmlFor="projectDescription"
          className="block text-[10px] font-bold tracking-wider uppercase text-text-label font-dm-sans mb-3"
        >
          PROJECT DESCRIPTION
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Please describe your project needs, timeline, and any specific requirements."
          className={`w-full px-4 py-4 rounded font-dm-sans text-[15px] placeholder:text-neutral-500 min-h-40 resize-none focus:outline-none focus:ring-1 transition-colors ${
            errors.projectDescription
              ? "border border-semantic-error-500 focus:ring-semantic-error-500 bg-red-50"
              : "border border-neutral-300 bg-neutral-100 focus:ring-primary-700"
          }`}
        />
        {errors.projectDescription && (
          <p className="mt-1.5 text-xs font-dm-sans text-semantic-error-500">
            {errors.projectDescription}
          </p>
        )}
      </div>

      {apiError && (
        <p className="font-dm-sans text-sm text-semantic-error-500 text-center">
          {apiError}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-auto mt-2 px-6 py-4 bg-primary-500 text-white font-dm-sans font-bold text-[15px] rounded-3xl hover:bg-primary-700 transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Requirements"}
      </Button>
    </form>
  );
}
