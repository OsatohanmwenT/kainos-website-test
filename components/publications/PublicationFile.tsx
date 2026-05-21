"use client";

import { Button } from "@/components/ui/button";
import { getPublicationDownload } from "@/lib/api";
import { Download } from "lucide-react";
import { useState } from "react";

interface PublicationDownloadButtonProps {
  publicationId: string;
  label: string;
  className?: string;
  containerClassName?: string;
  fallbackDownloadUrl?: string | null;
  fallbackFileName?: string | null;
  requestAccessHref?: string;
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
      } catch (error) {
        console.log(error);
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
