import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.less']
})
export class PerformanceComponent implements OnInit {

  constructor() { }
  viz1props = {id: 'xfvKMP', height:'300px'};
  viz2props = {id: 'PAppmU', height:'300px'};

  ngOnInit() {
  }

}
