import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/products/${category.id}`}
      className="flex flex-col items-center gap-2 group shrink-0 w-24 sm:w-28"
    >
      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <span className="text-xs sm:text-sm font-medium text-center text-[#14140F] leading-tight">
        {category.name}
      </span>
    </Link>
  );
}

export default CategoryCard;
