import { Component, OnInit } from '@angular/core';
import * as qConfig from '../../../qConfig.json';
window['qConfig'] = qConfig
import { QdtViz } from 'qdt-components';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
	constructor() { }
	title = 'Angular5 & qdt-components';
    connected: boolean = false;
    multiData: any;
    QdtViz = QdtViz;
    viz1props = {id: 'akDGX', height:'300px'};
    viz2props = {type: 'barchart', cols: {} };

	async ngOnInit() {
	}
}
