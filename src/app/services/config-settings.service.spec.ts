import { TestBed } from '@angular/core/testing';

import { ConfigSettingsService } from './config-settings.service';

describe('ConfigSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigSettingsService = TestBed.get(ConfigSettingsService);
    expect(service).toBeTruthy();
  });
});
