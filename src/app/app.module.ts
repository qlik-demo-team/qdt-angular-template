import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppComponent } from './components/app/app.component';
import { QdtComponentComponent } from './components/qdt-component/qdt-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardVizApiComponent } from './components/dashboard-viz-api/dashboard-viz-api.component';
import { PerformanceComponent } from './components/performance/performance.component';


@NgModule({
  declarations: [
    AppComponent,
    QdtComponentComponent,
    DashboardComponent,
    DashboardVizApiComponent,
    PerformanceComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HighlightJsModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
