import { ChangeDetectionStrategy } from "@angular/core";

export class NgDetectNode {

	constructor(
		public readonly id: string,
		public readonly strategy: ChangeDetectionStrategy,
		public readonly children: Array<NgDetectNode> = []
	) {
	}

}
