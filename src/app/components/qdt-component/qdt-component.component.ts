import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { QdtComponent } from 'qdt-components';

@Component({
	selector: 'qdt-component',
	templateUrl: './qdt-component.component.html',
	styleUrls: ['./qdt-component.component.less']
})
export class QdtComponentComponent implements OnInit {

	@Input() Component: Function;
	@Input() props: object;

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
		QdtComponent.render(this.Component, this.props, this.elementRef.nativeElement);
	}

}
