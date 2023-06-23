import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$!: Observable<Product[]>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAll();

  }


}
