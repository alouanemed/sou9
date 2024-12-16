import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useAppDispatch } from "@/lib/store";
import { removeFromCart, updateQuantity } from "@/lib/store/cartSlice";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/lib/store/cartSlice";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();
  const { product, quantity } = item;

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    dispatch(updateQuantity({ productId: product.id, quantity: newQuantity }));
  };

  const incrementQuantity = () => {
    handleUpdateQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      handleUpdateQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-gray-100 p-6 shadow-lg">
      <div className="flex items-start gap-4">
        {/* Product Image */}
        <Link href={`/products/${product.id}`} className="shrink-0">
          <div className="relative h-24 w-24 overflow-hidden rounded-md border border-gray-300">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        </Link>

        {/* Product Details */}
        <div className="flex flex-grow flex-col">
          <div className="flex justify-between items-start">
            {/* Product Title */}
            <Link href={`/products/${product.id}`}>
              <h3 className="line-clamp-2 text-lg font-semibold hover:text-primary">
                {product.title}
              </h3>
            </Link>

            {/* Remove Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:bg-red-100"
              onClick={handleRemove}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove item</span>
            </Button>
          </div>

          {/* Product Price */}
          <p className="mt-1 text-sm text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Quantity Controls and Total Price */}
      <div className="flex items-center justify-between">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 border border-gray-300 hover:bg-gray-200"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>

          <span className="w-10 text-center text-lg font-medium">{quantity}</span>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 border border-gray-300 hover:bg-gray-200"
            onClick={incrementQuantity}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>

        {/* Total Price */}
        <p className="text-lg font-semibold text-green-600">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
