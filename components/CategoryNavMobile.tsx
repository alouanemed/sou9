"use client";

import { useSearchParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface CategoryNavMobileProps {
  categories: string[];
}

export function CategoryNavMobile({ categories }: CategoryNavMobileProps) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const router = useRouter();

  const handleSelectChange = (value: string) => {
    const url =
      value === "all"
        ? "/categories"
        : `/categories?category=${encodeURIComponent(value)}`;
    router.push(url);
    // Close the sheet menu
    const sheetTrigger = document.querySelector(
      "[aria-expanded='true']",
    ) as HTMLElement;
    if (sheetTrigger) {
      sheetTrigger.click();
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle category menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
          <SheetDescription>Browse products by category</SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <Select
            value={currentCategory || "all"}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </SheetContent>
    </Sheet>
  );
}
