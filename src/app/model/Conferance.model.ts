import { GuardsCheckStart } from "@angular/router";
import { Image } from "./image.model";
export class Conferance {
    id! : number;
    //dateCreation!: Date;
    title! : String;
    description! : String;
    location! : String;
    guest! : String;
    nbPlace!: number;
    image! : Image;
}