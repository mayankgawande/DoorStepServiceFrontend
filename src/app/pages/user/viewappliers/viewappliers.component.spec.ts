import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappliersComponent } from './viewappliers.component';

describe('ViewappliersComponent', () => {
  let component: ViewappliersComponent;
  let fixture: ComponentFixture<ViewappliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
