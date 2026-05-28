import { API_ENDPOINTS } from "./endpoints";
import { ApiResponse, PublicArticlesResponse } from "./types";

const DEFAULT_API_BASE_URL =
  "https://kainos-edge-be-production.up.railway.app";

function getApiOrigin() {
  const configuredUrl =
    process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!configuredUrl) {
    return DEFAULT_API_BASE_URL;
  }

  const url = new URL(configuredUrl);
  const apiVersionIndex = url.pathname.indexOf("/api/v1");

  if (apiVersionIndex >= 0) {
    url.pathname = url.pathname.slice(0, apiVersionIndex);
  }

  return url.toString().replace(/\/$/, "");
}

function buildArticlesUrl(params?: {
  category?: string;
  limit?: number;
  offset?: number;
  search?: string;
}) {
  const url = new URL(API_ENDPOINTS.articles, getApiOrigin());

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url;
}

function getErrorMessage(data: unknown, fallback: string) {
  if (
    data &&
    typeof data === "object" &&
    "message" in data &&
    typeof data.message === "string"
  ) {
    return data.message;
  }

  return fallback;
}

export function getArticles(params?: {
  category?: string;
  limit?: number;
  offset?: number;
  search?: string;
}) {
  return fetch(buildArticlesUrl(params), {
    method: "GET",
    cache: "no-store",
  }).then(async (response) => {
    const payload = (await response.json()) as ApiResponse<PublicArticlesResponse>;

    if (!response.ok) {
      throw {
        message: getErrorMessage(payload, response.statusText),
        status: response.status,
        details: payload,
      };
    }

    return payload.data;
  });
}
