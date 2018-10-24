import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { RoutingModule } from './modules/routing.module';
import { AppComponent } from './components/app/app.component';
import { EmbedObjectComponent } from './components/embed-object/embed-object.component';
import { QdtComponentComponent } from './components/qdt-component/qdt-component.component';
import { HomeComponent } from './components/home/home.component';
import { SessionObjectComponent } from './components/session-object/session-object.component';
import { CurrentSelectionsComponent } from './components/current-selections/current-selections.component';
import { SelectionToolbarComponent } from './components/selection-toolbar/selection-toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { PicassoHorizontalBarchartComponent } from './components/picasso-horizontal-barchart/picasso-horizontal-barchart.component';
import { PicassoVerticalBarchartComponent } from './components/picasso-vertical-barchart/picasso-vertical-barchart.component';
import { PicassoPieChartComponent } from './components/picasso-pie-chart/picasso-pie-chart.component';
import { PicassoScatterplotComponent } from './components/picasso-scatterplot/picasso-scatterplot.component';
import { PicassoScatterplotWithImagesComponent } from './components/picasso-scatterplot-with-images/picasso-scatterplot-with-images.component';
import { PicassoLineChartComponent } from './components/picasso-line-chart/picasso-line-chart.component';
import { PicassoMultiLineChartComponent } from './components/picasso-multi-line-chart/picasso-multi-line-chart.component';
import { PicassoComboLineBarchartComponent } from './components/picasso-combo-line-barchart/picasso-combo-line-barchart.component';
import { PicassoStackedBarchartComponent } from './components/picasso-stacked-barchart/picasso-stacked-barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    EmbedObjectComponent,
    QdtComponentComponent,
    HomeComponent,
    SessionObjectComponent,
    CurrentSelectionsComponent,
    SelectionToolbarComponent,
    SearchComponent,
    PicassoHorizontalBarchartComponent,
    PicassoVerticalBarchartComponent,
    PicassoPieChartComponent,
    PicassoScatterplotComponent,
    PicassoScatterplotWithImagesComponent,
    PicassoLineChartComponent,
    PicassoMultiLineChartComponent,
    PicassoComboLineBarchartComponent,
    PicassoStackedBarchartComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HighlightJsModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
