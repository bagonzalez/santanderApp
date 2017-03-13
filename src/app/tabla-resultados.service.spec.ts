import { TestBed, inject } from '@angular/core/testing';

import { TablaResultadosService } from './tabla-resultados.service';

describe('TablaResultadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TablaResultadosService]
    });
  });

  it('should ...', inject([TablaResultadosService], (service: TablaResultadosService) => {
    expect(service).toBeTruthy();
  }));
});
