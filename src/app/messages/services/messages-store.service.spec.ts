import { TestBed } from '@angular/core/testing';

import { MessagesStoreService } from './messages-store.service';

describe('MessagesStoreService', () => {
  let service: MessagesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
