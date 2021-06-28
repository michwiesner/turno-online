import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.css']
})
export class AboutYouComponent implements OnInit {

  aboutForm: FormGroup;
  cortado: boolean;
  stepControl: number = 0;
  previousDisabled = true;
  nextDisabled: boolean;

  steps = [
    { step: 0, title: 'Datos', icon: 'bi bi-person-badge'},
    { step: 1, title: 'Horarios', icon: 'bi bi-clock'},
    { step: 2, title: 'Turnos', icon: 'bi bi-stopwatch'},
    { step: 3, title: 'Listo', icon: 'bi bi-check2'},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.aboutForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      area: new FormControl(),
      startHour: new FormControl(),
      finishHour: new FormControl(),
      cortado: new FormControl(),
      cortadoStart: new FormControl(),
      cortadoFinish: new FormControl(),
      timePerTurn: new FormControl()
    })
  }

  doSomething() {
    console.log(this.aboutForm.value);
    this.router.navigateByUrl('/doctor');
  }

  setStep(step:number, nextStep?: number) {

    nextStep ? this.stepControl += nextStep : this.stepControl = step;
    if (this.stepControl === 0) {
      this.stepControl = 0;
      this.previousDisabled = true;
    } else {
      this.previousDisabled = false;
    }

    if (this.stepControl >= 3) {
      this.stepControl = 3;
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }

}
