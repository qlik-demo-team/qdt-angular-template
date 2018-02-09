import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-dashboard-viz-api',
  templateUrl: './dashboard-viz-api.component.html',
  styleUrls: ['./dashboard-viz-api.component.less']
})
export class DashboardVizApiComponent implements OnInit {

    constructor(private el: ElementRef, private service : HighlightJsService) {}
  vizOptions = {      
        "showTitles": true,
        "title": "Custom title",
        "subtitle": "Custom Subtitle",
        "footnote": "Custom Footnote",
        "scrollStartPos": 0,
        "orientation": "horizontal",
        "dataPoint": {
            "showLabels": true
        },
        "qHyperCubeDef": {
            "qDimensions": [{ 
                "qDef": { 
                    "qGrouping": "N", 
                    "qFieldDefs": [ 'Case Owner Group' ],
                    "qSortCriterias": [ {
                        "qSortByState": 0,
                        "qSortByFrequency": 0,
                        "qSortByNumeric": 0,
                        "qSortByAscii": 1,
                        "qSortByLoadOrder": 1,
                        "qSortByExpression": 0,
                        "qExpression": {
                            "qv": ""
                        },
                        "qSortByGreyness": 0
                    }],
                } 
            }],
            "qMeasures": [{
                "qDef": {
                    "qDef": '=Avg([Case Duration Time])',
                    "qLabel": "Custom Measure Label"
                },
                "qSortBy": { 
                    "qSortByState": 0, 
                    "qSortByFrequency": 0, 
                    "qSortByNumeric": -1, 
                    "qSortByAscii": 0, 
                    "qSortByLoadOrder": 1, 
                    "qSortByExpression": 0, 
                    "qExpression": { 
                        "qv": "" 
                    } 
                },
                "qAttributeExpressions": [{
                    "qExpression": "If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Low', rgb(39,110,39),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Medium', rgb(255,207,2),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='High', rgb(249,63,23))))",
                    "id": "colorByExpression"
                }]
            }],
            "qInterColumnSortOrder": [
                1,
                0
            ],
            "qSuppressZero": false,
            "qSuppressMissing": true,
        },
        "color": {
            "auto": false,
            "mode": "byExpression",
            "expressionIsColor": true
        },
        "legend": {
            "show": true
        },
        "dimensionAxis": {
            "show": "labels"
        },
        "measureAxis": {
            "show": "labels",
            "spacing": 2,
        }
  }

  htmlContent = `
    <div class="row">
        <div class="col-md-12">
            <qdt-component [Component]="'QdtViz'" [props]="viz1props"></qdt-component>
        </div>
    </div>`;
  jsContent=`
    vizOptions = {      
        "showTitles": true,
        "title": "Custom title",
        "subtitle": "Custom Subtitle",
        "footnote": "Custom Footnote",
        "scrollStartPos": 0,
        "orientation": "horizontal",
        "dataPoint": {
            "showLabels": true
        },
        "qHyperCubeDef": {
            "qDimensions": [{ 
                "qDef": { 
                    "qGrouping": "N", 
                    "qFieldDefs": [ 'Case Owner Group' ],
                    "qSortCriterias": [ {
                        "qSortByState": 0,
                        "qSortByFrequency": 0,
                        "qSortByNumeric": 0,
                        "qSortByAscii": 1,
                        "qSortByLoadOrder": 1,
                        "qSortByExpression": 0,
                        "qExpression": {
                            "qv": ""
                        },
                        "qSortByGreyness": 0
                    }],
                } 
            }],
            "qMeasures": [{
                "qDef": {
                    "qDef": '=Avg([Case Duration Time])',
                    "qLabel": "Custom Measure Label"
                },
                "qSortBy": { 
                    "qSortByState": 0, 
                    "qSortByFrequency": 0, 
                    "qSortByNumeric": -1, 
                    "qSortByAscii": 0, 
                    "qSortByLoadOrder": 1, 
                    "qSortByExpression": 0, 
                    "qExpression": { 
                        "qv": "" 
                    } 
                },
                "qAttributeExpressions": [{
                    "qExpression": "If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Low', rgb(39,110,39),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Medium', rgb(255,207,2),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='High', rgb(249,63,23))))",
                    "id": "colorByExpression"
                }]
            }],
            "qInterColumnSortOrder": [
                1,
                0
            ],
            "qSuppressZero": false,
            "qSuppressMissing": true,
        },
        "color": {
            "auto": false,
            "mode": "byExpression",
            "expressionIsColor": true
        },
        "legend": {
            "show": true
        },
        "dimensionAxis": {
            "show": "labels"
        },
        "measureAxis": {
            "show": "labels",
            "spacing": 2,
        }
    }
  `;
  viz1props = {type: 'barchart', options: this.vizOptions, height:'300px'};

  ngOnInit() {
  }
  ngAfterViewInit() {        
    this.service.highlight(this.el.nativeElement.querySelector('.typescript'));
    this.service.highlight(this.el.nativeElement.querySelector('.html'));
  }

}
