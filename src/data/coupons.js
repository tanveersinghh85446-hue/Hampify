export const coupons = [
  {
    code: "FEST10",
    type: "percent",
    value: 10,
    minOrder: 500,
    description: "10% off on orders above ₹500",
  },
  {
    code: "WELCOME50",
    type: "flat",
    value: 50,
    minOrder: 300,
    description: "Flat ₹50 off on orders above ₹300",
  },
  {
    code: "GIFT20",
    type: "percent",
    value: 20,
    minOrder: 1500,
    maxDiscount: 400,
    description: "20% off (up to ₹400) on orders above ₹1500",
  },
];
