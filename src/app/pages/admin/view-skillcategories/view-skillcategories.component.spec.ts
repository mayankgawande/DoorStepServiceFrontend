import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSkillcategoriesComponent } from './view-skillcategories.component';

describe('ViewSkillcategoriesComponent', () => {
  let component: ViewSkillcategoriesComponent;
  let fixture: ComponentFixture<ViewSkillcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSkillcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSkillcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
