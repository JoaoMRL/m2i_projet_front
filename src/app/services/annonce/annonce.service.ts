import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../../entities';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/annonces');
  }

  fetchOne(id:any){
    return this.http.get<Annonce>(environment.serverUrl+'/api/annonces/'+id);
  }

  search(term:string){
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/annonces/search/'+term);
  }

  add(annonce:Annonce){
    return this.http.post<Annonce>(environment.serverUrl+'/api/annonces', annonce);
  }

  delete(id:number){
    return this.http.delete<void>(environment.serverUrl+'/api/annonces/'+id);
  }

  update(annonce:Annonce){
    return this.http.patch<Annonce>(environment.serverUrl+'/api/annonces/'+annonce.id,annonce);
  }

}
