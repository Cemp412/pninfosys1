import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BentchairComponent } from './bentchair.component';

describe('BentchairComponent', () => {
  let component: BentchairComponent;
  let fixture: ComponentFixture<BentchairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BentchairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BentchairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
