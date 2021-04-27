import { Injectable } from '@angular/core';
import { Appoinment, Appoinments } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  appos: Appoinment[] = [];
  constructor() { }
  
  createAppo(formData: Appoinment) {
    formData.createdAt = new Date();
    this.appos.push(formData);
  }

  getAllAppos() {}

  getTodayAppos(todayDate: string){
    
    return this.appos.filter(appo => {
      let date = new Date(appo.date.year, appo.date.month - 1, appo.date.day).toDateString();
      return date === todayDate;
    });
  }

  readAppo() {}

  updateAppo() {}

  deleteAppo() {}

}
