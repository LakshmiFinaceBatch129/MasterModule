import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewElectronicsItemComponent } from './view-electronics-item.component';

describe('ViewElectronicsItemComponent', () => {
  let component: ViewElectronicsItemComponent;
  let fixture: ComponentFixture<ViewElectronicsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewElectronicsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewElectronicsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
