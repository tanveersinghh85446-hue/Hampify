import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./Context/ShopContext";
import { AuthProvider } from "./Context/AuthContext";
import { ToastProvider } from "./Context/ToastContext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import WishList from "./Pages/WishList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ShopProvider>
          <ToastProvider>
            <div className="flex flex-col min-h-screen bg-[#F7F7F5] text-[#14140F]">
              <Navbar />

              <main className="grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route
                    path="/products/:categoryName"
                    element={<Products />}
                  />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<CheckOut />} />
                  <Route path="/wishlist" element={<WishList />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </ToastProvider>
        </ShopProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
