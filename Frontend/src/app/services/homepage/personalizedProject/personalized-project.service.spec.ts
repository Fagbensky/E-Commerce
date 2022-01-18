import { TestBed } from '@angular/core/testing';

import { PersonalizedProjectService } from './personalized-project.service';

describe('PersonalizedProjectService', () => {
  let service: PersonalizedProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalizedProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
