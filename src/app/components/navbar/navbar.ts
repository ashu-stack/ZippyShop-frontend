import { Component,inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from '../../../product';
import { ProductService } from '../../services/product-service';
import { Input } from '@angular/core';
import { CartService } from '../../services/cart-service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  product !: Observable<Products>;

  service = inject(ProductService)
  cartService = inject(CartService)

  @Input()
  name !: string;

  getProduct(){
    
    this.product = this.service.getProductByName(this.name)
  }

  setName(name: string){
    this.name = name;
  }

   viewCart(){
    this.cartService.getCart();
  }


}
