import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  CategoryData(){
    return this.httpClient.get('http://ecommerce.test/api/categories');
  }
}
