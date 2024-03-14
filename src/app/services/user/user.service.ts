import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../../entities';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<User[]>(environment.serverUrl+'/api/user');
  }

  fetchOne(id:any){
    return this.http.get<User>(environment.serverUrl+'/api/user/'+id);
  }

  update(user:User){
    return this.http.patch<User>(environment.serverUrl+'/api/user/'+user.id,user);
  }
  
}
