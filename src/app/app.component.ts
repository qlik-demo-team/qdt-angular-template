import { Component } from '@angular/core';
import {
  QdtSelections, QdtSelect, QdtPicasso, useBarChartSettings,
} from 'qdt-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
	viz1 = {
    component: QdtSelections,
    properties: {
      qSelectionObjectDef: {},
    },
    connection: 2,
    style: {
      width: '100%',
      paddingTop: '50px'
    }
  };

	viz2 = {
    component: QdtSelect,
    properties: {
      qListObjectDef: {
        qDef: {
          qFieldDefs: ['Date'],
        },
        qInitialDataFetch: [{
          qWidth: 1,
          qHeight: 1000,
        }],
      },
    },
    options: { multiple: false },
    connection: 2,
    style: {
      width: '100%',
      height: '50px',
      paddingTop: '30px'
    }
  };

	viz3 = {
    component: QdtPicasso,
    options: {
      settings: useBarChartSettings({
        orientation: 'horizontal',
      }),
      height: '400px',
    },
    properties: {
      qHyperCubeDef: {
        qDimensions: [
          { qDef: { qFieldDefs: ['Case Owner Group'] } },
        ],
        qMeasures: [
          { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 } },
        ],
        qInterColumnSortOrder: [1, 0],
      },
    },
    connection: 2,
    style: {
      width: '100%',
      height: '400px',
      paddingTop: '100px'
    }
  };

  // Capability API
	viz4 = {
    options: {
      id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
      height: 400,
    },
    connection: 1,
    style: {
      width: '100%',
      paddingTop: '150px'
    }
  };
  
  title = 'qdt-angular-v4';
}
