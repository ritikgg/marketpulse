import type { Product } from '../../types';

export const home: Product[] = [
  {
    id: 'h1',
    name: 'Smart Coffee Maker',
    description: 'Start your day right with this programmable coffee maker. Features smartphone control, multiple brew settings, and built-in grinder. Perfect for coffee enthusiasts.',
    price: 199.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    stock: 30,
    rating: 4.7,
    variants: ['Black/Silver', 'All Black'],
    specifications: {
      capacity: '12 cups',
      grinder: 'Burr Grinder',
      features: 'App Control',
    }
  },
  {
    id: 'h2',
    name: 'Luxury Bedding Set',
    description: 'Transform your bedroom with this premium bedding set. Features 100% Egyptian cotton, 1000 thread count, and elegant design. Perfect for a luxurious night\'s sleep.',
    price: 249.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    stock: 25,
    rating: 4.8,
    variants: ['White', 'Gray', 'Navy'],
    specifications: {
      material: 'Egyptian Cotton',
      threadCount: 1000,
      sizes: ['Queen', 'King'],
    }
  },
  {
    id: 'h3',
    name: 'Modern Floor Lamp',
    description: 'Illuminate your space with this contemporary floor lamp. Features adjustable brightness, color temperature control, and minimalist design. Perfect for any modern interior.',
    price: 159.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    stock: 20,
    rating: 4.6,
    variants: ['Black', 'White', 'Gold'],
    specifications: {
      height: '65 inches',
      bulbType: 'LED',
      wattage: '12W',
    }
  },
  {
    id: 'h4',
    name: 'Air Purifier',
    description: 'Breathe cleaner air with this advanced air purifier. Features HEPA filtration, air quality monitor, and quiet operation. Perfect for bedrooms and living spaces.',
    price: 299.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1626436669234-8fce421dc733',
    stock: 35,
    rating: 4.8,
    variants: ['White', 'Gray'],
    specifications: {
      coverage: '500 sq ft',
      filter: 'True HEPA',
      noise: '24-54dB',
    }
  },
  {
    id: 'h5',
    name: 'Ceramic Dinner Set',
    description: 'Elevate your dining experience with this elegant dinner set. Features hand-glazed finish, service for 6, and modern design. Perfect for everyday use and entertaining.',
    price: 179.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0',
    stock: 40,
    rating: 4.7,
    variants: ['White', 'Gray', 'Blue'],
    specifications: {
      pieces: '18-piece set',
      material: 'Porcelain',
      dishwasher: 'Safe',
    }
  },
  {
    id: 'h6',
    name: 'Robot Vacuum',
    description: 'Keep your floors clean effortlessly with this smart robot vacuum. Features mapping technology, app control, and automatic charging. Perfect for busy households.',
    price: 399.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1589894404892-7310b92ea7fd',
    stock: 15,
    rating: 4.6,
    variants: ['Black', 'White'],
    specifications: {
      runtime: '120 minutes',
      suction: '2500Pa',
      features: 'Mapping, App Control',
    }
  },
  {
    id: 'h7',
    name: 'Luxury Throw Blanket',
    description: 'Add comfort and style with this premium throw blanket. Features ultra-soft fabric, elegant design, and perfect weight. Ideal for cozy evenings and décor.',
    price: 89.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6',
    stock: 50,
    rating: 4.7,
    variants: ['Gray', 'Navy', 'Cream'],
    specifications: {
      material: 'Premium Microfiber',
      size: '50" x 60"',
      care: 'Machine Washable',
    }
  },
  {
    id: 'h8',
    name: 'Smart Door Lock',
    description: 'Secure your home with this advanced smart lock. Features keyless entry, smartphone control, and activity monitoring. Perfect for modern home security.',
    price: 249.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827',
    stock: 25,
    rating: 4.8,
    variants: ['Silver', 'Black'],
    specifications: {
      power: 'Battery',
      connectivity: 'Wi-Fi, Bluetooth',
      features: 'App Control, Guest Access',
    }
  },
  {
    id: 'h9',
    name: 'Aromatherapy Diffuser',
    description: 'Create the perfect ambiance with this ultrasonic diffuser. Features LED mood lighting, multiple mist settings, and quiet operation. Perfect for any room.',
    price: 59.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0',
    stock: 60,
    rating: 4.5,
    variants: ['White', 'Wood Grain'],
    specifications: {
      capacity: '300ml',
      runtime: '10 hours',
      features: 'Auto Shutoff',
    }
  },
  {
    id: 'h10',
    name: 'Kitchen Knife Set',
    description: 'Enhance your cooking with this professional knife set. Features German steel, ergonomic handles, and wooden block. Perfect for home chefs and cooking enthusiasts.',
    price: 299.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546',
    stock: 20,
    rating: 4.9,
    variants: ['Classic', 'Premium'],
    specifications: {
      pieces: '15-piece set',
      material: 'German Steel',
      block: 'Acacia Wood',
    }
  }
];