import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Objet } from '../../entities';

@Injectable({
  providedIn: 'root'
})
export class ObjetService {

  constructor(private http:HttpClient) { }

  fetchOne(id:any){
    return this.http.get<Objet>(environment.serverUrl+'/api/objets/'+id);
  }

  fetchOneByUser(id:any){
    return this.http.get<Objet[]>(environment.serverUrl+'/api/objets/user/'+id);
  }

  add(objet:Objet){
    return this.http.post<Objet>(environment.serverUrl+'/api/objets',objet);
  }

  delete(id:number){
    return this.http.delete<void>(environment.serverUrl+'/api/objets/'+id);
  }

  update(objet:Objet){
    return this.http.patch<Objet>(environment.serverUrl+'/api/objets/'+objet.id,objet);
  }

}
