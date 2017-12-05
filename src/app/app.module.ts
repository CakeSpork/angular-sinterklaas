import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TriviaComponent } from './trivia/trivia.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TriviaService } from './trivia.service';
import {SinterkluisApiService} from "./sinterkluis-api.service";

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ TriviaService, SinterkluisApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
