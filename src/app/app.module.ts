import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { QdtComponentComponent } from './components/qdt-component/qdt-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerformanceComponent } from './components/performance/performance.component';


@NgModule({
  declarations: [
    AppComponent,
    QdtComponentComponent,
    DashboardComponent,
    PerformanceComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
