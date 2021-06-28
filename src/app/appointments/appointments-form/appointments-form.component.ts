import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppointmentsService } from 'src/app/functions/services/appointments.service';

@Component({
  selector: 'app-appoinments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.css']
})
export class AppointmentsFormComponent implements OnInit {

  appointmentForm: FormGroup;
  constructor(private apposService: AppointmentsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

    this.appointmentForm = new FormGroup({
      name: new FormControl(''),
      dni: new FormControl(null),
      insurance: new FormControl(''),
      insuranceNum: new FormControl(''),
      contact: new FormControl(''),
      date: new FormControl(''),
      hour: new FormControl(''),
      status: new FormControl('')
    });
  }

  submit() {

    this.apposService.createAppo(this.appointmentForm.value);
    console.log(this.appointmentForm.value);
    
  }

}
