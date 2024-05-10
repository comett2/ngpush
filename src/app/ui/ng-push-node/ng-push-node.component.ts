import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, Renderer2, ViewChild } from '@angular/core';
import { NgDetectNode } from "../../api/ng-detect-node";
import { NgDefaultNodeComponent } from "../ng-default-node/ng-default-node.component";
import { MatButton, MatMiniFabButton } from "@angular/material/button";
import { StaticVariables } from "../StaticVariables";
import { MatIcon } from "@angular/material/icon";
import { NgPushTreeService } from "../../api/ng-push-tree.service";

@Component({
	selector: 'app-ng-push-node',
	standalone: true,
	imports: [
		forwardRef(() => NgDefaultNodeComponent),
		NgDefaultNodeComponent,
		MatButton,
		MatIcon,
		MatMiniFabButton
	],
	templateUrl: './ng-push-node.component.html',
	styleUrl: './ng-push-node.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgPushNodeComponent {

	@ViewChild('parent_node') parent_node: ElementRef | null = null;
	@Input() node: NgDetectNode | null = null;

	onPushStrategy = ChangeDetectionStrategy.OnPush;
	defaultStrategy = ChangeDetectionStrategy.Default;

	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef,
		private readonly ngPushTreeService: NgPushTreeService
	) {

	}
	ngDoCheck() {
		this.animate();
	}

	animate(): void {
		if (this.parent_node === null) {
			return;
		}
		this.renderer.addClass(this.parent_node?.nativeElement, 'animate__animated');
		setTimeout(() => {
			this.renderer.removeClass(this.parent_node?.nativeElement, 'animate__animated');
		}, StaticVariables.ANIMATION_DURATION);
	}

	clicked() {

	}


	addDefaultChild() {
		if (this.node !== null) {
			this.ngPushTreeService.addNode(this.node.id, ChangeDetectionStrategy.Default);
		}
	}

	addOnPushChild() {
		if (this.node !== null) {
			this.ngPushTreeService.addNode(this.node.id, ChangeDetectionStrategy.OnPush);
		}
	}

	removeNode() {
		if (this.node !== null) {
			this.ngPushTreeService.removeNode(this.node);
		}
	}
}
