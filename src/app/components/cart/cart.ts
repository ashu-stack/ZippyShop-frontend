import { Component, OnInit, Input } from '@angular/core';
import{PRODUCTS} from '../../../db-data'
import { RouterModule } from '@angular/router';
import { Products } from '../../../product';

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  
  cart = history.state.cart;

  products: Products[]=[]
  amount =0;

  ngOnInit(): void {

    console.log(history.state.cart.productList)

      this.products = this.cart?.productList || [];
      for(const product of this.products){
      this.amount += product.price;
    
    }
    

    // console.log(this.cart.products)
  }

  
  
  
}
