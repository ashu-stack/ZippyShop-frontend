import { Component, inject , OnInit} from '@angular/core';

import { RouterModule,ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';

import { Product } from '../product/product';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product-service';
import { Products } from '../../../product';

@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [RouterModule, Product,CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  service = inject(ProductService);

    private route = inject(ActivatedRoute);

  
  product$ !: Observable<Products[]>

  ngOnInit() : void{

     const category =
      this.route.snapshot.paramMap.get('category');

      if(category){
        this.product$ = this.service.getProducts(category)
      }

  }


  //products$ = this.service.getProducts

}
