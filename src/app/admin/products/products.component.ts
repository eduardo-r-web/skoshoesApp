import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductsFormComponent } from '../products-form/products-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: any
  constructor( 
    private productsService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  openDialog() {
    this.dialog.open(ProductsFormComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

}
