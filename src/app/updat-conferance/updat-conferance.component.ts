import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conferance } from '../model/Conferance.model';
import { ConferanceService } from '../services/conferance.service';

@Component({
  selector: 'app-updat-conferance',
  templateUrl: './updat-conferance.component.html'
})
export class UpdatConferanceComponent implements OnInit {
currentConferance = new Conferance();

  constructor(private activatedRoute: ActivatedRoute,
    private conferanceService: ConferanceService,
    private router: Router) { }


    updateconferance (){
      this.conferanceService.UpdateConferance(this.currentConferance).subscribe(cur =>{
        this.router.navigate([])
      })

    }



  ngOnInit(): void {
  }

}
