import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-categories',
  templateUrl: './restaurant-categories.page.html',
  styleUrls: ['./restaurant-categories.page.scss'],
})
export class RestaurantCategoriesPage {
  categories : Category[];

  constructor(private categorieServ : CategoryService, private router : Router) { }

  ionViewWillEnter() {
    this.categories = this.categorieServ.getCategories();
  }

  restaurent(idCategory){
    this.router.navigate(['/restaurant-list'], { queryParams: { id: idCategory } });
  }

}
