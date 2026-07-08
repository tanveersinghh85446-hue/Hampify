import { Link } from "react-router-dom";
import Button from "../Components/Button";
import { useOrders } from "../Context/OrderContext";

function Orders() {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-lg font-semibold text-[#14140F] mb-2">
          No orders yet
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Once you place an order, it'll show up here.
        </p>
        <Link to="/products">
          <Button variant="primary">Browse Hampers</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-xl md:text-2xl font-bold text-[#14140F] mb-6">
        My Orders
      </h1>

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl border border-gray-100 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-100">
              <div>
                <p className="text-sm font-semibold text-[#14140F]">
                  Order #{order.id}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(order.date).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>
              <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                {order.status}
              </span>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="grow">
                    <p className="text-sm font-medium text-[#14140F] line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Qty {item.qty} × ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-sm text-gray-500">
                Delivering to {order.address?.city || "—"}
              </span>
              <span className="font-bold text-[#14140F]">
                ₹{order.total}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;