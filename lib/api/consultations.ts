import { apiDataRequest } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { ConsultationFormRequest, ConsultationResponse } from "./types";

function toBackendConsultationPayload(payload: ConsultationFormRequest) {
  return {
    full_name: payload.fullName,
    email: payload.email,
    organization_name: payload.organizationName,
    service_name: payload.serviceName,
    project_description: payload.projectDescription,
  };
}

export function submitConsultation(payload: ConsultationFormRequest) {
  return apiDataRequest<ConsultationResponse>({
    method: "POST",
    url: API_ENDPOINTS.consultations,
    data: toBackendConsultationPayload(payload),
  });
}
