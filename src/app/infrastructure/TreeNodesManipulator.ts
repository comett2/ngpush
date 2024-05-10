import { NgDetectNode } from "../api/ng-detect-node";
import { ChangeDetectionStrategy } from "@angular/core";

export class TreeNodesManipulator {
	removeNode(tree: NgDetectNode, nodeToRemove: NgDetectNode): void {
		if (tree === nodeToRemove) {
			return;
		}
		this.removeNodeFromChildren(tree, nodeToRemove);

	}

	addNode(tree: NgDetectNode, parentNodeId: string, newNodeStrategy: ChangeDetectionStrategy): void {
		const node = new NgDetectNode(String(Math.random()), newNodeStrategy);
		this.addNodeToChildren(tree, parentNodeId, node);
	}

	private removeNodeFromChildren(tree: NgDetectNode, nodeToRemove: NgDetectNode) {
		tree.children.forEach((child, index) => {
			if (child === nodeToRemove) {
				tree.children.splice(index, 1);
			} else {
				this.removeNodeFromChildren(child, nodeToRemove);
			}
		});
	}

	private addNodeToChildren(tree: NgDetectNode, parentNodeId: string, node: NgDetectNode) {
		if (tree.id === parentNodeId) {
			tree.children.push(node);
		} else {
			tree.children.forEach(child => {
				this.addNodeToChildren(child, parentNodeId, node);
			});
		}
	}
}
