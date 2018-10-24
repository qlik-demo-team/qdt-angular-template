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
		type: 'QdtSelectionToolbar',
		props: {
			type: 'QdtSelectionToolbar', height: '300px',
		},
	};
	viz2 = {
		type: 'QdtViz',
		props: {
      type: 'barchart',
      id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
      height: '300px',
      exportData: true,
      exportImg: true,
      exportImgOptions: { width: 600, height: 400, format: 'JPG' },
      exportPdf: true,
      exportPdfOptions: { documentSize: { width: 300, height: 150 } },
		},
    };
    
    htmlContent = `
        <div class="row">
            <div class="col-md-12">
                <qdt-component [Component]="viz1.type" [props]="viz1.props"></qdt-component>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <qdt-component [Component]="viz2.type" [props]="viz2.props"></qdt-component>
            </div>
        </div>        
    `;

    jsContent = `
        viz1 = {
            type: 'QdtSelectionToolbar',
            props: {
                type: 'QdtSelectionToolbar', height: '300px',
            },
        };
        viz2 = {
            type: 'QdtViz',
            props: {
                type: 'barchart', id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height: '300px',
            },
        };
    `;

	ngOnInit() {
	}

}
