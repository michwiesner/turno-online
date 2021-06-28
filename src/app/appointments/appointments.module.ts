import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentsFormComponent } from './appointments-form/appointments-form.component';
import { AppointmentsDayComponent } from './appointments-day/appointments-day.component';
import { AppointmentsMonthComponent } from './appointments-month/appointments-month.component';
import { ModalAppointmentsComponent } from './appointments-form/modalAppointments.component';
import { AppointmentsRoutingModule } from './appointments-routing.module';


@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentsDayComponent,
    AppointmentsMonthComponent,
    AppointmentsFormComponent,
    ModalAppointmentsComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    ModalAppointmentsComponent
  ]
})
export class AppointmentsModule { }
