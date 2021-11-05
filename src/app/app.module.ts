import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from "./menu.component";
import { WhatIDoComponent } from "./what.i.do.component";
import { AboutComponent } from "./about.component";
import { WhoAmIComponent } from "./who.am.i.component";
import { WorksComponent } from "./works.component";
import { GallaryComponent } from "./gallary.component";
import { ContactComponent } from "./contact.component";
import { FooterComponent } from "./footer.component";
import { DB } from "../app/services/DB";
import { ResumeComponent } from "./resume.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WhatIDoComponent,
    AboutComponent,
    WhoAmIComponent,
    WorksComponent,
    GallaryComponent,
    ContactComponent,
    FooterComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DB],
  bootstrap: [AppComponent]
})
export class AppModule { }
