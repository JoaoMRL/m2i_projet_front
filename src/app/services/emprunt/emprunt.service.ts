import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emprunt } from '../../entities';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get<Emprunt[]>(environment.serverUrl+'/api/emprunts');
  }

  fetchOne(id:any){
    return this.http.get<Emprunt>(environment.serverUrl+'/api/emprunts/'+id);
  }

  fetchOneByUser(id:any){
    return this.http.get<Emprunt[]>(environment.serverUrl+'/api/emprunts/user/'+id);
  }

  add(emprunts:Emprunt){
    return this.http.post<Emprunt>(environment.serverUrl+'/api/emprunts', emprunts);
  }

  delete(id:number){
    return this.http.delete<void>(environment.serverUrl+'/api/emprunts/'+id);
  }

  update(emprunts:Emprunt){
    return this.http.patch<Emprunt>(environment.serverUrl+'/api/emprunts/'+emprunts.id,emprunts);
  }
}
