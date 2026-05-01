import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms'


@Component({
  selector: 'app-signup-component',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.css',
})
export class SignupComponent {

  private signUpForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient,
     private router: Router){}

  ngOnInit() : void{
    this.signUpForm = this.formBuilder.group({
      username : [""],
      email : [""],
      password : [""],
      confirmPassword: [""]
    })
  }

  signup(){
    this.http.post<any>('http://localhost:3000/signupUsersList',this.signUpForm.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESFUL');
      this.signUpForm.reset()
      this.router.navigate([''])
    },err=>{
      alert("Something went wrong")
    })
  }
}
