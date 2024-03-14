import { Component } from '@angular/core';
import { Objet } from '../../entities';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrl: './add-object.component.css'
})
export class AddObjectComponent {
  object:Objet={
    name:"",
    description:"",
    owner:0,
    image:""
  };
}
