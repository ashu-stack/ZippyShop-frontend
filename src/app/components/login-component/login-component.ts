import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
    public loginForm !: FormGroup;

    constructor(private formBuilder : FormBuilder, private http : HttpClient,
       private router : Router ){

    }

    ngOnInit() : void{
      this.loginForm = this.formBuilder.group(
        {
          email: [''],
          password: ['', Validators.required]
        })
    }

    login(){
      this.http.get<any>('http://localhost:3000/loginList').subscribe(res => {
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });

        if(user) {
          alert('login successful');
          this.loginForm.reset()
          this.router.navigate([''])
        }
        else{
          alert('user not found')
        }
      },
      (err) => {
        alert('error')
      })
    }
}
