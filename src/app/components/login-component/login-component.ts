import { Component, inject, EventEmitter, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms'
import { Login } from '../../../../src/login';
import {LoginService} from '../../services/login-service'
import { LoginResponse } from '../../../login-response';
import { Response } from '../../../response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

  constructor( private router: Router){
   
  }


  login : Login = {
    username : '',
    password : ''
  }

  loginResponse$ !: Observable<Response>
  loginResponse !: Response

  


  loginService = inject(LoginService);

  @Output()
  loginEvent = new EventEmitter<any>();

  setUser(username:string){
      this.login.username = username;
  }

  setPass(pass: string){
    this.login.password = pass;
  }

  loginFunc(){
    //console.log(this.login.username)
   // console.log(this.login.password)
    this.loginResponse$  = this.loginService.login(this.login)
     this.loginResponse$.subscribe({
      next: (response) => {
        console.log(response)
        this.loginResponse = response

        this.router.navigate(
          ['/welcome'],
          {
            state: {
              loginResponse: response
            }
          }
        )
      },

      error: (error) => {
        console.log(error)
        this.router.navigate(['/welcome'])
      }
    })
   //console.log(this.loginResponse$ )
   //this.loginEvent.emit(this.loginResponse$)
  }
}
