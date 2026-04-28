import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  http = inject(HttpClient);

  body = {
    "userName" : "Ashutosh",
    "password" : "goat"
  }

  login(){
    const url = "localhost:8080/login"
    this.http.post(url, this.body).subscribe(()=>
    {
      
    });
  }
}
