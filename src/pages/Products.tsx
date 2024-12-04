import React, { useState } from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilters } from '../components/products/ProductFilters';
import { ProductSort } from '../components/products/ProductSort';
import { useProducts } from '../hooks/useProducts';
import type { Product } from '../types';

const categories = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'home', name: 'Home' },
  { id: 'sports', name: 'Sports' },
];

export const Products: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'rating-desc'>('rating-desc');

  const filteredProducts = React.useMemo(() => {
    return products
      .filter(
        (product) =>
          (!selectedCategory || product.category === selectedCategory) &&
          product.price >= priceRange[0] &&
          product.price <= priceRange[1]
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          case 'rating-desc':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
  }, [products, selectedCategory, priceRange, sortBy]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex gap-8">
      <aside className="w-64 shrink-0">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
      </aside>
      <div className="flex-1">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Products</h1>
          <ProductSort value={sortBy} onChange={setSortBy} />
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};