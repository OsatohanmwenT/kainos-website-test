import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ApiError } from "./types";

const API_BASE_URL =
  process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

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

export function normalizeApiError(error: unknown): ApiError {
  if (error instanceof AxiosError) {
    return {
      message: getErrorMessage(error.response?.data, error.message),
      status: error.response?.status,
      details: error.response?.data,
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "An unexpected API error occurred." };
}

export async function apiRequest<T>(config: AxiosRequestConfig) {
  try {
    const response = await apiClient.request<T>(config);
    return response.data;
  } catch (error) {
    throw normalizeApiError(error);
  }
}

export async function apiDataRequest<T>(config: AxiosRequestConfig) {
  const response = await apiRequest<{ data: T }>(config);
  return response.data;
}
