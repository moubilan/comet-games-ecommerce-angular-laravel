import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  id !: any;
  product !: any;
  products !: any;
  idc !: any;
  
  constructor(private productService : ProductsService,
              private router :Router,
              private activatedRoute : ActivatedRoute) { }

  getProductById(id: any){
    
    this.productService.getDataById(id).subscribe(
      (res)=>{this.product = res;},
      (error)=>{console.log(error);}
    )  
  }
  
  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('id:',this.id);
    this.getProductById(this.id);
  }

}
