import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { ProductFormComponent } from './product-list/product-form/product-form.component';
import { ProductsService } from './services/products.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { CategoriesComponent } from './layout/categories/categories.component';
import { BestSellersComponent } from './product-list/best-sellers/best-sellers.component';
import { NewArrivalsComponent } from './product-list/new-arrivals/new-arrivals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { CategoryProductsComponent } from './product-list/category-products/category-products.component';


const routes : Routes = [
  { path: '', component: CategoriesComponent},
  { path: 'login', component: SignInComponent},
  { path: 'register', component: SignUpComponent},
  { path: 'shop', component: ProductListComponent},
  { path: 'shop/:id', component: SingleProductComponent},
  { path: 'category/:id', component: CategoryProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ProductListComponent,
    SingleProductComponent,
    ProductFormComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TopbarComponent,
    CategoriesComponent,
    BestSellersComponent,
    NewArrivalsComponent,
    CarouselComponent,
    CategoryProductsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})

  ],
  providers: [ProductsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
