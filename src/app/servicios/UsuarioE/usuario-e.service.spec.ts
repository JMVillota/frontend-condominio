import { TestBed } from '@angular/core/testing';

import { UsuarioEService } from './usuario-e.service';

describe('UsuarioEService', () => {
  let service: UsuarioEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
