import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjobpersonComponent } from './viewjobperson.component';

describe('ViewjobpersonComponent', () => {
  let component: ViewjobpersonComponent;
  let fixture: ComponentFixture<ViewjobpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewjobpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewjobpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
