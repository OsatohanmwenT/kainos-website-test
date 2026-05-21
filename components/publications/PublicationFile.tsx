"use client";

import { Button } from "@/components/ui/button";
import { getPublicationDownload } from "@/lib/api";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

interface PublicationDownloadButtonProps {
  publicationId: string;
  label: string;
  className?: string;
  containerClassName?: string;
}

interface PublicationPreviewFrameProps {
  publicationId: string;
  title: string;
  className?: string;
}

export function PublicationDownloadButton({
  publicationId,
  label,
  className,
  containerClassName,
}: PublicationDownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setError(false);

    try {
      const file = await getPublicationDownload(publicationId);
      const link = document.createElement("a");
      link.href = file.download_url;
      link.download = file.file_name ?? "";
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
        <p className="mt-2 text-center font-dm-sans text-xs text-semantic-error-500">
          Unable to prepare download. Please try again.
        </p>
      )}
    </div>
  );
}

export function PublicationPreviewFrame({
  publicationId,
  title,
  className = "h-96 w-full rounded-xl border border-neutral-200 bg-white",
}: PublicationPreviewFrameProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadPreview() {
      try {
        const file = await getPublicationDownload(publicationId);

        if (mounted) {
          setPreviewUrl(file.download_url);
        }
      } catch {
        if (mounted) {
          setError(true);
        }
      }
    }

    void loadPreview();

    return () => {
      mounted = false;
    };
  }, [publicationId]);

  if (error) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-primary-50 p-6 text-center font-dm-sans text-sm text-text-body">
        Unable to load the preview. Please try downloading the file.
      </div>
    );
  }

  if (!previewUrl) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-xl border border-neutral-200 bg-primary-50 p-6 font-dm-sans text-sm text-text-body">
        Loading preview...
      </div>
    );
  }

  return <iframe title={title} src={previewUrl} className={className} />;
}
