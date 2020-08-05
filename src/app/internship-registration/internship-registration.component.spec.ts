import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipRegistrationComponent } from './internship-registration.component';

describe('InternshipRegistrationComponent', () => {
  let component: InternshipRegistrationComponent;
  let fixture: ComponentFixture<InternshipRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
