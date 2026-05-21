import { apiDataRequest } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { PublicDatasetsResponse, PublicListParams } from "./types";

export function getDatasets(params?: PublicListParams) {
  return apiDataRequest<PublicDatasetsResponse>({
    method: "GET",
    url: API_ENDPOINTS.datasets,
    params,
  });
}
