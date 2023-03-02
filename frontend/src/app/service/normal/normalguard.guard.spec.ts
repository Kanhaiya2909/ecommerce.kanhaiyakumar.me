import { TestBed } from '@angular/core/testing';

import { NormalguardGuard } from './normalguard.guard';

describe('NormalguardGuard', () => {
  let guard: NormalguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NormalguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
