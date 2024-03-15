import { Component, OnInit } from '@angular/core';
import { Emprunt, User } from '../../entities';
import { EmpruntService } from '../../services/emprunt/emprunt.service';

@Component({
  selector: 'app-list-emprunts',
  templateUrl: './list-emprunts.component.html',
  styleUrl: './list-emprunts.component.css'
})
export class ListEmpruntsComponent implements OnInit{

  constructor(private empruntService:EmpruntService){}
  emprunts:Emprunt[]=[]
  user?:User;
  title?:string;

  ngOnInit(): void {
    let tempUser = localStorage.getItem('logged')
    if (tempUser) {
      this.user = JSON.parse(tempUser);
      // console.log(this.user);
    }

    if (this.user) {
      this.empruntService.fetchOneByUser(this.user.id).subscribe(data=> {
        this.emprunts = data;
        this.emprunts.forEach(element => {
          element.theAnnonce.forEach(nameAnnonce => {
            if (!this.title) {
              this.title= nameAnnonce['annonceName'];
            }
          });
        });
        console.log(this.title);
        // console.log(this.emprunts);
      });
    }
    
  }

}
