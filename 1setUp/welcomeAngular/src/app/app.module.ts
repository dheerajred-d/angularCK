import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FirstAComponent } from './first-component/first-a.component';
import { FirstBComponent } from './first-component/first-b.component';
import { FancyComponent } from './fancy/fancy.component';
import { CodeCardComponent } from './fancy/code-card/code-card.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FirstAComponent,
    FirstBComponent,
    FancyComponent,
    CodeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
