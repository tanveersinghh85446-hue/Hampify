import { createContext, useContext, useState, useEffect } from "react";
import { coupons } from "../data/coupons";

const ShopContext = createContext(null);

function loadFromStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => loadFromStorage("hampify_cart", []));
  const [wishlist, setWishlist] = useState(() =>
    loadFromStorage("hampify_wishlist", [])
  );
  const [appliedCoupon, setAppliedCoupon] = useState(() =>
    loadFromStorage("hampify_coupon", null)
  );

  // Persist to localStorage whenever these change
  useEffect(() => {
    localStorage.setItem("hampify_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("hampify_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("hampify_coupon", JSON.stringify(appliedCoupon));
  }, [appliedCoupon]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartQty = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, qty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // --- Coupon logic ---
  const applyCoupon = (codeInput) => {
    const code = codeInput.trim().toUpperCase();
    const coupon = coupons.find((c) => c.code === code);

    if (!coupon) {
      return { success: false, message: "Invalid coupon code." };
    }
    if (cartTotal < coupon.minOrder) {
      return {
        success: false,
        message: `Add items worth ₹${coupon.minOrder} to use this coupon.`,
      };
    }

    setAppliedCoupon(coupon);
    return { success: true, message: `Coupon ${coupon.code} applied!` };
  };

  const removeCoupon = () => setAppliedCoupon(null);

  let discountAmount = 0;
  if (appliedCoupon && cartTotal >= appliedCoupon.minOrder) {
    if (appliedCoupon.type === "flat") {
      discountAmount = appliedCoupon.value;
    } else {
      discountAmount = Math.round((cartTotal * appliedCoupon.value) / 100);
      if (appliedCoupon.maxDiscount) {
        discountAmount = Math.min(discountAmount, appliedCoupon.maxDiscount);
      }
    }
  }

  const finalTotal = Math.max(cartTotal - discountAmount, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartTotal,
        cartCount,
        wishlistCount: wishlist.length,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        discountAmount,
        finalTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}