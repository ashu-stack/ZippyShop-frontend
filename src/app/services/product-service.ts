import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  http = inject(HttpClient)

  products !: Products

  
}
