import { apiDataRequest } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { PublicListParams, PublicReportsResponse } from "./types";

export function getReports(params?: PublicListParams) {
  return apiDataRequest<PublicReportsResponse>({
    method: "GET",
    url: API_ENDPOINTS.reports,
    params,
  });
}
