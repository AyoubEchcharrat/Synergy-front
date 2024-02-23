import { TestBed } from '@angular/core/testing';

import { ChannelsStoreService } from './channels-store.service';

describe('ChannelsStoreService', () => {
  let service: ChannelsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
