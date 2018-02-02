import { Component, OnInit, ElementRef, Input } from '@angular/core';
// import * as qConfig from '../../../qConfig.json';
import QdtComponents from 'qdt-components';
let qConfig = {
"config": {
    "host": "sense-demo.qlik.com",
    "secure": true,
    "port": 443,
    "prefix": "/",
    "appId": "133dab5d-8f56-4d40-b3e0-a6b401391bde"
},
"connections": { 
    "vizApi": true, 
    "engineApi": false 
}
}

@Component({
	selector: 'qdt-component',
	templateUrl: './qdt-component.component.html',
	styleUrls: ['./qdt-component.component.less']
})
export class QdtComponentComponent implements OnInit {

	@Input() Component: Function;
    @Input() props: object;
    
    static QdtComponent = new QdtComponents(qConfig.config, qConfig.connections);

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
        QdtComponentComponent.QdtComponent.render('QdtViz', this.props, this.elementRef.nativeElement);
	}

}
