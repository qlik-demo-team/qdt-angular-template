import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private service : HighlightJsService) {}

  btn1props = {title:'Clear Selections', type:'clearSelections'};
  viz1props = {id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height:'300px'};
  viz2props = {id: '298bbd6d-f23d-4469-94a2-df243d680e0c', height:'300px'};
  viz3props = {id: 'ycppXj', height:'200px'};
//   kpi1props = {qMeasure: `Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )`, listenToSelections: false};
  kpi1props = {cols: [null,`=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )`]};
  kpi2props = {cols: [null,`=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )`]};
  kpi3props = {cols: [null,`=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )`]};

  htmlContent = `
    <div class="row">
        <div class="col-md-12 text-right">
            <qdt-component [Component]="'QdtButton'" [props]="btn1props"></qdt-component>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <qdt-component [Component]="'QdtSelectionToolbar'"></qdt-component>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <qdt-component [Component]="'QdtViz'" [props]="viz3props"></qdt-component>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 text-center">
            <h4>High Priority Cases</h4>
            <h2><qdt-component [Component]="'QdtKpi'" [props]="kpi1props"></qdt-component></h2>
        </div>
        <div class="col-md-4 text-center">
            <h4>Medium Priority Cases</h4>
            <h2><qdt-component [Component]="'QdtKpi'" [props]="kpi2props"></qdt-component></h2>
        </div>
        <div class="col-md-4 text-center">
            <h4>Low Priority Cases</h4>
            <h2><qdt-component [Component]="'QdtKpi'" [props]="kpi3props"></qdt-component></h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <qdt-component [Component]="'QdtViz'" [props]="viz1props"></qdt-component>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <qdt-component [Component]="'QdtViz'" [props]="viz2props"></qdt-component>
        </div>
    </div>`;
  jsContent=`
    btn1props = {title:'Clear Selections', type:'clearSelections'};
    viz1props = {id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height:'300px'};
    viz2props = {id: '298bbd6d-f23d-4469-94a2-df243d680e0c', height:'300px'};
    viz3props = {id: 'ycppXj', height:'200px'};
    kkpi1props = {cols: [null,"=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )"]};
    kpi2props = {cols: [null,"=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )"]};
    kpi3props = {cols: [null,"=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )"]};
  
  `;

  ngOnInit() {
  }
  ngAfterViewInit() {        
    this.service.highlight(this.el.nativeElement.querySelector('.typescript'));
    this.service.highlight(this.el.nativeElement.querySelector('.html'));
  }
}
