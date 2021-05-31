
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Location } from '@angular/common';

import { Restaurant } from '../services/restaurant';

@Component({
  selector: 'app-add-restaurant-category',
  templateUrl: './add-restaurant-category.page.html',
  styleUrls: ['./add-restaurant-category.page.scss'],
})
export class AddRestaurantCategoryPage implements OnInit {

  restaurantForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  selectedId: number;
  restaurant: Restaurant;

  constructor(
    private restaurentService : RestaurantService,
    private router : Router,
    private route: ActivatedRoute,
    private zone: NgZone,
    private location: Location,) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.selectedId = params.id;
    });
  }

  addRestaurant(){
    if (!this.restaurantForm.valid) {
      return false;
    } else {
      this.restaurant = this.restaurantForm.value;
      this.restaurant.id_category = this.selectedId;
      this.restaurant.id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

      console.log(this.restaurant);
      
      this.restaurentService
        .createRestaurant(this.restaurant)
        .subscribe((response) => {
          this.zone.run(() => {
            this.restaurantForm.reset();
            this.location.back();
          });
        });

    }
  }

}
