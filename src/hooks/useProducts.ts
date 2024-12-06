import { useState, useEffect } from 'react';
import { products, getProductsByCategory, getProductById } from '../data/products';
import type { Product } from '../types';

export function useProducts(category?: string) {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProductList(category ? getProductsByCategory(category) : products);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products: productList, loading, error };
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const foundProduct = getProductById(id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}