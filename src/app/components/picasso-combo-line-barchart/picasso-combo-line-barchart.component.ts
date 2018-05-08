import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'picasso-combo-line-barchart',
  templateUrl: './picasso-combo-line-barchart.component.html',
  styleUrls: ['./picasso-combo-line-barchart.component.css']
})
export class PicassoComboLineBarchartComponent implements OnInit {

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
          type: 'comboLineBarchart',
          cols: [
            'Case Owner Group',
            '=Avg([Case Duration Time])',
            "=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )",
            "=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )",
            "=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )",
          ],
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
              type: 'comboLineBarchart',
              cols: [
                'Case Owner Group',
                '=Avg([Case Duration Time])',
                "=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )",
                "=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )",
                "=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )",
              ],
              outerHeight: 300,
        };
    `;


  ngOnInit() {
  }

}
