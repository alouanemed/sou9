import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Logo } from "./Logo";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { CategoryNavMobile } from "./CategoryNavMobile";
import { getAllCategories } from "@/lib/api/faker-shop";

type Props = {
  title: string;
  description?: string;
};

const HeroComponent = async ({ title, description }: Props) => {
  const categories = await getAllCategories();

  return (
    <section className="relative h-[500px] bg-[url('/hero.jpg')] bg-cover bg-fixed bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <MaxWidthWrapper className="h-full flex flex-col justify-between px-6 md:px-12 py-8">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo className="text-white" />
            </Link>
            <div className="md:hidden">
              <CategoryNavMobile categories={categories} />
            </div>
          </div>

          {/* Main Hero Section */}
          <div className="flex flex-col items-start space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-gray-200">{description}</p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-primary text-white rounded-full text-sm font-medium shadow-lg hover:bg-primary/90 transition-all"
              >
                Shop Now
              </Link>
              <Link
                href="/categories"
                className="px-6 py-3 bg-secondary text-white rounded-full text-sm font-medium shadow-lg hover:bg-secondary/90 transition-all"
              >
                Explore Categories
              </Link>
            </div>
          </div>

          {/* Cart Link */}
          <Link
            href="/cart"
            className="flex items-center gap-2 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full hover:bg-black/70 transition-all self-start"
          >
            View Cart <ShoppingBasket size={20} />
          </Link>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default HeroComponent;
