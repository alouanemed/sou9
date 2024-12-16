"use client";

import { useAppSelector } from "@/lib/store";
import { selectCartItems } from "@/lib/store/cartSlice";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function CartWrapper() {
  const cartItems = useAppSelector(selectCartItems);

  if (cartItems.length === 0 || !cartItems) {
    return (
      <main className="flex w-full flex-1 flex-col">
        <MaxWidthWrapper className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Looks like you haven&rsquo;t added anything to your cart yet.
          </p>
          <Button asChild className="mt-4">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </MaxWidthWrapper>
      </main>
    );
  } else {
    return (
      <main className="flex w-full flex-1 flex-col">
        <MaxWidthWrapper className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>

            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="py-4 lg:col-span-1">
            <CartSummary />
          </div>
        </MaxWidthWrapper>
      </main>
    );
  }
}
