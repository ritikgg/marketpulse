require('dotenv').config();
const connectDB = require('./src/config/db');
const Product = require('./src/models/Product');

const products = [
  // Electronics
  {
    name: 'Apple iPhone 15 Pro',
    price: 1299.99,
    description: 'Latest Apple iPhone 15 Pro with A17 chip, stunning 6.1-inch display, and pro camera system.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    stock: 18,
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199.99,
    description: 'Flagship Android smartphone with premium camera features and a vivid 6.8-inch display.',
    image: 'https://images.unsplash.com/photo-1510557880182-3bdd60be9c2e?auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    stock: 20,
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    price: 349.99,
    description: 'Top-tier noise-cancelling headphones with long battery life and crystal-clear sound.',
    image: 'https://images.unsplash.com/photo-1612858249816-5a91a9fb9886?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'electronics',
    stock: 30,
  },
  {
    name: 'Dell XPS 15 Laptop',
    price: 1699.99,
    description: 'Powerful 15-inch laptop with vibrant OLED display and excellent performance for creators.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    stock: 12,
  },
  {
    name: 'GoPro HERO12 Black',
    price: 499.99,
    description: 'Rugged action camera with 5.3K video, HyperSmooth stabilization, and waterproof design.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    stock: 24,
  },

  // Fashion
  {
    name: 'Leather Bomber Jacket',
    price: 179.99,
    description: 'Premium leather bomber jacket with a classic fit and soft interior lining.',
    image: 'https://images.unsplash.com/photo-1520975914796-0c6a2c8fc4c3?auto=format&fit=crop&w=800&q=80',
    category: 'fashion',
    stock: 28,
  },
  {
    name: 'Classic White Sneakers',
    price: 89.99,
    description: 'Minimalist white sneakers designed for everyday comfort and timeless style.',
    image: 'https://images.unsplash.com/photo-1528701800489-20f30c4a4c03?auto=format&fit=crop&w=800&q=80',
    category: 'fashion',
    stock: 40,
  },
  {
    name: 'Slim Fit Denim Jeans',
    price: 59.99,
    description: 'Versatile slim fit jeans made from stretch denim for comfort and a clean silhouette.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    category: 'fashion',
    stock: 36,
  },
  {
    name: 'Silk Midi Dress',
    price: 129.99,
    description: 'Elegant silk midi dress with a flattering cut for day-to-evening wear.',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80',
    category: 'fashion',
    stock: 22,
  },
  {
    name: 'Performance Hoodie',
    price: 69.99,
    description: 'Lightweight performance hoodie made for workouts and casual layering.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    category: 'fashion',
    stock: 45,
  },

  // Home
  {
    name: 'Oak Dining Table',
    price: 499.99,
    description: 'Solid oak dining table with a natural finish and modern tapered legs.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    category: 'home',
    stock: 10,
  },
  {
    name: 'Linen Sectional Sofa',
    price: 899.99,
    description: 'Comfortable linen sectional sofa with modular pieces and soft cushioning.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    category: 'home',
    stock: 8,
  },
  {
    name: 'Aromatherapy Diffuser',
    price: 39.99,
    description: 'Ultrasonic aromatherapy diffuser with ambient LED lighting and quiet operation.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
    category: 'home',
    stock: 50,
  },
  {
    name: 'Modern Floor Lamp',
    price: 129.99,
    description: 'Sleek floor lamp with adjustable arm and warm LED illumination.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
    category: 'home',
    stock: 16,
  },
  {
    name: 'Memory Foam Mattress',
    price: 699.99,
    description: 'Plush memory foam mattress designed for pressure relief and superior support.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    category: 'home',
    stock: 12,
  },

  // Sports
  {
    name: 'Carbon Fiber Road Bike',
    price: 2199.99,
    description: 'Lightweight carbon fiber road bike built for speed and precision on paved routes.',
    image: 'https://images.unsplash.com/photo-1519160583408-1d422a1e20c1?auto=format&fit=crop&w=800&q=80',
    category: 'sports',
    stock: 6,
  },
  {
    name: 'Adjustable Dumbbell Set',
    price: 249.99,
    description: 'Space-saving adjustable dumbbells with a durable locking mechanism.',
    image: 'https://images.unsplash.com/photo-1517964603305-51d3aa237d5d?auto=format&fit=crop&w=800&q=80',
    category: 'sports',
    stock: 28,
  },
  {
    name: 'Premium Yoga Mat',
    price: 49.99,
    description: 'Non-slip premium yoga mat with extra cushioning for comfort and stability.',
    image: 'https://images.unsplash.com/photo-1508606572321-901ea4437077?auto=format&fit=crop&w=800&q=80',
    category: 'sports',
    stock: 35,
  },
  {
    name: 'Tennis Racket Pro',
    price: 139.99,
    description: 'Lightweight professional tennis racket with enhanced power and control.',
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80',
    category: 'sports',
    stock: 18,
  },
  {
    name: 'Waterproof Fitness Tracker',
    price: 99.99,
    description: 'Fitness tracker with heart rate monitoring, GPS, and waterproof design.',
    image: 'https://images.unsplash.com/photo-1516707570264-1f9b5ef9da33?auto=format&fit=crop&w=800&q=80',
    category: 'sports',
    stock: 40,
  },
];

const importProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany({ category: { $in: ['electronics', 'fashion', 'home', 'sports'] } });
    const createdProducts = await Product.insertMany(products);
    console.log(`Imported ${createdProducts.length} sample products`);
    process.exit();
  } catch (error) {
    console.error('Error importing products:', error);
    process.exit(1);
  }
};

importProducts();
