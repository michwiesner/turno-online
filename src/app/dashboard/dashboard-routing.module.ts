import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsRecordsComponent } from './patients-records/patients-records.component';
import { HelpComponent } from '../shared/help/help.component';
import { ConfigComponent } from '../shared/config/config.component';
import { AppointmentsDayComponent } from './appointments-day/appointments-day.component';
import { ModalAppointmentsComponent } from './appointment-form/modalAppointments.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            {
                path: '', component: CalendarComponent
            },
            {
                path: 'profile', component: ProfileComponent
            },
            {
                path: 'appointments', component: AppointmentsComponent
            },
            {
                path: 'appointments-days/:id', component: AppointmentsDayComponent
            },
            {
                path: 'patients', component: PatientsRecordsComponent
            },
            {
                path: 'patients-form/:id', component: ModalAppointmentsComponent
            },
            {
                path: 'help', component: HelpComponent
            },
            {
                path: 'settings', component: ConfigComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class DashboardRoutingModule { }