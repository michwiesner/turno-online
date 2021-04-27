import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsRecordsComponent } from './patients-records/patients-records.component';
import { PatientsComponent } from './patients/patients.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentsDayComponent } from './appointments-day/appointments-day.component';
import { ModalAppointmentsComponent } from './appointment-form/modalAppointments.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentFormComponent,
    ModalAppointmentsComponent,
    AppointmentsComponent,
    PatientsRecordsComponent,
    PatientsComponent,
    CalendarComponent,
    AppointmentsDayComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class DashboardModule { }
