import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext(null);

function loadOrders() {
  try {
    const stored = localStorage.getItem("hampify_orders");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(loadOrders);

  useEffect(() => {
    localStorage.setItem("hampify_orders", JSON.stringify(orders));
  }, [orders]);

  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: `HMP${Date.now()}`,
      date: new Date().toISOString(),
      status: "Confirmed",
      ...orderDetails,
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
}
