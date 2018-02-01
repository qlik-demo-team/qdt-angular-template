import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as qConfig from '../../../qConfig.json';
import { QdtComponents } from 'qdt-components';

@Component({
	selector: 'qdt-component',
	templateUrl: './qdt-component.component.html',
	styleUrls: ['./qdt-component.component.less']
})
export class QdtComponentComponent implements OnInit {

	@Input() Component: Function;
    @Input() props: object;

    static QdtComponent = new QdtComponents(qConfig);

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
        let Component = QdtComponentComponent.QdtComponent.getViz()._v;
        QdtComponentComponent.QdtComponent.render(Component, this.props, this.elementRef.nativeElement);
	}

}
