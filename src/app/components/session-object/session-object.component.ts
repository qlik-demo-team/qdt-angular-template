import { Component, OnInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'session-object',
  templateUrl: './session-object.component.html',
  styleUrls: ['./session-object.component.css']
})
export class SessionObjectComponent implements OnInit {

	constructor(private el: ElementRef, private service : HighlightJsService) { }

    viz1 = {
        type: 'QdtSelectionToolbar',
        props: {
            type: 'QdtSelectionToolbar', height: '300px',
        },
    };
    viz2Options = {
        showTitles: true,
        title: 'Custom title',
        subtitle: 'Custom Subtitle',
        footnote: 'Custom Footnote',
        scrollStartPos: 0,
        orientation: 'horizontal',
        dataPoint: {
          showLabels: true,
        },
        qHyperCubeDef: {
          qDimensions: [{
            qDef: {
              qGrouping: 'N',
              qFieldDefs: ['Case Owner Group'],
              qSortCriterias: [{
                qSortByState: 0,
                qSortByFrequency: 0,
                qSortByNumeric: 0,
                qSortByAscii: 1,
                qSortByLoadOrder: 1,
                qSortByExpression: 0,
                qExpression: {
                  qv: '',
                },
                qSortByGreyness: 0,
              }],
            },
          }],
          qMeasures: [{
            qDef: {
              qDef: '=Avg([Case Duration Time])',
              qLabel: 'Custom Measure Label',
            },
            qSortBy: {
              qSortByState: 0,
              qSortByFrequency: 0,
              qSortByNumeric: -1,
              qSortByAscii: 0,
              qSortByLoadOrder: 1,
              qSortByExpression: 0,
              qExpression: {
                qv: '',
              },
            },
            qAttributeExpressions: [{
              qExpression: "If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Low', rgb(39,110,39),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Medium', rgb(255,207,2),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='High', rgb(249,63,23))))",
              id: 'colorByExpression',
            }],
          }],
          qInterColumnSortOrder: [
            1,
            0,
          ],
          qSuppressZero: false,
          qSuppressMissing: true,
        },
        color: {
          auto: false,
          mode: 'byExpression',
          expressionIsColor: true,
        },
        legend: {
          show: true,
        },
        dimensionAxis: {
          show: 'labels',
        },
        measureAxis: {
          show: 'labels',
          spacing: 2,
        },
      };
      viz2 = {
        type: 'QdtViz',
        props: {
          type: 'barchart', options: this.viz2Options, height: '300px',
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
        viz2Options = {
            showTitles: true,
            title: 'Custom title',
            subtitle: 'Custom Subtitle',
            footnote: 'Custom Footnote',
            scrollStartPos: 0,
            orientation: 'horizontal',
            dataPoint: {
            showLabels: true,
            },
            qHyperCubeDef: {
            qDimensions: [{
                qDef: {
                qGrouping: 'N',
                qFieldDefs: ['Case Owner Group'],
                qSortCriterias: [{
                    qSortByState: 0,
                    qSortByFrequency: 0,
                    qSortByNumeric: 0,
                    qSortByAscii: 1,
                    qSortByLoadOrder: 1,
                    qSortByExpression: 0,
                    qExpression: {
                    qv: '',
                    },
                    qSortByGreyness: 0,
                }],
                },
            }],
            qMeasures: [{
                qDef: {
                qDef: '=Avg([Case Duration Time])',
                qLabel: 'Custom Measure Label',
                },
                qSortBy: {
                qSortByState: 0,
                qSortByFrequency: 0,
                qSortByNumeric: -1,
                qSortByAscii: 0,
                qSortByLoadOrder: 1,
                qSortByExpression: 0,
                qExpression: {
                    qv: '',
                },
                },
                qAttributeExpressions: [{
                qExpression: "If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Low', rgb(39,110,39),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Medium', rgb(255,207,2),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='High', rgb(249,63,23))))",
                id: 'colorByExpression',
                }],
            }],
            qInterColumnSortOrder: [
                1,
                0,
            ],
            qSuppressZero: false,
            qSuppressMissing: true,
            },
            color: {
            auto: false,
            mode: 'byExpression',
            expressionIsColor: true,
            },
            legend: {
            show: true,
            },
            dimensionAxis: {
            show: 'labels',
            },
            measureAxis: {
            show: 'labels',
            spacing: 2,
            },
        };
        viz2 = {
            type: 'QdtViz',
            props: {
            type: 'barchart', options: this.viz2Options, height: '300px',
            },
        };
    `;

  ngOnInit() {
  }

}
