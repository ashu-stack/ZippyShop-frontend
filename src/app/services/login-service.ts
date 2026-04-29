import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private htpp = inject(HttpClient);

   body = {
    "userName" : "Ashutosh",
    "password" : "goat"
  }

  login(){
      this.htpp.post ('http://localhost:8080/auth/login', this.body).subscribe({
        next: (res) => {console.log(res);},
        error: (err) =>{ console.log(err)}
      })

  }

}
