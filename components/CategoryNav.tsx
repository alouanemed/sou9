"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  categories: string[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  return (
    <nav className="flex flex-col gap-4 overflow-x-auto pb-4">
      {/* "All Products" Link */}
      <Link
        href="/categories"
        className={cn(
          "border-b-2 px-4 py-2 text-sm font-semibold transition-all",
          !currentCategory || currentCategory === "all"
            ? "text-primary border-primary"
            : "text-muted-foreground hover:text-primary hover:border-primary"
        )}
      >
        All Products
      </Link>

      {/* Category Links */}
      {categories.map((category) => {
        const isActive = currentCategory === category;
        return (
          <Link
            key={category}
            href={`/categories?category=${encodeURIComponent(category)}`}
            className={cn(
              "px-4 py-2 text-sm font-semibold transition-all border-b-2",
              isActive
                ? "text-primary border-primary"
                : "text-muted-foreground hover:text-primary hover:border-primary"
            )}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
}
