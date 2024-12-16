import { useAppSelector } from "@/lib/store";
import { selectCartItems, selectCartTotal } from "@/lib/store/cartSlice";
import { Button } from "@/components/ui/button";

export function CartSummary() {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className="w-full max-w-xl mx-auto bg-gray-100 rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-300">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <span className="text-sm text-gray-600">
          {cartItems.length} item{cartItems.length !== 1 && "s"}
        </span>
      </div>

      {/* Cart Details */}
      <div className="py-6 space-y-4">
        {/* Subtotal Section */}
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-semibold text-gray-800">
            ${cartTotal.toFixed(2)}
          </span>
        </div>

        {/* Total Section */}
        <div className="flex justify-between border-t pt-4">
          <span className="text-lg font-medium text-gray-800">Total</span>
          <span className="text-lg font-bold text-green-600">
            ${cartTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 space-y-4">
        <Button
          className="w-full text-lg bg-green-600 hover:bg-green-700 text-white"
          size="lg"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </Button>
        <Button
          className="w-full text-lg border border-gray-300 text-gray-700 hover:bg-gray-200"
          size="lg"
        >
          Continue Shopping
        </Button>
      </div>

      {/* Security Disclaimer */}
      <div className="mt-6 pt-4 border-t border-gray-300">
        <p className="text-xs text-gray-600 text-center">
          <strong>Secure Checkout:</strong> Your payment information is encrypted
          and processed securely. We do not store your credit card details.
        </p>
      </div>
    </div>
  );
}
