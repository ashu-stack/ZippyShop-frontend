import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupService } from '../../services/signup-service';

@Component({
  selector: 'app-signup-component',
  imports: [RouterModule,SignupService],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.css',
})
export class SignupComponent {}
