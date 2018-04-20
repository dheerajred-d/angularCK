import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { FormerComponent } from './parentcomponent/former.component';
import { GrasperComponent } from './parentcomponent/grasper.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentcomponentComponent,
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
