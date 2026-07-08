import { useShop } from "../context/ShopContext";

function CartItem({ item }) {
  const { updateCartQty, removeFromCart } = useShop();

  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 p-3">
      <div className="h-20 w-20 rounded-xl overflow-hidden bg-gray-50 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="grow">
        <h3 className="text-sm font-semibold text-[#14140F] line-clamp-2">
          {item.name}
        </h3>
        <p className="text-sm font-bold text-[#0C3B2E] mt-1">
          ₹{item.price} <span className="text-gray-400 font-normal">x {item.qty}</span>
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => updateCartQty(item.id, item.qty - 1)}
            className="px-2.5 py-1 text-[#0C3B2E] font-bold hover:bg-gray-50"
          >
            −
          </button>
          <span className="px-3 text-sm font-semibold">{item.qty}</span>
          <button
            onClick={() => updateCartQty(item.id, item.qty + 1)}
            className="px-2.5 py-1 text-[#0C3B2E] font-bold hover:bg-gray-50"
          >
            +
          </button>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-400 hover:text-red-500"
          aria-label="Remove item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;