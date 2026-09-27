import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-product-list',
    imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  private productService = inject(ProductsService);
  products = toSignal(this.productService.getProducts(), {
    initialValue: [] as Product[]
  });

  onAddToCart(product: Product) {
    console.log('تمت الإضافة للسلة:', product);
  }

}
