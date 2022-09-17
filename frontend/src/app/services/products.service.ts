import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://ecommerce.test/api/products')
  }

  getDataById(id:any){
    return this.httpClient.get('http://ecommerce.test/api/product/'+id)
  }

  getDataByCategory(id: any){
    return this.httpClient.get('http://ecommerce.test/api/category/'+id)
  }

  getNewData(){
    return this.httpClient.get('http://ecommerce.test/api/new-arrivals')
  }

  getBestData(){
    return this.httpClient.get('http://ecommerce.test/api/best-sellers')
  }
}
