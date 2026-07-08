import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/ProductCard";
import { categories, products } from "../data/products";

function Home() {
  const featured = products.slice(0, 4);
  const bestsellers = products.slice(4, 8);

  return (
    <div>
      <Banner />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-lg md:text-xl font-bold text-[#14140F] mb-4">
          Shop by Occasion
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-[#14140F]">
            Handpicked for You
          </h2>
          <Link
            to="/products"
            className="text-sm font-semibold text-[#0C3B2E] hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 py-6 pb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-[#14140F]">
            Bestselling Hampers
          </h2>
          <Link
            to="/products"
            className="text-sm font-semibold text-[#0C3B2E] hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promo strip */}
      <section className="bg-[#C6F135] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="font-bold text-[#14140F]">
            Free personalized greeting card on every hamper 🎁
          </p>
          <Link
            to="/products"
            className="bg-[#14140F] text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
