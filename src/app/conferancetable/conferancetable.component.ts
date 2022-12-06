import { Component, OnInit } from '@angular/core';
import { Conferance } from '../model/Conferance.model';
import { ConferanceService } from '../services/conferance.service';

@Component({
  selector: 'app-conferancetable',
  templateUrl:'./conferancetable.component.html'

})
export class ConferancetableComponent implements OnInit {
conferances?: Conferance[];
image: any;
listImages: String[] = [];
  constructor(private conferanceService : ConferanceService) { }


  ngOnInit(): void {
    this.FetchConferance();
  }

FetchConferance(){
  this.conferanceService.ListConferance().subscribe(con => {
    console.log(con);
    this.conferances= con;
    for (let index = 0; index < this.conferances.length; index++) {
      this.conferanceService
        .loadImage(this.conferances[index].image.idImage)
        .subscribe((res: any) => {
          //console.log(res.name)
          this.listImages[index] =
            'data:' + res.type + ';base64,' + res.image;
          });
        }
        
      });
    }


  }
