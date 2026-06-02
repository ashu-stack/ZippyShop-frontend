import { Component,inject, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../../services/product-service';
import { Observable } from 'rxjs';
import {Products} from '../../../product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searched-product',
  imports: [Product,CommonModule],
  templateUrl: './searched-product.html',
  styleUrl: './searched-product.css',
})
export class SearchedProduct implements OnInit {

  service = inject(ProductService)

  product$ !: Observable<Products>

  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get('name')
    if(productName){
      this.product$ = this.service.getProductByName(productName)
    }
    
  }
}
