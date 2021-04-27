import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  radioGroupForm: FormGroup;

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
    this.initButtons();
  }

  initButtons() {
    this.radioGroupForm = new FormGroup({
      model: new FormControl(1)
    });
  }

}
