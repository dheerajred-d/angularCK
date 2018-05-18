import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ResizerDirective } from './directives/resizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ResizerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
