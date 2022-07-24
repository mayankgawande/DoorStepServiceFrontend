import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPersonRegisterComponent } from './skill-person-register.component';

describe('SkillPersonRegisterComponent', () => {
  let component: SkillPersonRegisterComponent;
  let fixture: ComponentFixture<SkillPersonRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillPersonRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPersonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
