import { electronics } from './electronics';
import { fashion } from './fashion';
import { home } from './home';
import { sports } from './sports';
import type { Product } from '../../types';

export const products: Product[] = [
  ...electronics,
  ...fashion,
  ...home,
  ...sports,
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};