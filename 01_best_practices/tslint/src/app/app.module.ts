import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appComponent } from "./app.component";

@NgModule({
  declarations: [
   appComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }