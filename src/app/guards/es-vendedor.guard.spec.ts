import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { esVendedorGuard } from './es-vendedor.guard';

describe('esVendedorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => esVendedorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
