import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConferancetableComponent } from './conferancetable/conferancetable.component';
import { HttpClientModule } from '@angular/common/http';
import { AddConferanceComponent } from './add-conferance/add-conferance.component';
import { FormsModule } from '@angular/forms';
import { UpdatConferanceComponent } from './updat-conferance/updat-conferance.component';
import { ParticipantComponent } from './participant/participant.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterFrontComponent } from './shared/footer-front/footer-front.component';
import { HeaderFrontComponent } from './shared/header-front/header-front.component';
import { MainComponent } from './shared/main/main.component';
import { DetailComponent } from './shared/detail/detail.component';
import { UpdateCoferanceComponent } from './update-coferance/update-coferance.component';


@NgModule({
  declarations: [
    AppComponent,
    ConferancetableComponent,
    AddConferanceComponent,
    UpdatConferanceComponent,
    ParticipantComponent,
    AddParticipantComponent,
    SidebarComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    MainComponent,
    DetailComponent,
    UpdateCoferanceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, MatToolbarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
