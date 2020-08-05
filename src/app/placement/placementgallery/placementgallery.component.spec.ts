import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementgalleryComponent } from './placementgallery.component';

describe('PlacementgalleryComponent', () => {
  let component: PlacementgalleryComponent;
  let fixture: ComponentFixture<PlacementgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
