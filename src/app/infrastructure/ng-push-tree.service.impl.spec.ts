import { TestBed } from '@angular/core/testing';

import { NgPushTreeServiceImpl } from './ng-push-tree.service-impl';

describe('NgPushTreeServiceImplService', () => {
  let service: NgPushTreeServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPushTreeServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
