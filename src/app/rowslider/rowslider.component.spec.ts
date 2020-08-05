import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsliderComponent } from './rowslider.component';

describe('RowsliderComponent', () => {
  let component: RowsliderComponent;
  let fixture: ComponentFixture<RowsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
