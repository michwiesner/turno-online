import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalAppointmentsComponent } from '../appointments/appointments-form/modalAppointments.component';
import { PatientsRecordsComponent } from './patients-records/patients-records.component';

const routes: Routes = [
    { 
        path: '', component: PatientsRecordsComponent 
    },
    {
        path: 'patients-form/:id', component: ModalAppointmentsComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PatientsRoutingModule { }
