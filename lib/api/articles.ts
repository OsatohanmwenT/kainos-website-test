import { apiDataRequest } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { PublicArticlesResponse } from "./types";

export function getArticles(params?: {
  category?: string;
  limit?: number;
  offset?: number;
  search?: string;
}) {
  return apiDataRequest<PublicArticlesResponse>({
    method: "GET",
    url: API_ENDPOINTS.articles,
    params,
  });
}
