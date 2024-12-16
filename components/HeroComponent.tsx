import React from "react";
import Hero from "./Hero";
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
    <section className="relative bg-secondary-600 bg-[url('/hero.jpeg')] bg-cover bg-center bg-no-repeat md:h-[400px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <MaxWidthWrapper className="flex flex-col justify-between gap-6 h-full py-8">
          {/* Header with Logo and Mobile Nav */}
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <div className="md:hidden">
              <CategoryNavMobile categories={categories} />
            </div>
          </div>

          {/* Hero Content */}
          <Hero title={title} description={description} />

          {/* Cart Link */}
          <Link
            href="/cart"
            className="flex items-center gap-2 text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-all"
          >
            My cart <ShoppingBasket size={20} />
          </Link>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default HeroComponent;
