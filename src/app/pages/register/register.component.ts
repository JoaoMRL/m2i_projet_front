import { Component } from '@angular/core';
import { User } from '../../entities';
import { AuthService } from '../../services/auth/auth.service';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  user:User={
    name:'',
    firstName:'',
    address:'',
    email:'',
    password:'',
    phoneNumber:'' ,
    avatar:''
  };
  repeat ='';
  feedback='';
  isLogin = false;

  constructor(private authService:AuthService, private router:Router ){}

  
  onSubmit(){
    if (!this.isLogin) {
      this.authService.addUser(this.user).subscribe({
        complete:()=>{this.feedback='Registration complete.'; this.isLogin=true},
        error:()=> this.feedback = 'User already exists'
      });
    }else{
      this.authService.login(this.user).subscribe({
        complete:()=>this.router.navigate(['/']),
        error:()=> this.feedback='Credentials error'
      });
    }
  }

}
