import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConferanceComponent } from './add-conferance/add-conferance.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';

import { ConferancetableComponent } from './conferancetable/conferancetable.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "conferancetable", component: ConferancetableComponent },
  { path: "add-conferancetable", component: AddConferanceComponent },
  { path: "Participantfecth", component: ParticipantComponent },
  { path: "AddParticipant", component: AddParticipantComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
