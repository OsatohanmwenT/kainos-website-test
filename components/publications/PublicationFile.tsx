"use client";

import { Button } from "@/components/ui/button";
import { getPublicationDownload } from "@/lib/api";
import { Download, FileText, Lock } from "lucide-react";
import { useEffect, useState } from "react";

interface PublicationDownloadButtonProps {
  publicationId: string;
  label: string;
  className?: string;
  containerClassName?: string;
  fallbackDownloadUrl?: string | null;
  fallbackFileName?: string | null;
  requestAccessHref?: string;
}

interface PublicationPreviewProps {
  open: boolean;
  publicationId: string;
  title: string;
  canPreview: boolean;
  requestAccessHref?: string;
  fileName?: string | null;
  details?: Array<{
    label: string;
    value?: string | number | null;
  }>;
}

export function PublicationDownloadButton({
  publicationId,
  label,
  className,
  containerClassName,
  fallbackDownloadUrl,
  fallbackFileName,
  requestAccessHref,
}: PublicationDownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setError(false);

    try {
      let fileName = fallbackFileName ?? "";
      let downloadUrl = fallbackDownloadUrl ?? "";

      try {
        const file = await getPublicationDownload(publicationId);
        downloadUrl = file.download_url;
        fileName = file.file_name ?? fileName;
      } catch {
        if (!downloadUrl) {
          throw new Error("Unable to prepare download.");
        }
      }

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={containerClassName}>
      <Button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className={className}
      >
        <Download className="w-4 h-4 mr-2" />
        {loading ? "Preparing..." : label}
      </Button>
      {error && (
        <div className="mt-2 text-center font-dm-sans text-xs text-semantic-error-500">
          <p>This file is unavailable for direct download right now.</p>
          {requestAccessHref && (
            <a
              href={requestAccessHref}
              className="mt-1 inline-flex font-bold text-primary-700 hover:text-primary-500"
            >
              Request access
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function PublicationInlinePreview({
  open,
  publicationId,
  title,
  canPreview,
  requestAccessHref,
  fileName,
  details = [],
}: PublicationPreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!open || !canPreview || previewUrl || loading) {
      return;
    }

    let mounted = true;

    async function loadPreview() {
      setLoading(true);
      setError(false);

      try {
        const file = await getPublicationDownload(publicationId);

        if (mounted) {
          setPreviewUrl(file.download_url);
        }
      } catch {
        if (mounted) {
          setError(true);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    void loadPreview();

    return () => {
      mounted = false;
    };
  }, [canPreview, loading, open, previewUrl, publicationId]);

  if (!open) {
    return null;
  }

  const visibleDetails = details.filter((item) => item.value);

  return (
    <div className="border-t border-neutral-100 pt-6">
      <div className="grid gap-6 lg:grid-cols-[0.65fr_1fr]">
        <div className="font-dm-sans">
          <h4 className="text-lg font-bold text-text-header">Document Details</h4>
          <div className="mt-4 grid gap-4 text-sm">
            {fileName && canPreview && (
              <div>
                <p className="font-bold uppercase text-text-label">File</p>
                <p className="mt-1 break-words text-text-body">{fileName}</p>
              </div>
            )}
            {visibleDetails.map((item) => (
              <div key={item.label}>
                <p className="font-bold uppercase text-text-label">{item.label}</p>
                <p className="mt-1 text-text-body">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="font-dm-sans">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <FileText className="size-5" />
            </div>
            <h4 className="text-lg font-bold text-text-header">
              View-only Preview
            </h4>
          </div>

          {!canPreview ? (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-primary-50 p-6 text-center">
              <Lock className="size-8 text-[#8A6500]" />
              <p className="mt-3 font-bold text-text-header">Restricted Access</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-text-body">
                This document is restricted. Request access and the KainosEdge
                team will follow up.
              </p>
              {requestAccessHref && (
                <a
                  href={requestAccessHref}
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-2xl bg-[#D4A017] px-5 text-sm font-bold text-white hover:bg-[#b08513]"
                >
                  Request Access
                </a>
              )}
            </div>
          ) : error ? (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-primary-50 p-6 text-center">
              <FileText className="size-8 text-primary-700" />
              <p className="mt-3 font-bold text-text-header">
                Preview unavailable
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 text-text-body">
                The file is unavailable for inline preview right now.
              </p>
              {requestAccessHref && (
                <a
                  href={requestAccessHref}
                  className="mt-4 font-bold text-primary-700 hover:text-primary-500"
                >
                  Request access
                </a>
              )}
            </div>
          ) : loading || !previewUrl ? (
            <div className="flex min-h-64 items-center justify-center rounded-xl border border-neutral-200 bg-primary-50 p-6 text-sm text-text-body">
              Loading preview...
            </div>
          ) : (
            <iframe
              title={`${title} preview`}
              src={previewUrl}
              className="h-96 w-full rounded-xl border border-neutral-200 bg-white"
            />
          )}
        </div>
      </div>
    </div>
  );
}
