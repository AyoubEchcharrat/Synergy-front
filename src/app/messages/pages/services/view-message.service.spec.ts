import { TestBed } from '@angular/core/testing';

import { ViewMessageService } from './view-message.service';

describe('ViewMessageService', () => {
  let service: ViewMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
