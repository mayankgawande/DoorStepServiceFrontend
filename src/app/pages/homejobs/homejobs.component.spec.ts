import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomejobsComponent } from './homejobs.component';

describe('HomejobsComponent', () => {
  let component: HomejobsComponent;
  let fixture: ComponentFixture<HomejobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomejobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
