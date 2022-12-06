import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conferance } from '../model/Conferance.model';
import { Image } from '../model/image.model';
import { ConferanceService } from '../services/conferance.service';

@Component({
  selector: 'app-add-conferance',
  templateUrl: './add-conferance.component.html'
})
export class AddConferanceComponent implements OnInit {

  uploadedImage!: File;
  image: any;
  response: any;
  newConferance = new Conferance();
  constructor(private conferanceService: ConferanceService, private router: Router) { }

  ngOnInit(): void {
  }
  addconferance() {
    // this.conferanceService.AddConferance(this.newConferance).subscribe(con => {
    //   console.log(con);
    //   this.router.navigate(['conferancetable']);
    // });

    this.conferanceService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((response: any) => {
        this.conferanceService
          .loadImage(response.idImage)
          .subscribe((image: any) => {
            let img = new Image();
            img.idImage = image.idImage;
            img.name = image.name;
            img.type = image.type;
            img.image = image.image;
            this.newConferance.image = new Image();
            this.newConferance.image = img;
            this.conferanceService.AddConferance(this.newConferance).subscribe(con => {
              console.log(con);
              this.router.navigate(['conferancetable']);
            });
          });
      });


  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }
}
