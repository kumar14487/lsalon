import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NiceSelectModule } from 'ng-nice-select';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BookingFormComponent,
    MakeAppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CalendarModule,
    MultiSelectModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NiceSelectModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BookingFormComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CommonTempModule {}
