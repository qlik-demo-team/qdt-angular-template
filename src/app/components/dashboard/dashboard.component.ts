import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  viz1props = {id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height:'300px'};
  viz2props = {id: '298bbd6d-f23d-4469-94a2-df243d680e0c', height:'300px'};

  ngOnInit() {
  }

}
