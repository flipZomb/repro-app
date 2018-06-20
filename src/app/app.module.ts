import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
