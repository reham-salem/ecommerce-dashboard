import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http=inject(HttpClient);
  private apiUrl = 'http://localhost:3000/products';
 
  constructor() { }

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: Omit<Product, 'id'>) {
    return this.http.post<Product>(this.apiUrl,product);
  }

  removeProduct(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
