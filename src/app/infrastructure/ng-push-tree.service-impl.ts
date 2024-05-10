import { ChangeDetectionStrategy, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from "rxjs";
import { NgDetectNode } from "../api/ng-detect-node";
import { NgPushTreeService } from "../api/ng-push-tree.service";
import { TreeNodesManipulator } from "./TreeNodesManipulator";

@Injectable({
	providedIn: 'root'
})
export class NgPushTreeServiceImpl extends NgPushTreeService {

	private tree$: ReplaySubject<NgDetectNode> = new ReplaySubject(1);
	private tree: NgDetectNode = new NgDetectNode("root", ChangeDetectionStrategy.Default, this.getChildrenNodes());

	constructor() {
		super();
		this.tree$.next(this.tree);
	}

	override getTreeOfNodes(): Observable<NgDetectNode> {
		return this.tree$.asObservable();
	}

	override removeNode(node: NgDetectNode): void {
		new TreeNodesManipulator().removeNode(this.tree, node);
		this.tree$.next(this.tree);
	}

	override addNode(parentNodeId: string, newNodeStrategy: ChangeDetectionStrategy): void {
		new TreeNodesManipulator().addNode(this.tree, parentNodeId, newNodeStrategy);
		this.tree$.next(this.tree);
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
