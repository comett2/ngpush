import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgDetectNode } from "../../../api/ng-detect-node";

@Component({
  selector: 'app-ng-default-node',
  standalone: true,
  imports: [],
  templateUrl: './ng-default-node.component.html',
  styleUrl: './ng-default-node.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NgDefaultNodeComponent {

  @Input() node: NgDetectNode | null = null;

}
