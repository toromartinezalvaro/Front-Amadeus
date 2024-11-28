import { TestBed } from '@angular/core/testing';

import { DestinoSharedService } from './destino-shared.service';

describe('DestinoSharedService', () => {
  let service: DestinoSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinoSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
