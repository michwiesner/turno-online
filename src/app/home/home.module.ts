import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';

// home
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

// components
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GoalsComponent } from './goals/goals.component';
import { IntroductionComponent } from './introduction/introduction.component';

// Child's modules
import { LoginModule } from '../login/login.module';
import { SignupModule } from '../signup/signup.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    FooterComponent,
    GoalsComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    SignupModule,
    DashboardModule
  ]
})
export class HomeModule { }
