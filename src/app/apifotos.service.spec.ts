import { TestBed } from '@angular/core/testing';

import { ApifotosService } from './apifotos.service';

describe('ApifotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApifotosService = TestBed.get(ApifotosService);
    expect(service).toBeTruthy();
  });
});
