import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { FancyComponent } from './fancy/fancy.component';
import { NoIfDirective } from './no-if.directive';
import { FalseIfDirective } from './directives/false-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    FancyComponent,
    NoIfDirective,
    FalseIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
