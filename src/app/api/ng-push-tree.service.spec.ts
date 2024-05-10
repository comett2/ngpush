import { TestBed } from '@angular/core/testing';

import { NgPushTreeService } from './ng-push-tree.service';

describe('NgPushTreeServiceService', () => {
  let service: NgPushTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPushTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
