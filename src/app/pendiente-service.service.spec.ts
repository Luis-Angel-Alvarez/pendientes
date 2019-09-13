import { TestBed } from '@angular/core/testing';

import { PendienteServiceService } from './pendiente-service.service';

describe('PendienteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendienteServiceService = TestBed.get(PendienteServiceService);
    expect(service).toBeTruthy();
  });
});
