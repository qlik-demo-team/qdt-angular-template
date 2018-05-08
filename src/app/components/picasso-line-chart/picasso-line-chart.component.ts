import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'picasso-line-chart',
  templateUrl: './picasso-line-chart.component.html',
  styleUrls: ['./picasso-line-chart.component.css']
})
export class PicassoLineChartComponent implements OnInit {

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
          type: 'lineChart',
          cols: ['Date.autoCalendar.YearMonth', '=Sum([Number of New Cases])'],
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
              type: 'lineChart',
              cols: ['Date.autoCalendar.YearMonth', '=Sum([Number of New Cases])'],
              outerHeight: 300,
            },
        };
    `;

  ngOnInit() {
  }

}
