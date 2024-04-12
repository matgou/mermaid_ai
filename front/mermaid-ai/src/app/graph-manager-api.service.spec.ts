import { TestBed } from '@angular/core/testing';

import { GraphManagerApiService } from './graph-manager-api.service';

describe('GraphManagerApiService', () => {
  let service: GraphManagerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphManagerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
