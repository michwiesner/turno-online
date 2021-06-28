import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsFormComponent } from './appointments-form.component';

describe('AppoinmentsFormComponent', () => {
  let component: AppointmentsFormComponent;
  let fixture: ComponentFixture<AppointmentsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
