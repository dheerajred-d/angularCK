import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewContentChildComponent } from './view-content-child/view-content-child.component';
import { ViewChildComponent } from './view-content-child/view-child.component';
import { ContentChildComponent } from './view-content-child/content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContentChildComponent,
    ViewChildComponent,
    ContentChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
