import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useShop } from "../context/ShopContext";
import { useAuth } from "../context/AuthContext";

const CITIES = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai"];

function Navbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { cartCount, wishlistCount } = useShop();
  const { user, isLoggedIn, logout } = useAuth();

  const [city, setCity] = useState(CITIES[0]);
  const [showCityMenu, setShowCityMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const cityRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (cityRef.current && !cityRef.current.contains(e.target)) {
        setShowCityMenu(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <span className="text-2xl font-extrabold text-[#0C3B2E]">
            hamp<span className="text-[#8FCB2E]">ify</span>
          </span>
        </Link>

        {/* Delivery location dropdown */}
        <div className="hidden md:block relative shrink-0" ref={cityRef}>
          <button
            onClick={() => setShowCityMenu((v) => !v)}
            className="flex flex-col leading-tight text-left"
          >
            <span className="text-xs text-gray-500">Deliver gifts to</span>
            <span className="text-sm font-semibold text-[#14140F] flex items-center gap-1">
              {city}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {showCityMenu && (
            <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-xl shadow-lg py-2 w-40 z-50">
              {CITIES.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCity(c);
                    setShowCityMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                    c === city
                      ? "font-semibold text-[#0C3B2E]"
                      : "text-[#14140F]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="grow flex items-center bg-gray-100 rounded-xl px-3 py-2 gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for Diwali hampers, chocolates, gifts..."
            className="bg-transparent outline-none text-sm w-full text-[#14140F] placeholder-gray-500"
          />
        </form>

        {/* Right actions */}
        <div className="flex items-center gap-4 shrink-0">
          {/* User / Login */}
          {isLoggedIn ? (
            <div className="relative" ref={userRef}>
              <button
                onClick={() => setShowUserMenu((v) => !v)}
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#14140F]"
              >
                <span className="h-7 w-7 rounded-full bg-[#0C3B2E] text-white flex items-center justify-center text-xs font-bold uppercase">
                  {user.name.charAt(0)}
                </span>
                {user.name}
              </button>

              {showUserMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg py-2 w-40 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden sm:block text-sm font-semibold text-[#14140F] hover:text-[#0C3B2E]"
            >
              Login
            </Link>
          )}

          <Link to="/wishlist" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#14140F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#0C3B2E] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 bg-[#0C3B2E] text-white px-3 py-2 rounded-xl"
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.75-4.575 1.75-6.75a48.454 48.454 0 00-.313-3.75M7.5 14.25L5.106 5.272M6 6.75h13.75"
              />
            </svg>
            <span className="hidden sm:inline text-sm font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C6F135] text-[#14140F] text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
