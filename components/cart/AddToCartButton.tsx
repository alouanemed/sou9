"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store";
import {
  addToCart,
  updateQuantity,
  selectCartItems,
} from "@/lib/store/cartSlice";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/api/faker-shop";
import { Loader2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [loading, setLoading] = useState(false);

  // Find if product is in cart and get its quantity
  const cartItem = cartItems.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    setLoading(true);
    try {
      dispatch(addToCart(product));
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    dispatch(updateQuantity({ productId: product.id, quantity: newQuantity }));
  };

  if (quantity > 0) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-md border">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => handleUpdateQuantity(quantity - 1)}
            className="h-12 w-12"
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <span className="w-12 text-center text-lg">{quantity}</span>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => handleUpdateQuantity(quantity + 1)}
            className="h-12 w-12"
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
        <span className="text-muted-foreground">
          Total: ${(product.price * quantity).toFixed(2)}
        </span>
      </div>
    );
  }

  return (
    <Button
      size="lg"
      className="w-auto"
      onClick={handleAddToCart}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Adding to Cart...
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </>
      )}
    </Button>
  );
}
