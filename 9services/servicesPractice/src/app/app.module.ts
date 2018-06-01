import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { RemOneComponent } from './services/rem-one.component';
import { RemoteService } from './services/remote.service';
import { RemTwoComponent } from './services/rem-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    RemOneComponent,
    RemTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
