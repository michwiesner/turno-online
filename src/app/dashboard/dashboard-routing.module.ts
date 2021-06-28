import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { HelpComponent } from '../shared/help/help.component';
import { ConfigComponent } from '../shared/config/config.component';

const routes: Routes = [
    {
        path: 'doctor', component: DashboardComponent,
        children: [
            {
                path: '', 
                loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarModule)
            },
            {
                path: 'appointments',
                loadChildren: () => import('../appointments/appointments.module').then(m => m.AppointmentsModule)
            },
            {
                path: 'patients', 
                loadChildren: () => import('../patients/patients.module').then(m => m.PatientsModule)
            },
            {
                path: 'profile', component: ProfileComponent
            },
            {
                path: 'help', component: HelpComponent
            },
            {
                path: 'settings', component: ConfigComponent
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class DashboardRoutingModule { }