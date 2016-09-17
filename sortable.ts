import {Directive, ElementRef, AfterContentInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {ObjectService} from 'services/object-service/objects.service';

@Directive({
	selector:					'[sortable]',
	changeDetection:	ChangeDetectionStrategy.OnPush
})

export class Sortable implements AfterContentInit {
	@Input('sortable') sortableArray;
	@Output() changeOrder = new EventEmitter();
	
	constructor(elem: ElementRef) {
		this.elem = elem;
	}
	
	ngAfterContentInit() {
		$(this.elem.nativeElement).sortable({
			handle: ".handle",
			containment: "parent",
			opacity: 0.5,
			scroll: true,
			update: (event, ui) => {
				console.log("moved from: " + this.starting_position + " to " + ui.item.index());
				this.changeOrder.emit({
					startIndex:		this.starting_position,
					endIndex:			ui.item.index()
				})
			},
			start:	(event, ui) => {
				this.starting_position = ui.item.index()
			}
		});
	}
}