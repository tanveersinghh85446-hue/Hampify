import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import Button from "../Components/Button";
import { useShop } from "../Context/ShopContext";
import { useToast } from "../Context/ToastContext";

function Cart() {
  const {
    cart,
    cartTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    discountAmount,
    finalTotal,
  } = useShop();
  const { showToast } = useToast();

  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");

  const deliveryFee = finalTotal > 999 || finalTotal === 0 ? 0 : 79;
  const grandTotal = finalTotal + deliveryFee;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;

    const result = applyCoupon(couponInput);
    if (result.success) {
      setCouponError("");
      showToast(result.message);
      setCouponInput("");
    } else {
      setCouponError(result.message);
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponError("");
    showToast("Coupon removed");
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-lg font-semibold text-[#14140F] mb-2">
          Your cart is empty
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Looks like you haven't added any hampers yet.
        </p>
        <Link to="/products">
          <Button variant="primary">Browse Hampers</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-xl md:text-2xl font-bold text-[#14140F] mb-6">
        Your Cart ({cart.length})
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Items */}
        <div className="md:col-span-2 flex flex-col gap-3">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 h-fit">
          <h2 className="font-bold text-[#14140F] mb-4">Order Summary</h2>

          {/* Coupon section */}
          {appliedCoupon ? (
            <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2.5 mb-4">
              <div>
                <p className="text-sm font-semibold text-green-700">
                  {appliedCoupon.code} applied
                </p>
                <p className="text-xs text-green-600">
                  {appliedCoupon.description}
                </p>
              </div>
              <button
                onClick={handleRemoveCoupon}
                className="text-xs font-semibold text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplyCoupon} className="mb-4">
              <div className="flex gap-2">
                <input
                  value={couponInput}
                  onChange={(e) => {
                    setCouponInput(e.target.value);
                    setCouponError("");
                  }}
                  placeholder="Enter coupon code"
                  className="grow border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0C3B2E] uppercase"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#0C3B2E] text-white text-sm font-semibold shrink-0"
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <p className="text-xs text-red-500 mt-1.5">{couponError}</p>
              )}
              <p className="text-xs text-gray-400 mt-1.5">
                Try FEST10, WELCOME50, or GIFT20
              </p>
            </form>
          )}

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>

          {discountAmount > 0 && (
            <div className="flex justify-between text-sm text-green-600 mb-2">
              <span>Coupon Discount</span>
              <span>−₹{discountAmount}</span>
            </div>
          )}

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
          </div>

          <div className="border-t border-gray-100 my-3" />

          <div className="flex justify-between font-bold text-[#14140F] mb-5">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <Link to="/checkout">
            <Button variant="primary" fullWidth>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
