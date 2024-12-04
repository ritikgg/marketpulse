import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from './ui/Button';
import { formatPrice } from '../lib/utils';
import { useStore } from '../store/useStore';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="group relative rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-sm"
        >
          <Heart
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-500'}
            size={20}
          />
        </button>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center space-x-1">
            {'★'.repeat(Math.round(product.rating))}
            <span className="text-sm text-gray-500">({product.rating})</span>
          </div>
        </div>
        <Button
          onClick={() => addToCart(product)}
          className="w-full"
          disabled={product.stock === 0}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};