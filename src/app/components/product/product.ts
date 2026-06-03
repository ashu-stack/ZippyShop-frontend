import { Component, OnInit,inject } from '@angular/core';
import { Products } from '../../../product';
import { Input } from '@angular/core';
import { Counter } from '../counter/counter';
import { CommonModule } from '@angular/common';
import {AsyncPipe} from '@angular/common'
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product',
  imports: [Counter,CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product  {

  @Input()
  product !: Products

  service = inject(CartService)

  addToCart(){
    this.service.addToCart(this.product.name, 1)

  }

  removeItem(){
    this.service.removeItem(this.product.name)
  }
  

}
