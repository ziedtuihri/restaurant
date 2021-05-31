import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  endpoint: string = 'http://localhost:5010';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    public router: Router
  ) {}

    restaurents(id): Observable<Restaurant[]>{
      return this.http.post<any>(`${this.endpoint}/restaurants`, {id_category: id})
    }

    createRestaurant(restaurant: Restaurant): Observable<any> {
      return this.http
        .post<Restaurant>(`${this.endpoint}/chat/contact`,restaurant,this.httpOptions)
    }

}
