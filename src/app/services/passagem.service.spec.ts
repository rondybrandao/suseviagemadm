import { TestBed } from '@angular/core/testing';

import { PassagemService } from './passagem.service';

describe('PassagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassagemService = TestBed.get(PassagemService);
    expect(service).toBeTruthy();
  });
});
