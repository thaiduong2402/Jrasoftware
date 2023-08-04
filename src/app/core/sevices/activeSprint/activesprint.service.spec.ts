import { TestBed } from '@angular/core/testing';

import { ActivesprintService } from './activesprint.service';

describe('ActivesprintService', () => {
  let service: ActivesprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivesprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
