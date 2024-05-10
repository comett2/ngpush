import { ChangeDetectionStrategy, Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from "rxjs";
import { NgDetectNode } from "./ng-detect-node";
import { NgDetectionStrategy } from "./ng-detection-strategy";

export abstract class NgPushTreeService {

	abstract getTreeOfNodes(): Observable<NgDetectNode>;

	abstract removeNode(node: NgDetectNode): void;

    abstract addNode(parentNodeId: string, newNodeStrategy: ChangeDetectionStrategy): void;
}
