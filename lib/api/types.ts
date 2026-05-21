export interface ApiError {
  message: string;
  status?: number;
  details?: unknown;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface ConsultationFormRequest {
  fullName: string;
  email: string;
  organizationName: string;
  serviceName: string;
  projectDescription: string;
}

export interface BackendConsultationRequest {
  full_name: string;
  email: string;
  organization_name?: string;
  service_name?: string;
  project_description: string;
}

export interface ConsultationResponse {
  id: string;
  full_name?: string;
  email?: string;
  organization_name?: string;
  service_name?: string;
  project_description?: string;
  created_at?: string;
}

export interface PublicListParams {
  limit?: number;
  offset?: number;
  search?: string;
}

export interface PublicationDownload {
  download_url: string;
  file_name?: string | null;
  expires_in_seconds?: number | null;
}

export interface PublicReport {
  id: string;
  public_title: string;
  summary: string | null;
  authors: string[] | string | null;
  publication_date: string | null;
  citation_format?: string | null;
  is_visible?: boolean;
  allow_download: boolean;
  download_url?: string | null;
  stored_items?: {
    data_type?: string | null;
    year?: number | string | null;
    frequency?: string | null;
    indicator?: string | null;
    file_name?: string | null;
    label?: string | null;
    download_url?: string | null;
  } | null;
}

export interface PublicDataset {
  id: string;
  public_title: string;
  summary: string | null;
  authors: string[] | string | null;
  publication_date: string | null;
  is_visible?: boolean;
  allow_download: boolean;
  download_url?: string | null;
  stored_items?: {
    data_type?: string | null;
    year?: number | string | null;
    frequency?: string | null;
    indicator?: string | null;
    file_name?: string | null;
    label?: string | null;
    download_url?: string | null;
  } | null;
}

export interface PublicReportsResponse {
  reports: PublicReport[];
  total: number | null;
  limit: number;
  offset: number;
}

export interface PublicDatasetsResponse {
  datasets: PublicDataset[];
  total: number | null;
  limit: number;
  offset: number;
}

export interface PublicArticle {
  id: string;
  title: string;
  summary: string | null;
  category: string | null;
  author: string | null;
  published_at: string | null;
  read_time?: number | null;
  image_url?: string | null;
  featured?: boolean;
}

export interface PublicArticlesResponse {
  articles: PublicArticle[];
  total: number | null;
  limit: number;
  offset: number;
}
