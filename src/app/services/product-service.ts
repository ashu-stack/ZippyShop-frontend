import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../../product';

@Injectable({
  providedIn: 'root',
  
})
export class ProductService {

  http = inject(HttpClient)

  products !: Products

  getProducts(category : string){

    console.log("http://localhost:8080/user/product/category/" + category)
     this.http.get("http://localhost:8080/user/product/category/"+ category)
     .subscribe(val => console.log(val))
  }

  
}
