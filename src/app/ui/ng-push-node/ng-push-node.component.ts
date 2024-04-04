import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';
import { NgDetectNode } from "../../api/ng-detect-node";
import { NgDefaultNodeComponent } from "../ng-default-node/ng-default-node.component";
import { MatButton } from "@angular/material/button";

@Component({
	selector: 'app-ng-push-node',
	standalone: true,
	imports: [
		forwardRef(() => NgDefaultNodeComponent),
		NgDefaultNodeComponent,
		MatButton
	],
	templateUrl: './ng-push-node.component.html',
	styleUrl: './ng-push-node.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgPushNodeComponent {

	@Input() node: NgDetectNode | null = null;

	onPushStrategy = ChangeDetectionStrategy.OnPush;
	defaultStrategy = ChangeDetectionStrategy.Default;

	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef
	) {

	}
	ngDoCheck() {
		this.animate();
	}

	animate(): void {
		this.renderer.addClass(this.elementRef.nativeElement, 'animate__animated');
		setTimeout(() => {
			this.renderer.removeClass(this.elementRef.nativeElement, 'animate__animated');
		}, 1000);
	}

	clicked() {

	}
}
