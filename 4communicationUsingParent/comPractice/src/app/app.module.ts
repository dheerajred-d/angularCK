import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormerComponent } from './data-binding/former.component';
import { GrasperComponent } from './data-binding/grasper.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    FormerComponent,
    GrasperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
