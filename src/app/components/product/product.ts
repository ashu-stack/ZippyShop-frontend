import { Component } from '@angular/core';
import { Products } from '../../../product';
import { Input } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-product',
  imports: [Counter],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  @Input()
  product !: Products

  

}
