import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ComingsoonComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
