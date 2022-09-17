import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {

  products : any;
  product = new Product();
  
  constructor(private productsService: ProductsService,
              private router: Router,
              private activateRoute: ActivatedRoute) { }

  // getProductsBycategory(id: number){
  //   this.productsService.getDataByCategory(id).subscribe(
  //     (res)=>{
  //       this.products = res;
  //       console.log(this.products);
  //     },
  //     (error)=>{
  //       console.log(error);
  //     }
  //   )
  // }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
      this.productsService.getDataByCategory(+id).subscribe(
        (res)=>{
          this.products = res;
          console.log(this.products);
        },
        (error)=>{
          console.log(error);
    })
  }
}
