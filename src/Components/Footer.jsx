import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0C3B2E] text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
        <div>
          <span className="text-xl font-extrabold">
            hamp<span className="text-[#C6F135]">ify</span>
          </span>
          <p className="text-sm text-gray-300 mt-3 max-w-xs mx-auto sm:mx-0">
            Curated gift hampers for every festival and celebration, delivered
            with love.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-[#C6F135]">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#C6F135]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">
            Account
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="hover:text-[#C6F135]">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-[#C6F135]">
                Register
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-[#C6F135]">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/products" className="hover:text-[#C6F135]">
                All products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-[#C6F135]">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400 px-4">
        © {new Date().getFullYear()} Hampify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
