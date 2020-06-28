import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ServicesRoutingModule } from './services.routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { OverlayPanelModule } from 'primeng/overlaypanel';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ServicesRoutingModule,
    TableModule,
    ModalModule.forRoot(),
    OverlayPanelModule
  ],
  providers: []
})
export class ServicesModule { }
