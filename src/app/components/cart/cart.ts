import { Component, OnInit } from '@angular/core';
import{PRODUCTS} from '../../../db-data'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  
  products = PRODUCTS;

  amount =0;

  ngOnInit(): void {
    for(const product of this.products){
      this.amount += product.price;
    }
  }

  
  
  
}
