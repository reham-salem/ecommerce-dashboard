import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products=signal<Product[]>([
     {
      id: 1,
      name: 'Laptop',
      price: 15000,
      description: 'لابتوب قوي للأعمال',
      imageUrl: 'https://via.placeholder.com/200',
      category: 'Electronics',
      stock: 10
    },
    {
      id: 2,
      name: 'Headphones',
      price: 800,
      description: 'سماعات لاسلكية',
      imageUrl: 'https://via.placeholder.com/200',
      category: 'Accessories',
      stock: 25
    }
  ])
 
  constructor() { }

  getProducts() {
    return this.products.asReadonly();
  }

  addProduct(product: Product) {
    this.products.update(items => [...items, product]); 
  }

  removeProduct(id: number) {
    this.products.update(items => items.filter(p => p.id !== id));
  }
}
