import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcategorypersonComponent } from './viewcategoryperson.component';

describe('ViewcategorypersonComponent', () => {
  let component: ViewcategorypersonComponent;
  let fixture: ComponentFixture<ViewcategorypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcategorypersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcategorypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
