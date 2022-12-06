import { Component, OnInit } from '@angular/core';
import { Participant } from '../model/Participant.model';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html'
})
export class ParticipantComponent implements OnInit {
  participants?: Participant[];
  constructor(private participantservices : ParticipantService) { }


  FetchConferance(){
    this.participantservices.ListeParticipant().subscribe(con => {
      console.log(con);
      this.participants= con;
    })
  }
  deleteParticipant(p: Participant){
    let conf = confirm("Etes-vous Sure ?");
    if (conf){
      this.participantservices.DeletParticipant(p.idpart).subscribe( ()=>{
        console.log("participant deleted succefully :) ");
        this.FetchConferance();
      } )
    }
  }

  ngOnInit(): void {
    this.FetchConferance();
  }

}
