import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../core/material/material.module';
import { CookieService } from 'ngx-cookie-service';
import { ProductsComponent } from './products/products.component';
import { ProductsFormComponent } from './products-form/products-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ],
  providers: [CookieService]
})
export class AdminModule { }
