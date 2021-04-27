import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { SignupComponent } from './signup.component';


@Component({
  selector: 'app-modal-container',
  template: ''
})
export class ModalSignupComponent implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog = null;

  modalOptions: NgbModalOptions;

  constructor( private modalService: NgbModal,
               route: ActivatedRoute,
               private location: Location ) {
    this.modalOptions = {
       // backdrop: 'static',
        backdropClass: 'customBackdrop',
        centered: true
      };
    route.params.pipe(takeUntil(this.destroy)).subscribe(() => {

        // When router navigates on this component is takes the params and opens up the photo detail modal
        this.currentDialog = this.modalService.open(SignupComponent, this.modalOptions).result.then((result) => {},
                      (reason) => {
                        if (reason === ModalDismissReasons.BACKDROP_CLICK) {
                          this.location.back();
                        }
        });
    });
  }

  ngOnDestroy() {
    this.modalService.dismissAll();
  }
}