import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'picasso-scatterplot',
  templateUrl: './picasso-scatterplot.component.html',
  styleUrls: ['./picasso-scatterplot.component.css']
})
export class PicassoScatterplotComponent implements OnInit {

	constructor(private el: ElementRef, private service : HighlightJsService) { }

	viz1 = {
		type: 'QdtSelectionToolbar',
		props: {
			type: 'QdtSelectionToolbar', height: '300px',
		},
	};
	viz2 = {
        type: 'QdtPicasso',
        props: {
          type: 'scatterplot',
          cols: ['Case Owner', '=Avg([Case Duration Time])', '=Count( {$<Status -={\'Closed\'} >} Distinct %CaseId )'],
          options: { noTooltip: true },
          outerHeight: 300,
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
            type: 'QdtPicasso',
            props: {
              type: 'scatterplot',
              cols: ['Case Owner', '=Avg([Case Duration Time])', '=Count( {$<Status -={\'Closed\'} >} Distinct %CaseId )'],
              options: { noTooltip: true },
              outerHeight: 300,
            },
        };
    `;

  ngOnInit() {
  }

}
