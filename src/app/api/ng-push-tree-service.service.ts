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
    return of(new NgDetectNode("root", ChangeDetectionStrategy.Default));
  }
}
