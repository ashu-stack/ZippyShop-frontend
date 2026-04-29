import { Component } from '@angular/core';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login-component',
  imports: [LoginService],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

}
