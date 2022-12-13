import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conferance } from '../model/Conferance.model';
import { ConferanceWrapper } from '../model/ConferanceWrapper.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )};

@Injectable({
  providedIn: 'root'
})
export class ConferanceService {
  conferanceslist: Conferance[];
  conferance! : Conferance;
  apiURL: string = 'http://localhost:8090/Conference/api';
  apiURLCon: string = 'http://localhost:8090/Conference/con';

  constructor(private http : HttpClient) {
    this.conferanceslist = [];
   }
   
   ListConferance ():Observable<Conferance[]>{
    return this.http.get<Conferance[]>(this.apiURL)
   }
   
   AddConferance (conferanc :Conferance):Observable<Conferance>{
    return this.http.post<Conferance>(this.apiURL, conferanc, httpOptions);
   }

   UpdateConferance(con : Conferance):Observable<Conferance>{
    return this.http.put<Conferance>(this.apiURL, con, httpOptions);
   }

   ConsultConferance(id : number):Observable<Conferance>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Conferance>(url);

   }
   FetchConferance():Observable<Conferance[]>{
    return this.http.get<Conferance[]>(this.apiURL)
   }
   FetchConferanceWrap():Observable<ConferanceWrapper>{
    return this.http.get<ConferanceWrapper>(this.apiURLCon)
   }


   DeletConferance(id : number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions)
   }





      /*image functions*/
  
      uploadImage(file : File , filename : string) {

        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURL + "/image/upload"}`
        return this.http.post(url ,imageFormData)
      }
    
    
      loadImage(id : number) {
  
        const url = `${this.apiURL + "/image/get/info"}/${id}`
        return this.http.get(url) ;
      }
    
      deleteImage(idImage : number) {
        const url = `${this.apiURL + "/image/delete"}/${idImage}`
        return this.http.delete(url)
      }
      /******************* */



}
