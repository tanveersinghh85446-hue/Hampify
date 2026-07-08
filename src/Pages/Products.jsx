import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";
import { products, categories } from "../data/products";

function Products() {
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState(categoryName || "all");
  const [sortBy, setSortBy] = useState("relevance");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, search, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-xl md:text-2xl font-bold text-[#14140F] mb-4">
        All Gift Hampers
      </h1>

      <div className="mb-5 max-w-md">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search hampers..."
        />
      </div>

      {/* Category filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        <button
          onClick={() => setActiveCategory("all")}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold border ${
            activeCategory === "all"
              ? "bg-[#0C3B2E] text-white border-[#0C3B2E]"
              : "border-gray-300 text-[#14140F]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold border ${
              activeCategory === cat.id
                ? "bg-[#0C3B2E] text-white border-[#0C3B2E]"
                : "border-gray-300 text-[#14140F]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="flex justify-end mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white"
        >
          <option value="relevance">Sort: Relevance</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-16">
          No hampers found. Try a different search or category.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
