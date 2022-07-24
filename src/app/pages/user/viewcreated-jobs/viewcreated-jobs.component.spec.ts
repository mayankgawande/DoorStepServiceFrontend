import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcreatedJobsComponent } from './viewcreated-jobs.component';

describe('ViewcreatedJobsComponent', () => {
  let component: ViewcreatedJobsComponent;
  let fixture: ComponentFixture<ViewcreatedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcreatedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcreatedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
