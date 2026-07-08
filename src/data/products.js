// Static demo data for Hampify — replace with API calls when backend is ready.

export const categories = [
  {
    id: "diwali",
    name: "Diwali Hampers",
    image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?w=300",
  },
  {
    id: "rakhi",
    name: "Rakhi Specials",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQeedCP50EwQNC2zjkpVa3x7Khkr88fwL3BIS5zdX78LsnPr5H9blLAK3Shr7j0uW0SEa6qfq06xNYrnWKkOwtg3xKlHBYTtRpQQVSU4qI",
  },
  {
    id: "birthday",
    name: "Birthday Gifts",
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=300",
  },
  {
    id: "anniversary",
    name: "Anniversary",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300",
  },
  {
    id: "corporate",
    name: "Corporate Gifting",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=300",
  },
  {
    id: "chocolate",
    name: "Chocolate Hampers",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300",
  },
];

export const products = [
  {
    id: 1,
    name: "Royal Diwali Delight Hamper",
    category: "diwali",
    price: 1499,
    mrp: 1899,
    image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?w=500",
    description:
      "A premium Diwali hamper with assorted dry fruits, artisanal sweets, scented candles, and a handcrafted diya.",
    rating: 4.6,
    stock: 24,
  },
  {
    id: 2,
    name: "Golden Rakhi Celebration Box",
    category: "rakhi",
    price: 999,
    mrp: 1299,
    image: "https://images.unsplash.com/photo-1611329532992-0b7ba27d97e7?w=500",
    description:
      "Includes a designer rakhi, roli-chawal thali, premium chocolates, and a personalized greeting card.",
    rating: 4.4,
    stock: 40,
  },
  {
    id: 3,
    name: "Happy Birthday Surprise Hamper",
    category: "birthday",
    price: 1299,
    mrp: 1599,
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=500",
    description:
      "A delightful mix of cake, balloons, chocolates, and a birthday card to make someone's day special.",
    rating: 4.7,
    stock: 30,
  },
  {
    id: 4,
    name: "Love & Roses Anniversary Hamper",
    category: "anniversary",
    price: 1799,
    mrp: 2199,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500",
    description:
      "Fresh roses, premium wine glasses, scented candles, and gourmet chocolates for a memorable celebration.",
    rating: 4.8,
    stock: 18,
  },
  {
    id: 5,
    name: "Elite Corporate Gift Box",
    category: "corporate",
    price: 2499,
    mrp: 2999,
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500",
    description:
      "A sophisticated hamper with premium tea, dry fruits, a notebook, and a pen set — perfect for clients and employees.",
    rating: 4.5,
    stock: 15,
  },
  {
    id: 6,
    name: "Choco Bliss Indulgence Hamper",
    category: "chocolate",
    price: 899,
    mrp: 1099,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500",
    description:
      "A rich assortment of handmade chocolates, truffles, and cocoa treats packed in an elegant gift box.",
    rating: 4.6,
    stock: 50,
  },
  {
    id: 7,
    name: "Festive Dry Fruits Deluxe Hamper",
    category: "diwali",
    price: 1699,
    mrp: 1999,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500",
    description:
      "Premium almonds, cashews, pistachios, and raisins beautifully packed in a festive wooden box.",
    rating: 4.5,
    stock: 22,
  },
  {
    id: 8,
    name: "Rakhi Thali & Sweets Combo",
    category: "rakhi",
    price: 799,
    mrp: 999,
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813?w=500",
    description:
      "Traditional pooja thali paired with an assortment of Indian sweets, ideal for Raksha Bandhan.",
    rating: 4.3,
    stock: 35,
  },
];

export const getProductsByCategory = (categoryId) =>
  products.filter((p) => p.category === categoryId);

export const getProductById = (id) => products.find((p) => p.id === Number(id));
