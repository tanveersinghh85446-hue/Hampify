import { Link } from "react-router-dom";
import { useShop } from "../Context/ShopContext";
import { useToast } from "../Context/ToastContext";

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, cart } = useShop();
  const { showToast } = useToast();

  const cartItem = cart.find((item) => item.id === product.id);
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  const handleAddToCart = () => {
    addToCart(product);
    showToast(`${product.name} added to cart`);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    showToast(
      isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist"
    );
  };

  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col">
      {/* Wishlist toggle */}
      <button
        onClick={handleToggleWishlist}
        className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${
            isInWishlist(product.id) ? "text-red-500" : "text-gray-400"
          }`}
          viewBox="0 0 20 20"
          fill={isInWishlist(product.id) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M10 17.5s-6.5-4.35-6.5-8.85A3.65 3.65 0 0110 6.2a3.65 3.65 0 016.5 2.45c0 4.5-6.5 8.85-6.5 8.85z" />
        </svg>
      </button>

      {/* Discount badge */}
      {discount > 0 && (
        <span className="absolute top-2 left-2 z-10 bg-[#C6F135] text-[#14140F] text-[10px] font-bold px-2 py-1 rounded-md">
          {discount}% OFF
        </span>
      )}

      <Link to={`/product/${product.id}`} className="flex flex-col grow">
        <div className="h-32 sm:h-36 w-full rounded-xl overflow-hidden bg-gray-50 mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-sm font-semibold text-[#14140F] line-clamp-2 mb-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
          </svg>
          {product.rating}
        </div>

        <div className="flex items-center gap-2 mt-auto">
          <span className="text-sm font-bold text-[#14140F]">
            ₹{product.price}
          </span>
          {product.mrp > product.price && (
            <span className="text-xs text-gray-400 line-through">
              ₹{product.mrp}
            </span>
          )}
        </div>
      </Link>

      {/* Add to cart */}
      {cartItem ? (
        <div className="mt-3 flex items-center justify-between bg-[#0C3B2E] text-white rounded-lg px-3 py-1.5 text-sm font-semibold">
          <span>In cart</span>
          <span>{cartItem.qty}</span>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full border border-[#0C3B2E] text-[#0C3B2E] rounded-lg py-1.5 text-sm font-semibold hover:bg-[#0C3B2E] hover:text-white transition-colors"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;