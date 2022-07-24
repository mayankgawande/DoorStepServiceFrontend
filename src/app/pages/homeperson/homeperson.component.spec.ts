import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepersonComponent } from './homeperson.component';

describe('HomepersonComponent', () => {
  let component: HomepersonComponent;
  let fixture: ComponentFixture<HomepersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
