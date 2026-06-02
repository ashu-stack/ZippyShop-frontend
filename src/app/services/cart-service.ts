import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import{Carts} from '../../../src/cart'


@Injectable({
  providedIn: 'root',
})
export class CartService {

  cart !: Carts
  private http = inject(HttpClient)
  baseParams = new HttpParams()

  constructor(private router: Router){

  }

  addToCart(item: string, quantity: number){
    console.log('add to cart method')
    // console.log('http://localhost:8080/user/cart/addItem/' + item+ '/d2d0bdda-5529-41f5-bf6d-49c3ba7fae3c')
    // console.log('http://localhost:8080/user/cart/addItem/Lays/d2d0bdda-5529-41f5-bf6d-49c3ba7fae3c')

    this.http.post('http://localhost:8080/user/cart/addItem/' + item+ '/d2d0bdda-5529-41f5-bf6d-49c3ba7fae3c', 
     {}, {params:this.baseParams.set('quantity', quantity)})
    .subscribe({
      next: (response) =>{
        console.log(response)
      }
    })
  }

  removeItem(item:string){
    console.log('remove from cart method')
    const params = this.baseParams
    .set('name', item)
    .set('custId', 'd2d0bdda-5529-41f5-bf6d-49c3ba7fae3c')
    this.http.delete('http://localhost:8080/user/cart/removeItem',  {params}).subscribe({
      next: (response) =>{
        console.log(response)
      },
      error:(error)=> {
        console.log(error)
      }
    })
  }


  getCart(){
    console.log('get cart api')
    this.http.get("http://localhost:8080/user/cart/showItems/d2d0bdda-5529-41f5-bf6d-49c3ba7fae3c")
      .subscribe({
        next: (response) =>{
          //console.log(response)
          
          this.router.navigate(
            ['/cart'],
            {
              state: {
                cart : response
              }
            }
          )
        },
        error: (error) => {
          console.log(error)
        }
      })
  }


}
