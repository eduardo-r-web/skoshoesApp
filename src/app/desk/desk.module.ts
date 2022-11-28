import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeskRoutingModule } from './desk-routing.module';
import { DeskComponent } from './desk.component';
import { MaterialModule } from '../core/material/material.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    DeskComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    DeskRoutingModule,
    MaterialModule
  ]
})
export class DeskModule { }
