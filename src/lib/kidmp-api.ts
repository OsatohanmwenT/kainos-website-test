// Server-side client for the real Kainos Edge Backend (KIDMP) public API.
// Fetches run on the server (Server Components), so browser CORS rules don't apply.

const KIDMP_API_BASE = process.env.KIDMP_API_URL ?? "https://www.kainosedge.com/api/v1";

export type PublicBlogPost = {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  category: string | null;
  tags?: string[];
  cover_image_url: string | null;
  published_at: string;
  read_time_mins: number | null;
  profiles?: { full_name: string | null; avatar_url?: string | null } | null;
};

export type BlogPostDetail = PublicBlogPost & {
  content: string;
  similar_posts: PublicBlogPost[];
};

export type PublicPublication = {
  id: string;
  public_title: string;
  summary: string | null;
  category: "report" | "dataset" | string;
  authors: string[] | null;
  allow_download: boolean;
  published_at: string;
};

type Featured = {
  featured_reports: PublicPublication[];
  featured_datasets: PublicPublication[];
  latest_posts: PublicBlogPost[];
  stats: { total_datasets: number; total_reports: number };
};

type PublicationList = {
  reports?: PublicPublication[];
  datasets?: PublicPublication[];
  total: number;
  limit: number;
  offset: number;
};

async function kidmpFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${KIDMP_API_BASE}${path}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json?.success) return null;
    return json.data as T;
  } catch {
    return null;
  }
}

const emptyFeatured: Featured = {
  featured_reports: [],
  featured_datasets: [],
  latest_posts: [],
  stats: { total_datasets: 0, total_reports: 0 },
};

export async function getFeatured(): Promise<Featured> {
  return (await kidmpFetch<Featured>("/public/featured")) ?? emptyFeatured;
}

export async function getReports(): Promise<PublicPublication[]> {
  const data = await kidmpFetch<PublicationList>("/public/reports");
  return data?.reports ?? [];
}

export async function getDatasets(): Promise<PublicPublication[]> {
  const data = await kidmpFetch<PublicationList>("/public/datasets");
  return data?.datasets ?? [];
}

type BlogList = {
  posts: PublicBlogPost[];
  total: number;
  limit: number;
  offset: number;
};

export async function getBlogPosts(): Promise<PublicBlogPost[]> {
  const data = await kidmpFetch<BlogList>("/blog");
  return data?.posts ?? [];
}

export async function getBlogPost(slug: string): Promise<BlogPostDetail | null> {
  return kidmpFetch<BlogPostDetail>(`/blog/${encodeURIComponent(slug)}`);
}
