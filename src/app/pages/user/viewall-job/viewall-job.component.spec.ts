import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallJobComponent } from './viewall-job.component';

describe('ViewallJobComponent', () => {
  let component: ViewallJobComponent;
  let fixture: ComponentFixture<ViewallJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
