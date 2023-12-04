import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title:string="this is products component"

  constructor(private ProductService:ProductService){}
  productsListinproductcomponent:Product[]=[];
  ngInit(){
    this.productsListinproductcomponent=this.ProductService.getproductList();
  }

}
