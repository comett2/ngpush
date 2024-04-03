import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPushNodeComponent } from './ng-push-node.component';

describe('NgPushNodeComponent', () => {
  let component: NgPushNodeComponent;
  let fixture: ComponentFixture<NgPushNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgPushNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgPushNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
