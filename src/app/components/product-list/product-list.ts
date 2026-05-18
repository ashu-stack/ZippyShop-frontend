import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { PRODUCTS } from '../../../db-data';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule, Product],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  

  products = PRODUCTS

}
