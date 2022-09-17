import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories:any;

  constructor(private categoriesService: CategoriesService,
              private router: Router) { }

  getCategories(){
    this.categoriesService.CategoryData().subscribe(
      (res)=>{
        this.categories = res;
        console.log(this.categories);
      })
  }

  // c'est la meme chose que le routerLink 
  onViewProducts(id: number){
    this.router.navigate(['/category', id]);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
