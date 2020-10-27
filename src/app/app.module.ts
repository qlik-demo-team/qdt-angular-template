import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QdtComponentsComponent } from './qdt-components/qdt-components.component';

@NgModule({
  declarations: [
    AppComponent,
    QdtComponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
