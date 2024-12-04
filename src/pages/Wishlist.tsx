import React from 'react';
import { useStore } from '../store/useStore';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Wishlist: React.FC = () => {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-16">
        <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
        <p className="text-gray-600">Save items you'd like to purchase later</p>
        <Link to="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <Link to="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};