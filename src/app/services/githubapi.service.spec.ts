import { TestBed, inject } from '@angular/core/testing';

import { GithubapiService } from './githubapi.service';

describe('GithubapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubapiService]
    });
  });

  it('should be created', inject([GithubapiService], (service: GithubapiService) => {
    expect(service).toBeTruthy();
  }));
});
