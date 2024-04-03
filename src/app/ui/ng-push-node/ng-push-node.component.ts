import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgDetectNode } from "../../api/ng-detect-node";

@Component({
  selector: 'app-ng-push-node',
  standalone: true,
  imports: [],
  templateUrl: './ng-push-node.component.html',
  styleUrl: './ng-push-node.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgPushNodeComponent {

  @Input() node: NgDetectNode | null = null;

}
