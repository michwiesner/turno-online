import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments-month',
  templateUrl: './appointments-month.component.html',
  styleUrls: ['./appointments-month.component.css']
})
export class AppointmentsMonthComponent implements OnInit {

  months = [
    { name: 'Enero', url: '', days: []},
    { name: 'Febrero', url: '', days: []},
    { name: 'Marzo', url: '', days: []},
    { name: 'Abril', url: '', days: []},
    { name: 'Mayo', url: '', days: []},
    { name: 'Junio', url: '', days: []},
    { name: 'Julio', url: '', days: []},
    { name: 'Agosto', url: '', days: []},
    { name: 'Septiembre', url: '', days: []},
    { name: 'Octubre', url: '', days: []},
    { name: 'Noviembre', url: '', days: []},
    { name: 'Diciembre', url: '', days: []},

  ]

  constructor() { }

  ngOnInit(): void {
  }
}
