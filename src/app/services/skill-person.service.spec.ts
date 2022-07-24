import { TestBed } from '@angular/core/testing';

import { SkillPersonService } from './skill-person.service';

describe('SkillPersonService', () => {
  let service: SkillPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
