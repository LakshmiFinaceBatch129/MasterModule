import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsItemComponent } from './electronics-item.component';

describe('ElectronicsItemComponent', () => {
  let component: ElectronicsItemComponent;
  let fixture: ComponentFixture<ElectronicsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
