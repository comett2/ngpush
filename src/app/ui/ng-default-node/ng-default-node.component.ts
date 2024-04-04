import { ChangeDetectionStrategy, Component, DoCheck, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';
import { NgDetectNode } from "../../api/ng-detect-node";
import { NgPushNodeComponent } from "../ng-push-node/ng-push-node.component";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-ng-default-node',
  standalone: true,
  imports: [
    forwardRef(() => NgPushNodeComponent),
    MatButton
  ],
  templateUrl: './ng-default-node.component.html',
  styleUrl: './ng-default-node.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NgDefaultNodeComponent implements DoCheck {

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
    }, 500);
  }

  clicked() {

  }
}
