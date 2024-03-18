import { Component, OnInit } from '@angular/core';
import { Annonce, Objet } from '../../../entities';
import { AnnonceService } from '../../../services/annonce/annonce.service';
import { Router } from '@angular/router';
import { ObjetService } from '../../../services/objet/objet.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrl: './add-annonce.component.css'
})
export class AddAnnonceComponent implements OnInit {
  annonce:Annonce={
    name:"",
    owner:0,
    type:"",
    msg:"",
    idObjet:0,
    status:"Disponible"
  };
  feedback?:string;
  objects: Objet[]=[];
  user:any;

  constructor(private annonceService:AnnonceService,
    private objectService:ObjetService, private router:Router){}

  ngOnInit(): void {
    let storageUser = localStorage.getItem('logged');
    if (storageUser) {
      this.user= JSON.parse(storageUser);
      this.annonce.owner= this.user['id'];
      this.objectService.fetchOneByUser(this.user['id']).subscribe(data => this.objects = data);
    }
    
  }

  formSubmit(){
    // console.log(this.annonce);
    
    this.annonceService.add(this.annonce).subscribe({
      complete: ()=>{this.router.navigate(['/'])},
      error: ()=>{ this.feedback= "Cannot Add"}
    });
    
  }
}
