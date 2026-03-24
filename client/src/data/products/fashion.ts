import type { Product } from '../../types';

export const fashion: Product[] = [
  {
    id: 'f1',
    name: 'Premium Leather Jacket',
    description: 'Timeless style meets modern comfort in this genuine leather jacket. Features butter-soft leather, quilted lining, and multiple pockets. Perfect for any casual or semi-formal occasion.',
    price: 299.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
    stock: 20,
    rating: 4.7,
    variants: ['Black', 'Brown', 'Cognac'],
    specifications: {
      material: 'Genuine Leather',
      sizes: ['S', 'M', 'L', 'XL'],
      care: 'Professional Clean',
    }
  },
  {
    id: 'f2',
    name: 'Designer Sunglasses',
    description: 'Protect your eyes in style with these premium sunglasses. Features polarized lenses, UV protection, and lightweight frame. Perfect for everyday wear and outdoor activities.',
    price: 159.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
    stock: 30,
    rating: 4.6,
    variants: ['Black/Gold', 'Tortoise/Silver'],
    specifications: {
      protection: 'UV400',
      material: 'Acetate Frame',
      lenses: 'Polarized',
    }
  },
  {
    id: 'f3',
    name: 'Wool Blend Overcoat',
    description: 'Stay warm and stylish with this classic overcoat. Features premium wool blend fabric, full lining, and tailored fit. Perfect for professional and formal occasions.',
    price: 249.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1544923246-77307b4754fe',
    stock: 15,
    rating: 4.8,
    variants: ['Charcoal', 'Navy', 'Camel'],
    specifications: {
      material: '70% Wool, 30% Polyester',
      sizes: ['S', 'M', 'L', 'XL'],
      care: 'Dry Clean Only',
    }
  },
  {
    id: 'f4',
    name: 'Premium Dress Watch',
    description: 'Elevate any outfit with this sophisticated timepiece. Features Swiss movement, sapphire crystal, and genuine leather strap. Perfect for both business and formal wear.',
    price: 399.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
    stock: 25,
    rating: 4.9,
    variants: ['Silver/Black', 'Gold/Brown'],
    specifications: {
      movement: 'Swiss Quartz',
      waterResistance: '5ATM',
      case: '40mm',
    }
  },
  {
    id: 'f5',
    name: 'Designer Tote Bag',
    description: 'Carry your essentials in style with this premium tote bag. Features genuine leather, multiple compartments, and laptop sleeve. Perfect for work or weekend outings.',
    price: 199.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    stock: 40,
    rating: 4.7,
    variants: ['Black', 'Tan', 'Navy'],
    specifications: {
      material: 'Full Grain Leather',
      size: '14" x 11" x 5"',
      capacity: '15L',
    }
  },
  {
    id: 'f6',
    name: 'Premium Sneakers',
    description: 'Step out in style with these premium leather sneakers. Features Italian leather, cushioned insoles, and versatile design. Perfect for casual and smart casual outfits.',
    price: 179.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    stock: 50,
    rating: 4.6,
    variants: ['White', 'Black', 'Navy'],
    specifications: {
      material: 'Italian Leather',
      sizes: ['7-13'],
      sole: 'Rubber',
    }
  },
  {
    id: 'f7',
    name: 'Silk Scarf',
    description: 'Add elegance to any outfit with this luxurious silk scarf. Features hand-rolled edges and exclusive print design. Perfect for both casual and formal occasions.',
    price: 89.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26',
    stock: 35,
    rating: 4.5,
    variants: ['Floral', 'Geometric', 'Abstract'],
    specifications: {
      material: '100% Silk',
      size: '36" x 36"',
      care: 'Hand Wash',
    }
  },
  {
    id: 'f8',
    name: 'Leather Belt',
    description: 'Complete your look with this premium leather belt. Features full-grain leather, classic buckle, and timeless design. Perfect for both casual and formal wear.',
    price: 69.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931',
    stock: 60,
    rating: 4.7,
    variants: ['Black', 'Brown', 'Tan'],
    specifications: {
      material: 'Full Grain Leather',
      sizes: ['32-44'],
      buckle: 'Solid Brass',
    }
  },
  {
    id: 'f9',
    name: 'Cashmere Sweater',
    description: 'Experience luxury comfort with this pure cashmere sweater. Features premium Mongolian cashmere and classic crew neck design. Perfect for cool weather elegance.',
    price: 249.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    stock: 25,
    rating: 4.8,
    variants: ['Gray', 'Navy', 'Burgundy'],
    specifications: {
      material: '100% Cashmere',
      sizes: ['S', 'M', 'L', 'XL'],
      care: 'Dry Clean Only',
    }
  },
  {
    id: 'f10',
    name: 'Designer Wallet',
    description: 'Organize your essentials with this premium leather wallet. Features RFID protection, multiple card slots, and slim design. Perfect for everyday carry.',
    price: 79.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93',
    stock: 45,
    rating: 4.6,
    variants: ['Black', 'Brown'],
    specifications: {
      material: 'Genuine Leather',
      size: '4.5" x 3.5"',
      features: 'RFID Blocking',
    }
  }
];