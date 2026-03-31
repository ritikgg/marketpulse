import { useState, useEffect } from 'react';
import type { Product } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL;
let cachedProducts: Product[] | null = null;

export function useProducts(category?: string) {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      if (cachedProducts) {
        const filtered = category
          ? cachedProducts.filter((product) => product.category === category)
          : cachedProducts;

        setProductList(filtered);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data: Product[] = await response.json();
        cachedProducts = data;
        const filtered = category
          ? data.filter((product) => product.category === category)
          : data;

        setProductList(filtered);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category]);

  return { products: productList, loading, error };
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (cachedProducts) {
        const foundProduct = cachedProducts.find((product) => product.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const data: Product[] = await response.json();
        cachedProducts = data;
        const foundProduct = data.find((product) => product.id === id);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return { product, loading, error };
}