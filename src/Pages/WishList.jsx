import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Button from "../Components/Button";
import { useShop } from "../Context/ShopContext";

function WishList() {
  const { wishlist } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-lg font-semibold text-[#14140F] mb-2">
          Your wishlist is empty
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Save hampers you love and find them here anytime.
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
        Your Wishlist ({wishlist.length})
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
