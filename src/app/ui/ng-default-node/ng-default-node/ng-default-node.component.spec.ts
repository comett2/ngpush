import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDefaultNodeComponent } from './ng-default-node.component';

describe('NgDefaultNodeComponent', () => {
  let component: NgDefaultNodeComponent;
  let fixture: ComponentFixture<NgDefaultNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDefaultNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgDefaultNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
