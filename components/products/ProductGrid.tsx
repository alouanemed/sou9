"use client";

import { Product } from "@/lib/api/faker-shop";
import { ProductCard } from "@/components/products/ProductCard";
import { Loader } from "@/components/ui/Loader";
import PaginationControls from "@/components/PaginationControls";
import { useSearchParams } from "next/navigation";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  basePageUrl: string;
  itemsPerPage?: number;
}

export function ProductGrid({
  products,
  isLoading = false,
  basePageUrl,
  itemsPerPage = 4,
}: ProductGridProps) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const ITEMS_PER_PAGE = itemsPerPage;

  if (isLoading) {
    return <Loader />;
  }

  if (!products?.length) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg font-semibold text-muted-foreground">
          No products found. 😔
        </p>
      </div>
    );
  }

  // Calculate pagination
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentItems = products.slice(start, end);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center pt-6">
          <PaginationControls
            hasNextPage={totalPages > page}
            hasPrevPage={page > 1}
            totalPages={totalPages}
            baseUrl={basePageUrl}
            pageSize={ITEMS_PER_PAGE.toString()}
          />
        </div>
      )}
    </div>
  );
}
