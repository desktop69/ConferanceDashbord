import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conferance } from '../model/Conferance.model';
import { ConferanceService } from '../services/conferance.service';

@Component({
  selector: 'app-conferancetable',
  templateUrl:'./conferancetable.component.html'

})
export class ConferancetableComponent implements OnInit {
conferances?: Conferance[];
currentConference = new Conferance();
image: any;
listImages: String[] = [];
  constructor(private conferanceService : ConferanceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


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

    deleteConferance(con: Conferance){
      let conf = confirm("Etes-vous Sure ?");
      if (conf){
        this.conferanceService.DeletConferance(con.id).subscribe( ()=>{
          console.log("Confrence  deleted succefully :) ");
          this.FetchConferance();
        } )
      }
    }


    updateConf(){
    this.router.navigate(['UpdatConferancet'])

    }
      


  }
