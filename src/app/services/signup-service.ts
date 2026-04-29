import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private http = inject(HttpClient);

  body = {
    "username" : "Soha",
    "email"   :"soha@lrtiwari.com",
    "password" : "bejinevjk",
    "confirmPassword" : "bejinevjk"
  }


  signup(){
    this.http.post('http://localhost:8080/auth/signup', this.body).subscribe({
      next : (res) => {console.log(res);},
      error: (err) => {console.log(err)}
    })
  }
}
