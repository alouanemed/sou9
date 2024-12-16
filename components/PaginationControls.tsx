"use client";

import { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
  baseUrl: string;
  pageSize: string;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
  baseUrl,
  pageSize,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const page = searchParams.get("page") ?? "1";
  const category = searchParams.get("category");

  const createPageUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    params.set("page", newPage.toString());
    params.set("pageSize", pageSize);
    return `${baseUrl}${params.toString() ? "?" + params.toString() : ""}`;
  };

  const handlePageChange = (newPage: number) => {
    setLoading(true);
    router.push(createPageUrl(newPage));
    setLoading(false);
  };

  return (
    <div className="flex w-full items-center justify-end gap-2">
      <Button
        variant="ghost"
        className="bg-slate-200 p-1 px-4 py-1"
        disabled={!hasPrevPage || loading}
        onClick={() => handlePageChange(Number(page) - 1)}
      >
        {loading ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          <ChevronLeft className="h-6 w-6" />
        )}
      </Button>

      <div>
        {page} / {totalPages}
      </div>

      <Button
        className="bg-primary px-4 py-1 text-white"
        disabled={!hasNextPage || loading}
        onClick={() => handlePageChange(Number(page) + 1)}
      >
        {loading ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          <ChevronRight className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default PaginationControls;
