import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { EmbedObjectComponent } from '../components/embed-object/embed-object.component';
import { CurrentSelectionsComponent } from '../components/current-selections/current-selections.component';
import { PicassoComboLineBarchartComponent } from '../components/picasso-combo-line-barchart/picasso-combo-line-barchart.component';
import { PicassoHorizontalBarchartComponent } from '../components/picasso-horizontal-barchart/picasso-horizontal-barchart.component';
import { PicassoLineChartComponent } from '../components/picasso-line-chart/picasso-line-chart.component';
import { PicassoMultiLineChartComponent } from '../components/picasso-multi-line-chart/picasso-multi-line-chart.component';
import { PicassoPieChartComponent } from '../components/picasso-pie-chart/picasso-pie-chart.component';
import { PicassoScatterplotComponent } from '../components/picasso-scatterplot/picasso-scatterplot.component';
import { PicassoScatterplotWithImagesComponent } from '../components/picasso-scatterplot-with-images/picasso-scatterplot-with-images.component';
import { PicassoVerticalBarchartComponent } from '../components/picasso-vertical-barchart/picasso-vertical-barchart.component';
import { SearchComponent } from '../components/search/search.component';
import { SelectionToolbarComponent } from '../components/selection-toolbar/selection-toolbar.component';
import { SessionObjectComponent } from '../components/session-object/session-object.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'embed-object', component: EmbedObjectComponent },
  { path: 'current-selections', component: CurrentSelectionsComponent },
  { path: 'picasso-combo-line-barchart', component: PicassoComboLineBarchartComponent },
  { path: 'picasso-horizontal-barchart', component: PicassoHorizontalBarchartComponent },
  { path: 'picasso-line-chart', component: PicassoLineChartComponent },
  { path: 'picasso-multi-line-chart', component: PicassoMultiLineChartComponent },
  { path: 'picasso-pie-chart', component: PicassoPieChartComponent },
  { path: 'picasso-scatterplot', component: PicassoScatterplotComponent },
  { path: 'picasso-scatterplot-with-images', component: PicassoScatterplotWithImagesComponent },
  { path: 'picasso-vertical-barchart', component: PicassoVerticalBarchartComponent },
  { path: 'search', component: SearchComponent },
  { path: 'selection-toolbar', component: SelectionToolbarComponent },
  { path: 'session-object', component: SessionObjectComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
