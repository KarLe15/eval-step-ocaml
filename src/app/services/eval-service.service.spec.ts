import { TestBed } from '@angular/core/testing';

import { EvalService } from './eval.service';

describe('EvalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvalService = TestBed.get(EvalService);
    expect(service).toBeTruthy();
  });
});
