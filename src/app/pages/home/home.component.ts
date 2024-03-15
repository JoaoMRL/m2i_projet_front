import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Annonce, Objet } from '../../entities';
import { AnnonceService } from '../../services/annonce/annonce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  annonces:Annonce[]=[];
  constructor(public authService:AuthService, private annonceService:AnnonceService){}

  ngOnInit(): void {
    this.annonceService.fetchAll().subscribe(data => this.annonces = data);

  }
  checkIfLogged() {
    this.authService.getUser().subscribe(data => console.log(data));
  }

}
