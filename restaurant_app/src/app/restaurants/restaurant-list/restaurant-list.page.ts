import { Component, Input, OnInit } from '@angular/core';

import { RestaurantService } from '../services/restaurant.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Restaurant } from '../services/restaurant';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {

  idCategory: number;
  selectedId: number;

  
  constructor(private restaurentService: RestaurantService, private route: ActivatedRoute,private router: Router) { }

  Restaurents: any = [];
  result: any;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.selectedId = params.id;
    });
    this.restaurentService.restaurents(this.selectedId).subscribe((response) => {
      this.Restaurents = response["data"];
      console.log("all respanse = " + JSON.stringify(this.Restaurents));
    });
  }

  navigateToAdd() {
    this.router.navigate(['/restaurant-list']);
  }

  restaurentList(idRestaurent){
    this.router.navigate(['/restaurant-details'], { queryParams: { id: idRestaurent } });
  }

  addRestaurent(){
    this.router.navigate(['/add-restaurant'], { queryParams: { id: this.selectedId } });
  }

}
