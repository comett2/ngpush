import { TestBed } from '@angular/core/testing';

import { NgPushTreeServiceService } from './ng-push-tree-service.service';

describe('NgPushTreeServiceService', () => {
  let service: NgPushTreeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPushTreeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
