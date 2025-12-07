// src/types/Product.ts

export interface Product {
  id: number;
  name: string;
  vietnameseName: string;
  
  // Dùng Union Type thay vì string thường để tránh gõ sai chính tả
  category: 'clothing' | 'bags' | 'accessories' | string; 
  
  price: number;
  discountPercentage: number;
  rating: number;
  isNew: boolean;
  description: string;
  imageUrl: string;
}