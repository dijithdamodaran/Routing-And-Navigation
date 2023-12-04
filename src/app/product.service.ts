import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsList:Product[]=[];
  getproductList(){
    this.productsList=[
      new Product(101,"keybord",1000,10),
      new Product(102,"mouse",777,15),
      new Product(103,"pendrive",678,100),
      new Product(104,"display",1200,30),
      new Product(105,"speekers",12000,45),

    ];
    return this.productsList;
  }

  constructor() { }
}
