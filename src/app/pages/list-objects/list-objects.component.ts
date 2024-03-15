import { Component, OnInit } from '@angular/core';
import { ObjetService } from '../../services/objet/objet.service';
import { Objet, User } from '../../entities';

@Component({
  selector: 'app-list-objects',
  templateUrl: './list-objects.component.html',
  styleUrl: './list-objects.component.css'
})
export class ListObjectsComponent implements OnInit {

  constructor(private objectService: ObjetService) { }

  objects: Objet[] = [];
  user?: User;

  ngOnInit(): void {
    // this.objectService.fetchOneByUser();
    let tempUser = localStorage.getItem('logged')
    if (tempUser) {
      this.user = JSON.parse(tempUser);
      console.log(this.user);
    }

    if (this.user) {
      this.objectService.fetchOneByUser(this.user.id).subscribe(data=> {
        this.objects = data;
      });
    }
  }

}
