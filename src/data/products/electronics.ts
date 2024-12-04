import type { Product } from '../../types';

export const electronics: Product[] = [
  {
    id: 'e1',
    name: 'Premium Noise-Cancelling Headphones',
    description: 'Experience pure audio bliss with our flagship wireless headphones. Features adaptive noise cancellation, 40-hour battery life, and premium leather cushions. Perfect for immersive music, podcasts, or focused work sessions.',
    price: 349.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    stock: 25,
    rating: 4.8,
    variants: ['Black', 'Silver', 'Midnight Blue'],
    specifications: {
      batteryLife: '40 hours',
      connectivity: 'Bluetooth 5.2',
      weight: '250g',
    }
  },
  {
    id: 'e2',
    name: 'Ultra-Slim 4K Laptop',
    description: 'Powerhouse performance meets elegant design. Features a stunning 15.6" 4K display, latest-gen processor, and all-day battery life. Perfect for creative professionals and power users who demand the best.',
    price: 1299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    stock: 10,
    rating: 4.9,
    variants: ['Space Gray', 'Silver'],
    specifications: {
      processor: 'Intel i9 12th Gen',
      ram: '32GB',
      storage: '1TB SSD',
    }
  },
  {
    id: 'e3',
    name: 'Smart Fitness Watch',
    description: 'Track your health and stay connected with this advanced fitness companion. Features continuous heart rate monitoring, GPS tracking, and 20+ sport modes. Water-resistant and perfect for any activity.',
    price: 199.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    stock: 50,
    rating: 4.7,
    variants: ['Black', 'White', 'Rose Gold'],
    specifications: {
      batteryLife: '7 days',
      waterResistance: '5ATM',
      display: 'AMOLED',
    }
  },
  {
    id: 'e4',
    name: 'Professional Camera Drone',
    description: 'Capture stunning aerial footage with this professional-grade drone. Features 4K camera stabilization, 30-minute flight time, and intelligent flight modes. Perfect for photographers and videographers.',
    price: 799.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9',
    stock: 15,
    rating: 4.6,
    variants: ['Standard', 'Pro Bundle'],
    specifications: {
      camera: '4K 60fps',
      flightTime: '30 minutes',
      range: '10km',
    }
  },
  {
    id: 'e5',
    name: 'Smart Home Security Camera',
    description: 'Keep your home safe with this advanced security camera. Features 2K HDR video, night vision, and AI-powered person detection. Easy to install and connects seamlessly with your smart home.',
    price: 149.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb',
    stock: 30,
    rating: 4.5,
    variants: ['Indoor', 'Outdoor'],
    specifications: {
      resolution: '2K HDR',
      storage: 'Cloud + Local',
      nightVision: '30ft',
    }
  },
  {
    id: 'e6',
    name: 'Wireless Gaming Mouse',
    description: 'Dominate your games with this premium wireless gaming mouse. Features ultra-low latency, 25,000 DPI sensor, and RGB lighting. Ergonomic design for extended gaming sessions.',
    price: 129.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
    stock: 40,
    rating: 4.7,
    variants: ['Black', 'White'],
    specifications: {
      sensor: '25K DPI',
      batteryLife: '70 hours',
      weight: '80g',
    }
  },
  {
    id: 'e7',
    name: 'Smart 4K TV',
    description: 'Transform your living room with this stunning 65" 4K smart TV. Features QLED technology, Dolby Vision, and built-in voice assistant. Perfect for movies, gaming, and sports.',
    price: 999.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    stock: 20,
    rating: 4.8,
    variants: ['55"', '65"', '75"'],
    specifications: {
      resolution: '4K UHD',
      hdr: 'Dolby Vision',
      refresh: '120Hz',
    }
  },
  {
    id: 'e8',
    name: 'Portable Power Bank',
    description: 'Never run out of power with this high-capacity power bank. Features 26800mAh capacity, fast charging, and multiple ports. Perfect for travel and everyday carry.',
    price: 49.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1609592786331-b7f6f469d1b4',
    stock: 100,
    rating: 4.6,
    variants: ['Black', 'White'],
    specifications: {
      capacity: '26800mAh',
      ports: 'USB-C, 2x USB-A',
      charging: '65W',
    }
  },
  {
    id: 'e9',
    name: 'Wireless Earbuds',
    description: 'Experience true wireless freedom with these premium earbuds. Features active noise cancellation, water resistance, and wireless charging case. Perfect for workouts and daily use.',
    price: 179.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
    stock: 45,
    rating: 4.7,
    variants: ['Black', 'White', 'Navy'],
    specifications: {
      batteryLife: '6h + 24h case',
      waterResistance: 'IPX4',
      connectivity: 'Bluetooth 5.2',
    }
  },
  {
    id: 'e10',
    name: 'Smart Home Hub',
    description: 'Control your entire smart home from one device. Features voice control, automation support, and compatibility with major smart home brands. Easy to set up and use.',
    price: 129.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126',
    stock: 35,
    rating: 4.5,
    variants: ['Black', 'White'],
    specifications: {
      compatibility: 'Alexa, Google Assistant',
      connectivity: 'Wi-Fi, Bluetooth',
      display: '7" touchscreen',
    }
  }
];