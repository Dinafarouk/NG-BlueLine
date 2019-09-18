import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleAndDescWidgetComponent } from './title-and-desc-widget/title-and-desc-widget.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleAndDescWidgetComponent,
    ServicesListComponent,
    OurClientsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
