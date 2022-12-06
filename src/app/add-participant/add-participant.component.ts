import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conferance } from '../model/Conferance.model';
import { Participant } from '../model/Participant.model';
import { ConferanceService } from '../services/conferance.service';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html'
})
export class AddParticipantComponent implements OnInit {

  newpart = new Participant();
  conferancl! :Conferance[];
  newidcat! : number;
  newConferace!: Conferance;

  constructor(private conferancesservices : ConferanceService,
    private participantservises : ParticipantService,
    private router: Router) { }

  ngOnInit(): void {
    this.conferancesservices.FetchConferanceWrap().subscribe(cats => {
      console.log(cats)
      this.conferancl = cats._embedded.conferancess;
    })
  }

  AddPArticipant(){
 // this.newpart.conference = this.conferancl.find(cat => cat.id == this.newidcat);
      this.participantservises.AddParticipant(this.newpart).subscribe( part => {
        console.log(part)
        this.router.navigate(['Participantfecth'])
      })
  }

}
// continant wrapper  conferance
//  pays             participant 