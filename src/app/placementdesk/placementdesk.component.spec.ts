import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementdeskComponent } from './placementdesk.component';

describe('PlacementdeskComponent', () => {
  let component: PlacementdeskComponent;
  let fixture: ComponentFixture<PlacementdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
