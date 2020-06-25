import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
	selector: 'embed-object',
	templateUrl: './embed-object.component.html',
	styleUrls: ['./embed-object.component.css']
})
export class EmbedObjectComponent implements OnInit {

	constructor(private el: ElementRef, private service : HighlightJsService) { }

	viz1 = {
		props: {
            id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
            height: 400,
		},
    };
    
    htmlContent = `
    `;

    jsContent = `
    `;

	ngOnInit() {
	}

}
