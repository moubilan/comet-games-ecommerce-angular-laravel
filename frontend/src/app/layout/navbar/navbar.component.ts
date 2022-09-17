import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: any;

  constructor(private categoriesService : CategoriesService,
              private router : Router,
              private activatedRoute: ActivatedRoute) { }

  // a faire : Rendre le dropdown menu des categories dynamique 
  onChange(){
      
      console.log('hello');
    }

  ngOnInit(): void {
    this.categoriesService.CategoryData().subscribe(
      (res)=>{this.categories = res; console.log(this.categories)},
      (error)=>{console.log('dropdown menu not working')}
      )
  }

}
