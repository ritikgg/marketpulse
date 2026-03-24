import React from 'react';

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'rating-desc';

interface ProductSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const ProductSort: React.FC<ProductSortProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="rounded-md border border-gray-300 py-1 pl-3 pr-8 text-sm focus:border-blue-500 focus:outline-none"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
        <option value="rating-desc">Highest Rated</option>
      </select>
    </div>
  );
};