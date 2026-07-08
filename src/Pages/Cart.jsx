import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import Button from "../Components/Button";
import { useShop } from "../context/ShopContext";

function Cart() {
  const { cart, cartTotal } = useShop();

  const deliveryFee = cartTotal > 999 || cartTotal === 0 ? 0 : 79;
  const grandTotal = cartTotal + deliveryFee;

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

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>
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