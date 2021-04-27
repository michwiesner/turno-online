import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { HelpComponent } from './help/help.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { DirectivesModule } from '../functions/directives/directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfigComponent, 
    HelpComponent, 
    ProfileComponent, 
    NavbarComponent, 
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ConfigComponent, 
    HelpComponent, 
    ProfileComponent, 
    NavbarComponent, 
    SidebarComponent
  ]
})
export class SharedModule { }
