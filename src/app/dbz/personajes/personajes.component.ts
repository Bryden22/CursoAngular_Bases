import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  get personajes(){
    return this.dbzservice.personajes;
  }

  //@Input ()  personajes: Personaje[]=[];

  constructor( private dbzservice: Dbzservice ){

  }

}
