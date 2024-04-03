import { ChangeDetectionStrategy } from "@angular/core";

export class NgDetectNode {
	private children: Array<NgDetectNode> = [];

	constructor(
		public readonly id: string,
		public readonly strategy: ChangeDetectionStrategy
	) {
	}

}
