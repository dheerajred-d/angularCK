import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IpComponent } from './databinding/ip.component';
import { CodekulComponent } from './codekul/codekul.component';
import { AndroidComponent } from './android/android.component';
import { AngComponent } from './codekul/ang/ang.component';
import { ThingsComponent } from './android/things.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    IpComponent,
    CodekulComponent,
    AndroidComponent,
    AngComponent,
    ThingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
