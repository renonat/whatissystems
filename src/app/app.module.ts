import { NgModule }      from '@angular/core';

import { AppComponent }  from './home/app.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OurEducationComponent } from './blog/our-education/our-education.component';
import { GeneralEngineeringComponent } from './blog/general-engineering/general-engineering.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule, BrowserModule, HttpModule, HttpClientModule
  ],
  declarations: [ AppComponent, OurEducationComponent, GeneralEngineeringComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ Title, {provide: LocationStrategy, useClass: HashLocationStrategy } ]
})

export class AppModule {
}
