import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmappedjobsComponent } from './viewmappedjobs.component';

describe('ViewmappedjobsComponent', () => {
  let component: ViewmappedjobsComponent;
  let fixture: ComponentFixture<ViewmappedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmappedjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmappedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
