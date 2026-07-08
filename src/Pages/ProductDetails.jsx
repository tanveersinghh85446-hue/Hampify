import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../Components/Button";
import ProductCard from "../Components/ProductCard";
import { getProductById, getProductsByCategory } from "../data/products";
import { useShop } from "../context/ShopContext";
import { useToast } from "../Context/ToastContext";

function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const { showToast } = useToast();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 mb-4">Hamper not found.</p>
        <Link to="/products" className="text-[#0C3B2E] font-semibold underline">
          Browse all hampers
        </Link>
      </div>
    );
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden bg-gray-50 h-80 md:h-105">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#14140F] mb-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
            </svg>
            {product.rating} rating · {product.stock} in stock
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-[#14140F]">
              ₹{product.price}
            </span>
            {product.mrp > product.price && (
              <>
                <span className="text-base text-gray-400 line-through">
                  ₹{product.mrp}
                </span>
                <span className="text-sm font-semibold text-green-600">
                  {discount}% off
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Qty selector */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold text-[#14140F]">
              Quantity
            </span>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 text-[#0C3B2E] font-bold hover:bg-gray-50"
              >
                −
              </button>
              <span className="px-4 text-sm font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-1.5 text-[#0C3B2E] font-bold hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="primary"
              className="grow"
              onClick={() => {
                addToCart(product, qty);
                showToast(`${product.name} added to cart`);
              }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toggleWishlist(product);
                showToast(
                  isInWishlist(product.id)
                    ? "Removed from wishlist"
                    : "Added to wishlist"
                );
              }}
            >
              {isInWishlist(product.id) ? "♥ Wishlisted" : "♡ Wishlist"}
            </Button>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-lg md:text-xl font-bold text-[#14140F] mb-4">
            You may also like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;