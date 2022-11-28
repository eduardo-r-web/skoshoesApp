import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: any;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

}
