import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  forwardRef,
  Input,
  Renderer2,
  ViewChild
} from '@angular/core';
import { NgDetectNode } from "../../api/ng-detect-node";
import { NgPushNodeComponent } from "../ng-push-node/ng-push-node.component";
import { MatButton, MatMiniFabButton } from "@angular/material/button";
import { StaticVariables } from "../StaticVariables";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-ng-default-node',
  standalone: true,
  imports: [
    forwardRef(() => NgPushNodeComponent),
    MatButton,
    MatMiniFabButton,
    MatIcon
  ],
  templateUrl: './ng-default-node.component.html',
  styleUrl: './ng-default-node.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NgDefaultNodeComponent implements DoCheck {

  @ViewChild('parent_node') parent_node: ElementRef | null = null;
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
}
