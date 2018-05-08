import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'selection-toolbar',
  templateUrl: './selection-toolbar.component.html',
  styleUrls: ['./selection-toolbar.component.css']
})
export class SelectionToolbarComponent implements OnInit {

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
          type: 'QdtViz', id: 'ycppXj', height: '300px',
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
            type: 'QdtViz', id: 'ycppXj', height: '300px',
            },
        };
    `;

  ngOnInit() {
  }

}
