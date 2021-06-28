import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsDayComponent } from './appointments-day/appointments-day.component';
import { ModalAppointmentsComponent } from './appointments-form/modalAppointments.component';
import { AppointmentsMonthComponent } from './appointments-month/appointments-month.component';
import { AppointmentsComponent } from './appointments.component';

const routes: Routes = [
    {
        path: '', component: AppointmentsComponent,
        children: [
            {
                path: '', component: AppointmentsMonthComponent
            },
            {
                path: 'appointments-days/:id', component: AppointmentsDayComponent
            }
        ]
    },
    {
        path: 'patients-form/:id', component: ModalAppointmentsComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class AppointmentsRoutingModule { }