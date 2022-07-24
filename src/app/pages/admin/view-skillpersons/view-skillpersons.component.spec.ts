import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSkillpersonsComponent } from './view-skillpersons.component';

describe('ViewSkillpersonsComponent', () => {
  let component: ViewSkillpersonsComponent;
  let fixture: ComponentFixture<ViewSkillpersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSkillpersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSkillpersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
