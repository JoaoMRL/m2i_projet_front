import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../../entities';
import { environment } from '../../../environments/environment';
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  // private socket: Socket;

  constructor(private http:HttpClient) { 
    // this.socket = io('http://localhost:8000')
  }

  
  // listen(NewAnnonce: string): Observable<any> {
  //   return new Observable<any>(observer => {
  //     this.socket.on(NewAnnonce, (data: any) => {
  //       observer.next(data);
  //     });
  //   });
  // }
  
  fetchAll(){
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/annonces');
  }

  fetchOne(id:any){
    return this.http.get<Annonce>(environment.serverUrl+'/api/annonces/'+id);
  }

  fetchOneByUser(id:any){
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/annonces/user/'+id);
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
