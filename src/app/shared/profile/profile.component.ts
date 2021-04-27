import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  modalOptions: NgbModalOptions;
  cortado: boolean;

  avatars = [
    { alt: 'no-image', option: 'default'},
    { alt: 'profile-option-1', option: 'opcion1'},
    { alt: 'profile-option-2', option: 'opcion2'},
    { alt: 'profile-option-3', option: 'opcion3'},
    { alt: 'profile-option-4', option: 'opcion4'},
    { alt: 'profile-option-5', option: 'opcion5'},
    { alt: 'profile-option-6', option: 'opcion6'},
    { alt: 'profile-option-7', option: 'opcion7'},
    { alt: 'profile-option-8', option: 'opcion8'},
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl(''),
      area: new FormControl(''),
      startHour: new FormControl(''),
      finishHour: new FormControl(''),
      cortado: new FormControl(''),
      cortadoStart: new FormControl(''),
      cortadoFinish: new FormControl(''),
      timePerTurn: new FormControl('')
    });
  }

  submit() {
    console.log(this.profileForm.value);
  }

  selectAvatar(content) {
    this.modalOptions = {
      // backdrop: 'static',
      backdropClass: 'customBackdrop',
      centered: true
    };
    this.modalService.open(content, this.modalOptions)
  }

  selection(index) {
    // console.log(index);
  }

}
