import { TestBed } from '@angular/core/testing';

import { TextExporterService } from './text-exporter.service';

describe('TextExporterService', () => {
  let service: TextExporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextExporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
