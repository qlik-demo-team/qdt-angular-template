import { Component } from '@angular/core';
import * as pckg from '../../../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    angular = (<any>pckg).dependencies['@angular/core'];
    qdtComponents = (<any>pckg).dependencies['qdt-components'];
}
