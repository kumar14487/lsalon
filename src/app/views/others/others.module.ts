import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersComponent } from './others.component';
import { OthersRoutingModule } from './others.routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CareerComponent } from './career/career.component';



@NgModule({
  declarations: [OthersComponent, CareerComponent],
  imports: [
    CommonModule,
    OthersRoutingModule,
    TableModule,
    CalendarModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class OthersModule { }
