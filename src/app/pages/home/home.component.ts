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
  constructor(public authService:AuthService, 
    private annonceService:AnnonceService){}

  searchBar:string="";

  ngOnInit(): void {
    this.annonceService.fetchAll().subscribe(data => this.annonces = data);
  }

  search(){
    if (this.searchBar.length >0) {
      this.annonceService.search(this.searchBar).subscribe(data => this.annonces = data);
    }else{
      this.annonceService.fetchAll().subscribe(data => this.annonces=data);
    }
    
    
  }
}
