import { ChangeDetectionStrategy, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { NgDetectNode } from "./ng-detect-node";
import { NgDetectionStrategy } from "./ng-detection-strategy";

@Injectable({
  providedIn: 'root'
})
export class NgPushTreeServiceService {

  constructor() { }

  getTreeOfNodes(): Observable<NgDetectNode> {
    return of(new NgDetectNode("root", ChangeDetectionStrategy.Default, this.getChildrenNodes()));
  }

  private getChildrenNodes(): Array<NgDetectNode> {
    return [
      new NgDetectNode("child1", ChangeDetectionStrategy.OnPush),
      new NgDetectNode("child2", ChangeDetectionStrategy.OnPush, this.getGrandChildrenNodes())
    ];
  }

  private getGrandChildrenNodes(): Array<NgDetectNode> {
    return [
      new NgDetectNode("grandchild1", ChangeDetectionStrategy.Default),
      new NgDetectNode("grandchild2", ChangeDetectionStrategy.OnPush),
      new NgDetectNode("grandchild3", ChangeDetectionStrategy.Default)
    ];
  }
}
