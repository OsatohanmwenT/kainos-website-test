import { apiRequest } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { ApiResponse, PublicationDownload } from "./types";

export async function getPublicationDownload(id: string) {
  const response = await apiRequest<ApiResponse<PublicationDownload>>({
    method: "GET",
    url: `${API_ENDPOINTS.publications}/${encodeURIComponent(id)}/download`,
  });

  if (!response.success || !response.data?.download_url) {
    throw new Error(response.message ?? "Unable to prepare download.");
  }

  return response.data;
}
