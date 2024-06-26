import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatAnchor, MatButton } from "@angular/material/button";
import { NgDetectNode } from "./api/ng-detect-node";
import { NgPushTreeService } from "./api/ng-push-tree.service";
import { MatTree, MatTreeNode } from "@angular/material/tree";
import { NgPushNodeComponent } from "./ui/ng-push-node/ng-push-node.component";
import { NgDefaultNodeComponent } from "./ui/ng-default-node/ng-default-node.component";
import { NgPushTreeServiceImpl } from "./infrastructure/ng-push-tree.service-impl";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatCardContent, MatCard, MatButton, MatAnchor, MatTree, MatTreeNode, NgPushNodeComponent, NgDefaultNodeComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NgPushTreeService,
			useClass: NgPushTreeServiceImpl
		}
	]
})
export class AppComponent implements OnInit {

	node: NgDetectNode | null = null;
	onPushStrategy = ChangeDetectionStrategy.OnPush;
	defaultStrategy = ChangeDetectionStrategy.Default;

	constructor(
		private ngPushTreeService: NgPushTreeService,
		private changeDetectorRef: ChangeDetectorRef
	) {
	}

	ngOnInit() {
		this.ngPushTreeService
			.getTreeOfNodes()
			.subscribe(node => {
				this.node = node;
				this.changeDetectorRef.detectChanges();
			});
	}
}
