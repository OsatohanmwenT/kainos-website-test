import emailjs from "@emailjs/browser";
import { ConsultationFormRequest } from "./api/types";

const TO_EMAIL = "info@kainosedge.com";

interface SendEmailOptions {
  payload: ConsultationFormRequest;
  templateId: string | undefined;
}

export async function sendEmail({ payload, templateId }: SendEmailOptions) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey || !templateId) {
    throw new Error("EmailJS is not configured.");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      to_email: TO_EMAIL,
      full_name: payload.fullName,
      email: payload.email,
      organization_name: payload.organizationName,
      service_name: payload.serviceName,
      project_description: payload.projectDescription,
    },
    { publicKey }
  );
}
