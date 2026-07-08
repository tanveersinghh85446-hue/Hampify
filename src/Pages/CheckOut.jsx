import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useShop } from "../Context/ShopContext";
import { useToast } from "../Context/ToastContext";
import { useOrders } from "../Context/OrderContext";

function CheckOut() {
  const { cart, cartTotal, discountAmount, finalTotal, clearCart } = useShop();
  const { showToast } = useToast();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [placingOrder, setPlacingOrder] = useState(false);

  const deliveryFee = finalTotal > 999 || finalTotal === 0 ? 0 : 79;
  const grandTotal = finalTotal + deliveryFee;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlacingOrder(true);

    // Simulate order placement — replace with real API call later
    setTimeout(() => {
      placeOrder({
        items: cart,
        subtotal: cartTotal,
        discount: discountAmount,
        deliveryFee,
        total: grandTotal,
        address: form,
        paymentMethod,
      });
      clearCart();
      setPlacingOrder(false);
      showToast("Order placed successfully! 🎁");
      navigate("/orders");
    }, 1200);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">
          Your cart is empty. Add hampers before checking out.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-xl md:text-2xl font-bold text-[#14140F] mb-6">
        Checkout
      </h1>

      <form onSubmit={handlePlaceOrder} className="grid md:grid-cols-3 gap-6">
        {/* Delivery details */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 p-5">
          <h2 className="font-bold text-[#14140F] mb-4">Delivery Details</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
            />
            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
            />
            <input
              required
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E] sm:col-span-2"
            />
            <input
              required
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
            />
            <input
              required
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#0C3B2E]"
            />
          </div>

          <h2 className="font-bold text-[#14140F] mt-6 mb-3">Payment Method</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2 text-sm border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              UPI / Card / Netbanking
            </label>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 h-fit">
          <h2 className="font-bold text-[#14140F] mb-4">Order Summary</h2>

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

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={placingOrder}
          >
            {placingOrder ? "Placing Order..." : "Place Order"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CheckOut;
