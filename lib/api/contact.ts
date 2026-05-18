import { apiDataRequest } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { ConsultationFormRequest, ConsultationResponse } from "./types";

function toBackendContactPayload(payload: ConsultationFormRequest) {
  return {
    full_name: payload.fullName,
    email: payload.email,
    organization_name: payload.organizationName,
    service_name: payload.serviceName,
    project_description: payload.projectDescription,
  };
}

export function submitContact(payload: ConsultationFormRequest) {
  return apiDataRequest<ConsultationResponse>({
    method: "POST",
    url: API_ENDPOINTS.contact,
    data: toBackendContactPayload(payload),
  });
}
