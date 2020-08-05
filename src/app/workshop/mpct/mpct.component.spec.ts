import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpctComponent } from './mpct.component';

describe('MpctComponent', () => {
  let component: MpctComponent;
  let fixture: ComponentFixture<MpctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
