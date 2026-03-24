import type { Product } from '../../types';

export const sports: Product[] = [
  {
    id: 's1',
    name: 'Carbon Fiber Road Bike',
    description: 'Experience premium cycling with this lightweight road bike. Features carbon fiber frame, electronic shifting, and aerodynamic design. Perfect for serious cyclists and competitors.',
    price: 2499.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e',
    stock: 10,
    rating: 4.9,
    variants: ['54cm', '56cm', '58cm'],
    specifications: {
      frame: 'Carbon Fiber',
      groupset: 'Shimano Ultegra',
      weight: '7.8kg',
    }
  },
  {
    id: 's2',
    name: 'Smart Yoga Mat',
    description: 'Enhance your practice with this innovative yoga mat. Features alignment guides, non-slip surface, and eco-friendly materials. Perfect for yogis of all levels.',
    price: 99.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
    stock: 45,
    rating: 4.7,
    variants: ['Purple', 'Blue', 'Gray'],
    specifications: {
      thickness: '5mm',
      material: 'Eco TPE',
      size: '72" x 26"',
    }
  },
  {
    id: 's3',
    name: 'Tennis Racket Pro',
    description: 'Dominate the court with this professional tennis racket. Features advanced string pattern, perfect balance, and power frame. Ideal for competitive players.',
    price: 199.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6',
    stock: 30,
    rating: 4.8,
    variants: ['27"', '27.5"'],
    specifications: {
      weight: '300g',
      headSize: '98 sq in',
      string: '16x19 Pattern',
    }
  },
  {
    id: 's4',
    name: 'Golf Club Set',
    description: 'Improve your game with this complete golf club set. Features titanium driver, cavity back irons, and premium putter. Perfect for intermediate to advanced golfers.',
    price: 899.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b',
    stock: 15,
    rating: 4.8,
    variants: ['Right Hand', 'Left Hand'],
    specifications: {
      clubs: '14-piece set',
      shaft: 'Graphite/Steel',
      includes: 'Stand Bag',
    }
  },
  {
    id: 's5',
    name: 'Basketball Pro',
    description: 'Play like a pro with this official basketball. Features premium composite leather, optimal grip, and perfect bounce. Ideal for indoor and outdoor play.',
    price: 49.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf',
    stock: 75,
    rating: 4.6,
    variants: ['Official Size 7', 'Size 6'],
    specifications: {
      material: 'Composite Leather',
      size: '29.5"',
      type: 'Indoor/Outdoor',
    }
  },
  {
    id: 's6',
    name: 'Swimming Goggles Elite',
    description: 'See clearly underwater with these professional swimming goggles. Features anti-fog coating, UV protection, and comfortable seal. Perfect for training and competition.',
    price: 39.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318',
    stock: 100,
    rating: 4.7,
    variants: ['Black', 'Blue', 'Smoke'],
    specifications: {
      lens: 'Polycarbonate',
      strap: 'Silicone',
      features: 'Anti-fog, UV Protection',
    }
  },
  {
    id: 's7',
    name: 'Boxing Gloves Pro',
    description: 'Train hard with these premium boxing gloves. Features genuine leather, multi-layer foam padding, and secure wrist support. Perfect for training and sparring.',
    price: 89.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee',
    stock: 40,
    rating: 4.8,
    variants: ['12oz', '14oz', '16oz'],
    specifications: {
      material: 'Genuine Leather',
      padding: 'Multi-Layer Foam',
      closure: 'Hook & Loop',
    }
  },
  {
    id: 's8',
    name: 'Hiking Backpack',
    description: 'Adventure comfortably with this professional hiking backpack. Features waterproof material, multiple compartments, and ergonomic design. Perfect for long trails.',
    price: 149.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb60154',
    stock: 35,
    rating: 4.7,
    variants: ['45L', '60L'],
    specifications: {
      material: 'Ripstop Nylon',
      capacity: '45L/60L',
      features: 'Rain Cover, Hydration Compatible',
    }
  },
  {
    id: 's9',
    name: 'Soccer Ball Elite',
    description: 'Play with precision using this professional soccer ball. Features thermal bonded panels, premium materials, and FIFA quality certification. Ideal for matches and training.',
    price: 59.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab',
    stock: 60,
    rating: 4.6,
    variants: ['Size 5', 'Size 4'],
    specifications: {
      material: 'Polyurethane',
      construction: 'Thermal Bonded',
      certification: 'FIFA Quality',
    }
  },
  {
    id: 's10',
    name: 'Climbing Harness',
    description: 'Stay safe while climbing with this professional harness. Features padded waist and legs, quick-adjust buckles, and durable construction. Perfect for indoor and outdoor climbing.',
    price: 79.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851',
    stock: 25,
    rating: 4.8,
    variants: ['S/M', 'L/XL'],
    specifications: {
      material: 'Nylon',
      certification: 'CE Certified',
      weight: '380g',
    }
  }
];