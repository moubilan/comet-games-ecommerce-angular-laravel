import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {

  products : any;
  product = new Product();

  constructor(private productsService : ProductsService) { }

  getNewProducts(){
    this.productsService.getNewData().subscribe(
      (res)=>{
        console.log(res);
        this.products = res;
      },
      (error)=>{ console.log(error); }
    )
  }

  ngOnInit(): void {
    this.getNewProducts();
  }

}
