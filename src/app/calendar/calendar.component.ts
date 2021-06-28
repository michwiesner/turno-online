import { Component, OnInit } from '@angular/core';
import { Appoinment } from '../functions/models/appointment.model';
import { AppointmentsService } from '../functions/services/appointments.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  appos: Appoinment[] = [];
  constructor(private appoService: AppointmentsService) { }

  ngOnInit(): void {
    this.getTodayAppo();
  }
  
  getTodayAppo() {
    let today = new Date().toDateString();
    this.appos = this.appoService.getTodayAppos(today);

  }

}
