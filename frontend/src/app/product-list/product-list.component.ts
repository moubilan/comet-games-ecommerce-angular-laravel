import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : any;
  product = new Product();

  constructor(private productsServices: ProductsService) { }

  getAllProducts(){
    this.productsServices.getData().subscribe(
      (res)=>{
        this.products = res;
        console.log(this.products);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
