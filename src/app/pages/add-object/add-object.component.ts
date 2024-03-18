import { Component } from '@angular/core';
import { Objet } from '../../entities';
import { ObjetService } from '../../services/objet/objet.service';
import { Router } from '@angular/router';

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
  feedback?:string;

  constructor(private objectService:ObjetService, private router:Router){}



  formSubmit(){
    let storageUser = localStorage.getItem('logged');
    if (storageUser) {
      let user = JSON.parse(storageUser);
      this.object.owner = user['id'];
      // console.log(this.object);
      
    }else{
      return console.log("Vous n'etes pas connecté !");
    }

    this.objectService.add(this.object).subscribe({
      complete: ()=>{this.router.navigate(['/'])},
      error: ()=>{ this.feedback= "Cannot Add"}
    });
    
  }
}
