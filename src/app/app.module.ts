import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrosComponent } from './bros/bros.component';
import { BroDetailComponent } from './bro-detail/bro-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BrosComponent,
    BroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
