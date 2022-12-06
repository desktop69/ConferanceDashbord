import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../model/Participant.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )};

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  participantlist: Participant[];
  participant! : Participant;
  apiURL: string = 'http://localhost:8090/Conference/api/part';
  constructor(private http : HttpClient) {
    this.participantlist = []
   }

 ListeParticipant ():Observable<Participant[]>{
  return this.http.get<Participant[]>(this.apiURL)
 }

DeletParticipant(id : number){
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions)

}
AddParticipant(p :Participant):Observable<Participant>{
  return this.http.post<Participant>(this.apiURL, p , httpOptions)
}


}
