import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../../product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class ProductService {

  http = inject(HttpClient)

  // products !: Products

  getProducts(category : string): Observable<Products[]>{

    console.log("http://localhost:8080/user/product/category/" + category)
    return this.http.get<Products[]>("http://localhost:8080/user/product/category/"+ category)
     
  }

  
}
