import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    constructor(private el: ElementRef, private service : HighlightJsService) {}
  viz1props = {id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height:'300px'};
  viz2props = {id: '298bbd6d-f23d-4469-94a2-df243d680e0c', height:'300px'};
  jsContent1="viz1props = {id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height:'300px'}";
  jsContent2="viz1props = {id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height:'300px'}";

  ngOnInit() {
  }
  ngAfterViewInit() {        
        this.service.highlight(this.el.nativeElement.querySelector('.typescript'));
    }
}
