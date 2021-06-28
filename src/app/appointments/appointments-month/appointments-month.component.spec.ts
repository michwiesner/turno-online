import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsMonthComponent } from './appointments-month.component';

describe('AppoinmentsMonthComponent', () => {
  let component: AppointmentsMonthComponent;
  let fixture: ComponentFixture<AppointmentsMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
