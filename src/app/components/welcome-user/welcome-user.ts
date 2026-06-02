import { CommonModule } from '@angular/common';
import { Component,Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../../response';
import{Category} from '../category/category'
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-welcome-user',
  imports: [CommonModule,Category,RouterModule],
  templateUrl: './welcome-user.html',
  styleUrl: './welcome-user.css',
})
export class WelcomeUser implements OnInit {
  @Input()
 loginResponse = history.state.loginResponse;

  ngOnInit(): void {
    //console.log(this.loginResponse)
  }


}
