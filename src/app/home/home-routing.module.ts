import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModalLoginComponent } from '../login/modalLogin.component';
import { ModalSignupComponent } from '../signup/modalSignup.component';
import { ModalResetComponent } from '../login/reset-password/modalReset.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { 
                path: 'login', component: ModalLoginComponent
            },
            {
                path: 'signup', component: ModalSignupComponent
            },
            {
                path: 'reset', component: ModalResetComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class HomeRoutingModule { }