import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service';


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

  service = inject(ProductService);

  getProducts(category: string){
    this.category = category;

    this.service.getProducts(this.category)


  }


  


}
