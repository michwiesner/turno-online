import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointments-day',
  templateUrl: './appointments-day.component.html',
  styleUrls: ['./appointments-day.component.css']
})
export class AppointmentsDayComponent implements OnInit {

  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  days = [
    { day: '1', appointments: 2 },
    { day: '2', appointments: 0 },
    { day: '3', appointments: 6 },
    { day: '4', appointments: 5 },
    { day: '5', appointments: 0 },
    { day: '6', appointments: 0 },
    { day: '7', appointments: 4 },
    { day: '8', appointments: 34 },
    { day: '9', appointments: 10 },
    { day: '10', appointments: 0 },
    { day: '11', appointments: 3 },
    { day: '12', appointments: 0 },
    { day: '13', appointments: 0 },
    { day: '14', appointments: 5 },
    { day: '15', appointments: 10 },
    { day: '16', appointments: 20 },
    { day: '17', appointments: 0 },
    { day: '18', appointments: 9 },
    { day: '19', appointments: 0 },
    { day: '20', appointments: 0 },
    { day: '21', appointments: 33 },
    { day: '22', appointments: 4 },
    { day: '23', appointments: 4 },
    { day: '24', appointments: 8 },
    { day: '25', appointments: 14 },
    { day: '26', appointments: 0 },
    { day: '27', appointments: 0 },
    { day: '28', appointments: 3 },
    { day: '29', appointments: 7 },
    { day: '30', appointments: 8 },
    { day: '31', appointments: 2 },
  ];

  param: number;

  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.param = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  goBack() {
    this.location.back();
  }

}
