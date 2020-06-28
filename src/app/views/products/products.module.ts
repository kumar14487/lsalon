import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { TableModule } from 'primeng/table';
import { ProductRoutingModule } from './product.routing.module';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ProductRoutingModule,
    ModalModule.forRoot()
  ]
})
export class ProductsModule { }
