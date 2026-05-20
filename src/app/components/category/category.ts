import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Observable } from 'rxjs';
import { Products } from '../../../product';


@Component({
  selector: 'app-category',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {

  @Input()
  category !: string

  product$ !: Observable<Products[]>

  service = inject(ProductService);

  getProducts(category: string){
    this.category = category;

    this.product$ =this.service.getProducts(this.category)


  }


  


}
