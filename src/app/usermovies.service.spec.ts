import { TestBed } from '@angular/core/testing';

import { UsermoviesService } from './usermovies.service';

describe('UsermoviesService', () => {
  let service: UsermoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
