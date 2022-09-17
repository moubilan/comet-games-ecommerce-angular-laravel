import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit {

  products : any;
  product = new Product();

  constructor(private productsService : ProductsService) { }

  getBestProducts(){
    this.productsService.getBestData().subscribe(
      (res)=>{
        console.log(res);
        this.products = res;
      },
      (error)=>{ console.log(error); }
    )
  }

  ngOnInit(): void {
    this.getBestProducts();
  }


}
