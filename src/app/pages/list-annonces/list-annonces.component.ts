import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../services/annonce/annonce.service';
import { Annonce, User } from '../../entities';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrl: './list-annonces.component.css'
})
export class ListAnnoncesComponent implements OnInit {

  constructor(private annonceService:AnnonceService){}
  annonces:Annonce[]=[]
  user?:User;

  ngOnInit(): void {
    let tempUser = localStorage.getItem('logged')
    if (tempUser) {
      this.user = JSON.parse(tempUser);
      // console.log(this.user);
    }

    if (this.user) {
      this.annonceService.fetchOneByUser(this.user['id']).subscribe(data=> {
        this.annonces = data;
      });
    }
    
  }
}
