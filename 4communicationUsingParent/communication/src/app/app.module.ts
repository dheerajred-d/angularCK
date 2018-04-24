import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FormerComponent } from './parent/former.component';
import { GrasperComponent } from './parent/grasper.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
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
