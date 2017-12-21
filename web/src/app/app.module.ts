import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidenavComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
