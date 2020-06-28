import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { EmpRoutingModule } from './emp-routing.module';
import { EmpBaseComponent } from './emp-base/emp-base.component';
import { CommonTempModule } from '../../common-templates/common-temp.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [HomepageComponent, EmpBaseComponent],
  imports: [CommonModule, EmpRoutingModule, CommonTempModule, CarouselModule]
})
export class EmployeeModule {}
