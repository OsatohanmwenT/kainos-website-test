import { apiDataRequest } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { PublicationDownload } from "./types";

export function getPublicationDownload(id: string) {
  return apiDataRequest<PublicationDownload>({
    method: "GET",
    url: `${API_ENDPOINTS.publications}/${encodeURIComponent(id)}/download`,
  });
}
